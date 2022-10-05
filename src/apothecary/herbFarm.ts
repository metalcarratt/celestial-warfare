import { ActionType, BuildingType } from "@/building/building";
import { LOCATION_HERB_FARM } from "@/building/location.enum";
import { Skill } from "@/library/skills";
import { PersonType } from "@/person/Person";
import store from "@/store";
import farmService from "./farmService";
import { allHerbNames } from "./herbs";

export const addPlantHerbActions = (person : PersonType) => {
    const actions : ActionType[] = [];
    allHerbNames
        .filter(herb => person.inventory.has(herb))
        .forEach(herb =>
        actions.push({
            name: `Plant ${herb}`,
            describe: `Planting ${herb}`,
            action: () => farmService.plant(herb, person)
        })
    );
    return actions;
}

export const herbFarm : BuildingType = {
    title: 'Herb Farm',
    icon: 'herb-farm.png',
    details() {
        return farmService.getDetails();
    },
    built: () => store.store.state.apothecary.herbFarm,
    build: () => store.store.state.apothecary.herbFarm = true,
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_HERB_FARM)),
    canGo: (person) => person.skills.knows(Skill.HERBALISM_1) && person.cultivator.level() >= 1,
    actions: addPlantHerbActions
};