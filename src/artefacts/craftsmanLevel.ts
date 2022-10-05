export interface CraftsmanLevelType {
    name : string,
    artefactKnowledge: number,
    craftingSkill: number
}

const NONE : CraftsmanLevelType = {
    name: 'None',
    artefactKnowledge: 0,
    craftingSkill: 0
}

const FOUNDATION : CraftsmanLevelType = {
    name: 'Foundation',
    artefactKnowledge: 5,
    craftingSkill: 0
}

const VISION : CraftsmanLevelType = {
    name: 'Vision',
    artefactKnowledge: 15,
    craftingSkill: 3
}

const DOMINANCE : CraftsmanLevelType = {
    name: 'Dominance',
    artefactKnowledge: 100,
    craftingSkill: 100
}

const TRANSCENDENCE : CraftsmanLevelType = {
    name: 'Transcendence',
    artefactKnowledge: 1000,
    craftingSkill: 1000
}

export const levelType = (level : number) : CraftsmanLevelType => {
    switch (level) {
        case 1:
            return FOUNDATION;
        case 2:
            return VISION;
        case 3:
            return DOMINANCE;
        case 4:
            return TRANSCENDENCE;
        default:
            return NONE;
    }
}