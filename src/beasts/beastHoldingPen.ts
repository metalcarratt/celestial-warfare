import { BuildingType } from "@/building/building";
import { LOCATION_BEAST_HOLDING_PEN } from "@/building/location.enum";
import { Skill } from "@/library/skills";
import store from "@/store";

export const beastHoldingPen : BuildingType = {
    title: LOCATION_BEAST_HOLDING_PEN,
    icon: 'beast.png',
    built: () => store.store.state.beastPen.built,
    build: () => store.store.state.beastPen.built = true,
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_BEAST_HOLDING_PEN)),
    canGo: (person) => person.cultivator.level() >= 1 && person.skills.knows(Skill.BEAST_TAMING_1),
    actions: () => []
}