import { BuildingDetails } from "@/building/building";
import { getHerbForName } from "@/apothecary/herbs";
import { PersonType } from "@/person/Person";
import store from "@/store";

export interface FarmedHerbType {
    herb: string,
    gestation: number,
    person: PersonType
}

export default {
    plant(herb : string, person : PersonType) {
        console.log("Planting " + herb);
        store.store.state.apothecary.farm.push({
            herb,
            gestation: 0,
            person
        });
    },

    grow() {
        const plants = store.store.state.apothecary.farm;
        for (const plant of plants) {
            plant.gestation += 1;
            const herb = getHerbForName(plant.herb);
            if (herb && plant.gestation >= herb.gestationPeriod) {
                // ripen
                plant.person.inventory.add(plant.herb, herb.yield);

                const index = store.store.state.apothecary.farm.indexOf(plant);
                store.store.state.apothecary.farm.splice(index, 1);
            }
        }
    },

    getDetails() {
        const details : BuildingDetails[] = [];
        for (const plant of store.store.state.apothecary.farm) {
            const herb = getHerbForName(plant.herb);
            details.push({
                item: plant.herb,
                detail: `Gestation ${plant.gestation}/${herb?.gestationPeriod} for person ${plant.person.id()}`
            });
        }
        return details;
    }
}