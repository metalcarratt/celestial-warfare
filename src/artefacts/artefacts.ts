import { MINERALS, SPIRIT_STONE } from "@/inventory/items"
import { Skill } from "@/library/skills"


export interface ArtefactBuildType {
    name: string,
    craftsmanLevel: number,
    materials: {
        [detail:string]: number,
    },
    skill: Skill,
    createNew: Function
}

export const SHIELD : ArtefactBuildType = {
    name: 'Shield',
    craftsmanLevel: 1,
    materials: {
        [SPIRIT_STONE]: 1,
        [MINERALS]: 1
    },
    skill: Skill.SHIELD,
    createNew: () => {
        return {
            type: 'Shield'
        }
    }
}

export const ELEMENTAL_STONE : ArtefactBuildType = {
    name: 'Elemental Stone',
    craftsmanLevel: 2,
    materials: {
        [SPIRIT_STONE]: 2,
        [MINERALS]: 1
    },
    skill: Skill.ELEMENTAL_STONE,
    createNew: () => {
        return {
            type: 'Elemental Stone'
        }
    }
}

export const artefactTypes : ArtefactBuildType[] = [
    SHIELD,
    ELEMENTAL_STONE
];

export const getArtefactForName = (name : string) => artefactTypes.find(artefactType => artefactType.name === name);