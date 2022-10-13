import { ActionType } from '@/building/building';
import { LOCATION_RESIDENCE } from '@/building/location.enum';
import { GoalType } from '@/goals/goals';
import { Skill } from '@/library/skills';
import { levelType } from '@/residence/cultivationLevels';
import { generateFace } from './data/faces';
import { Gender, generateGender } from './data/gender';
import { generateName } from './data/names';


export interface PersonStoreType {
    id: number,
    name: string,
    gender: Gender,
    face: string,
    location: string,
    coords: {
        x: number,
        y: number
    },
    travelling: boolean,
    energy: number,
    doing: string,
    
    action?: {
        action: ActionType,
        target: string,
    }

    // cultivation
    cultivation: {
        level: number,
        spiritEnergy: number,
        enlightenment: number,
        sense: number
    }

    // artefacts
    craftsman: {
        artefactKnowledge: number,
        craftsmanLevel: number,
        craftingTarget: string,
        craftingSkill: number,
    },

    inventory: {
        [detail:string] : number
    },

    skills: Skill[],
    goal: {
        type: GoalType | undefined
    }
}

let personId = 1;

export const newPerson = () : PersonStoreType => {
    const gender = generateGender();
    const name = generateName(gender);
    const face = generateFace(gender);
    
    return {
        id: personId++,
        name,
        gender,
        face,
        location: LOCATION_RESIDENCE,
        coords: {
            x: 4,
            y: 4
        },
        travelling: false,
        energy: 2,
        doing: '',
        cultivation: {
            level: 0,
            spiritEnergy: 0,
            enlightenment: 0,
            sense: 0
        },
        craftsman: {
            artefactKnowledge: 0,
            craftsmanLevel: 0,
            craftingTarget: '',
            craftingSkill: 0,
        },
        inventory: {},
        skills: [],
        goal: {
            type: undefined
        }
    }
}

export const printLevel = (level : number) : string => levelType(level).name;