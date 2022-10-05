import { ActionType, BuildingType } from "@/building/building";
import { LOCATION_SECLUSION } from "@/building/location.enum";
import { PersonType } from "@/person/Person";
import store from "@/store";
import { mountain } from "./mountain";

export const senseElementsAction : ActionType = {
    name: 'Sense Elements',
    describe: 'Sensing Elements',
    action: (person : PersonType) => person.cultivator.senseElements()
}

export const seclusionChambers : BuildingType = {
    title: LOCATION_SECLUSION,
    icon: 'cave.png',
    built: () => store.store.state.residence.seclusion,
    build: () => store.store.state.residence.seclusion = true,
    canBuild: () => mountain.built(),
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_SECLUSION)),
    canGo: (person) => person.cultivator.minLevel(2),
    defaultAction: senseElementsAction
};