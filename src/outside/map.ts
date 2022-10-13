import { fl, gs, mm, ms, ResourceType, ss } from "./resources";


export interface TileType {
    type: string,
    tile: string,
    color: string,
    building?: string,
    resource?: ResourceType
}

const f = (r ?: ResourceType) : TileType => {
    return {
        type: 'Forest',
        tile: 'forest.png',
        color: 'green',
        resource: r
    }
};

const d = (r ?: ResourceType) : TileType  => {
    return {
        type: 'Dirt',
        tile: 'dirt.png',
        color: 'brown',
        resource: r
    }
}

const m = (r ?: ResourceType) : TileType  => {
    return {
        type: 'Mountain',
        tile: 'rock.jpg',
        color: 'grey',
        resource: r
    }
}

const s = (r ?: ResourceType) : TileType  => {
    return {
        type: 'Sect',
        tile: 'rock.jpg',
        building: 'sect.png',
        color: 'grey',
        resource: r
    }
}



export const tiles : TileType[][] = [
    [f(), f(), f(),     f(),     f(),       f(), f(), f(), f()],
    [f(), f(), d(),     d(),     f(),       f(), f(), f(), f()],      
    [f(), d(), d(),     d(),     m(ms()),   f(), f(), f(), f()],
    [f(), f(), d(),     m(ss()), m(mm()),   m(), f(), f(), f()],
    [f(), f(), f(fl()), f(gs()), s(),       m(), m(), f(), f()],
    [f(), f(), f(),     f(),     f(),       m(), f(), f(), f()],
    [f(), f(), f(),     f(),     f(),       f(), f(), f(), f()],
    [f(), f(), f(),     f(),     f(),       f(), f(), f(), f()],
    [f(), f(), f(),     f(),     f(),       f(), f(), f(), f()],
];