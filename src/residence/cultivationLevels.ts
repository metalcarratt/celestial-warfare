export interface CultivationLevelType {
    name: string,
    spiritEnergy: number,
    enlightenment: number,
    sense: number
}

export const NONE : CultivationLevelType = {
    name: 'Mortal',
    spiritEnergy: 0,
    enlightenment: 0,
    sense: 0
}

export const FOUNDATION : CultivationLevelType = {
    name: 'Foundation',
    spiritEnergy: 10,
    enlightenment: 0,
    sense: 0
}

export const VISION : CultivationLevelType = {
    name: 'Vision',
    spiritEnergy: 100,
    enlightenment: 10,
    sense: 0
}

export const DOMINANCE : CultivationLevelType = {
    name: 'Dominance',
    spiritEnergy: 1000,
    enlightenment: 100,
    sense: 10
}

export const TRANSCENDENCE : CultivationLevelType = {
    name: 'Transcendence',
    spiritEnergy: 10000,
    enlightenment: 1000,
    sense: 100
}

export const levelType = (level : number) : CultivationLevelType => {
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