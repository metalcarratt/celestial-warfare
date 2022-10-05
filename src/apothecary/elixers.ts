import { Skill } from "@/library/skills"
import { GINSENG } from "./herbs"

export const enum Elixer {
    VITALITY_PILL = "Vitality Pill"
}

export interface ElixerType {
    name: Elixer,
    ingredients: {
        [detail:string]: number
    },
    skill?: Skill,
    yield: number
}

export const VitalityPill : ElixerType = {
    name: Elixer.VITALITY_PILL,
    ingredients: {
        [GINSENG]: 1
    },
    skill: Skill.VITALITY_PILL,
    yield: 2
}

export const allElixers = [
    VitalityPill
]

export const getElixerForName = (name : string) : ElixerType => {
    const elixer = allElixers.find(elixer => elixer.name === name);
    if (!elixer) throw `No elixer for name ${name}`;
    return elixer;
}