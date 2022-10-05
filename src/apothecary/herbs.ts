export const GINSENG = 'Ginseng';
export const FIRE_LILY = 'Fire Lily';

export interface Herb {
    name: string,
    gestationPeriod: number,
    yield: number
}

export const Ginseng : Herb = {
    name: GINSENG,
    gestationPeriod: 4,
    yield: 4
}

export const FireLily : Herb = {
    name: FIRE_LILY,
    gestationPeriod: 2,
    yield: 8
}

export const allHerbNames = [
    GINSENG, FIRE_LILY
];

export const allHerbs = [
    Ginseng, FireLily
]

export const getHerbForName = (name : string) : Herb | undefined => allHerbs.find(herb => herb.name === name);