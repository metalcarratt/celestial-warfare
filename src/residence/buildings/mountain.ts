import { ActionType, BuildingType } from "@/building/building";
import { LOCATION_MOUNTAIN } from "@/building/location.enum";
import { PersonType } from "@/person/Person";
import store from "@/store";

export const gainEnlightenmentAction : ActionType = {
    name: 'Gain Enlightenment',
    describe: 'Gaining Enlightenment',
    action: (person : PersonType) => person.cultivator.gainEnlightenment()
}

export const mountain : BuildingType = {
    title: LOCATION_MOUNTAIN,
    icon: 'mountain.png',
    built: () => store.store.state.residence.mountain,
    build: () => store.store.state.residence.mountain = true,
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_MOUNTAIN)),
    canGo: (person) => person.cultivator.minLevel(1),
    defaultAction: gainEnlightenmentAction
};