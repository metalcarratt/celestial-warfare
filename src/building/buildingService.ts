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

    getPlotForBuilding(buidingTitle : string) {
        let foundPlot = null;
        for (let pindex = 0; pindex < mystore().plots.length; pindex++) {
            const building = mystore().plots[pindex];
            if (building && building.title === buidingTitle) {
                foundPlot = pindex;
            }
        }
        if (!foundPlot) throw `Plot not found for building title ${buidingTitle}`;
        return foundPlot;
    },

    getPlots() {
        return mystore().plots;
    },

    build(building : BuildingType) {
        building.build();
        mystore().plots[mystore().selected] = building;
    }
}
