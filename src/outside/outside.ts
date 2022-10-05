import { BuildingType } from "@/building/building";
import { LOCATION_OUTSIDE } from "@/building/location.enum";
import store from "@/store";
import { exploreForHerbs, exploreForMinerals, exploreForSpiritStones } from "./outsideActions";

export const outside : BuildingType = {
    title: LOCATION_OUTSIDE,
    icon: 'map.png',
    built: () => true,
    build: () => {},
    canBuild: () => true,

    occupants: () => store.people().filter(person => person.location.eq(LOCATION_OUTSIDE)),

    canGo : () => true,

    actions: () => [
        exploreForSpiritStones,
        exploreForMinerals,
        exploreForHerbs
    ]
};