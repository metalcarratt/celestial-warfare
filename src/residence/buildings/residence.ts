import { ActionType, BuildingType } from "@/building/building";
import { LOCATION_RESIDENCE } from "@/building/location.enum";
import { PersonType } from "@/person/Person";
import store from "@/store";

export const cultivateAction : ActionType = {
    name: 'Cultivate',
    describe: 'Cultivating',
    action: (person : PersonType) => person.cultivator.cultivate()
}

export const residence : BuildingType = {
    title: LOCATION_RESIDENCE,
    icon: 'house.png',
    built: () => true,
    build: () => {},
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_RESIDENCE)),
    canGo: () => true,
    defaultAction: cultivateAction
};