import { ActionType, BuildingType } from "@/building/building";
import { LOCATION_OUTSIDE } from "@/building/location.enum";
import store from "@/store";

export const outside : BuildingType = {
    title: LOCATION_OUTSIDE,
    icon: 'map.png',
    built: () => true,
    build: () => {},
    canBuild: () => true,

    occupants: () => store.people().filter(person => person.location.eq(LOCATION_OUTSIDE)),

    canGo : () => true,

    actions: (person) => {
        const actions : ActionType[] = [];
        const tile = person.location.getTile();
        if (tile.resource) {
            actions.push(tile.resource.action);
        }
        return actions;
    }
};

