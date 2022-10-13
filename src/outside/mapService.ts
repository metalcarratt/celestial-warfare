import { LOCATION_OUTSIDE } from "@/building/location.enum";
import store from "@/store";

const mapStore = store.store.state.mapStore

export const mapService = {
    
    tileSelected(x: number, y: number) {
        return mapStore.selectedCoords.x === x && mapStore.selectedCoords.y === y;
    },

    selectTile(x: number, y: number) {
        mapStore.selectedCoords.x = x;
        mapStore.selectedCoords.y = y;
    },

    selectedTile() {
        return mapStore.tiles[mapStore.selectedCoords.y][mapStore.selectedCoords.x];
    },

    selectedTileOccupants() {
        return store.people().filter(person => person.location.eq(LOCATION_OUTSIDE)
            && person.location.coordsIs(mapStore.selectedCoords));
    },

    getTiles() {
        return mapStore.tiles;
    },

    getTileAt(x: number, y: number) {
        return mapStore.tiles[y][x];
    }
}