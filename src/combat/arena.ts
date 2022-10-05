import { BuildingType } from "@/building/building";
import { LOCATION_ARENA, LOCATION_FOMRATION_PAVILION } from "@/building/location.enum";
import store from "@/store";

export const arena : BuildingType = {
    title: LOCATION_ARENA,
    icon: 'arena.png',
    built: () => store.store.state.arena.built,
    build: () => store.store.state.arena.built = true,
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_ARENA)),
    canGo: () => true,
    actions: () => []
}