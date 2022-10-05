import { LOCATION_ARENA } from "@/building/location.enum";
import { arena } from "@/combat/arena";
import { getFoundationLevel } from "./cultivationGoals";
import { GoalType } from "./goals";

export const buildArena : GoalType = {
    name: 'Build arena',
    complete: () => arena.built(),
    action: () => arena.build()
}

export const goToArena : GoalType = {
    name: 'Go to arena',
    complete: (person) => person.location.eq(LOCATION_ARENA),
    pre: () => [
        { g: getFoundationLevel },
        { g : buildArena }
    ],
    action: (person) => person.location.goTo(LOCATION_ARENA)
}