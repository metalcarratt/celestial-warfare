import { getBuildingAt } from "@/building/allBuildings";
import { mapService } from "@/outside/mapService";
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

    coordsIs({x, y} : {x : number, y: number}) {
        return this.store.coords.x === x && this.store.coords.y === y;
    }

    canTravel() {
        return this.store.energy >= 1;
    }

    travelTime() {
        return this.store.energy;
    }

    startTravelling() {
        if (this.canTravel()) {
            this.store.travelling = true;
        }
    }

    stopTravelling() {
        this.store.travelling = false;
    }

    isTravelling() {
        return this.store.travelling;
    }

    inTravelRegion(x : number, y: number) {
        return x >= this.store.coords.x - 1 && x <= this.store.coords.x + 1
            && y >= this.store.coords.y - 1 && y <= this.store.coords.y + 1;
    }

    travelTo(x: number, y: number) {
        this.store.coords.x = x;
        this.store.coords.y = y;
        this.store.energy -= 1;

        if (this.store.energy === 0) {
            this.stopTravelling();
        }
    }

    restoreEnergy() {
        this.store.energy = 2;
    }

    getTile() {
        return mapService.getTileAt(this.store.coords.x, this.store.coords.y);
    }
}