import { tiles, TileType } from "./map"

export interface MapStore {
    selectedCoords: {
        x: number,
        y: number
    },
    tiles: TileType[][]
}

export const createMapStore = () => {
    return {
        selectedCoords: {
            x: 4,
            y: 4
        },
        tiles: tiles
    }
}