import { getBuildingAt } from "@/building/allBuildings";
import { PersonStoreType } from "./PersonStoreType";

export class PersonLocation {

    store: PersonStoreType;
    
    constructor(personStore : PersonStoreType) {
        this.store = personStore;
    }

    eq(location : string) {
        return this.store.location === location;
    }

    goTo(location : string) {
        this.store.location = location;
    }

    is() {
        return getBuildingAt(this.store.location);
    }
}