import { outside } from "@/outside/outside";
import store from "@/store";
import { BuildingType } from "./building";
import { BuildingsStore } from "./buildingsStore";

export const OUTSIDE_PLOT = 100;

const mystore = () : BuildingsStore => store.store.state.buildingsStore;

export const buildingService = {

    isBuildingSelected(plot : number) : boolean {
        return mystore().selected === plot;
    },

    selectBuilding(plot : number) {
        mystore().selected = plot;
    },

    getSelectedBuilding() : BuildingType | null {
        if (mystore().selected === OUTSIDE_PLOT) {
            return outside;
        } else {
            return mystore().plots[mystore().selected];
        }
    },

    getPlots() {
        return mystore().plots;
    },

    build(building : BuildingType) {
        building.build();
        mystore().plots[mystore().selected] = building;
    }
}
