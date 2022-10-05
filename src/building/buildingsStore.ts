import { library } from "@/library/library";
import { residence } from "@/residence/buildings/residence";
import { BuildingType } from "./building";

export interface BuildingsStore {
    selected: number,
    plots: (BuildingType | null)[]
}

export const createBuildingsStore = () : BuildingsStore => {
    return {
        selected: 5,
        plots: [
            null, null, null, null,
            null, residence, null, null,
            null, null, library, null,
            null, null, null, null
        ]
    };
}