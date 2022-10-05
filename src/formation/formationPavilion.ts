import { BuildingType } from "@/building/building";
import { LOCATION_FOMRATION_PAVILION } from "@/building/location.enum";
import { Skill } from "@/library/skills";
import store from "@/store";

export const formationPavilion : BuildingType = {
    title: LOCATION_FOMRATION_PAVILION,
    icon: 'rune.jpg',
    built: () => store.store.state.formationPavilion.built,
    build: () => store.store.state.formationPavilion.built = true,
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_FOMRATION_PAVILION)),
    canGo: (person) => person.cultivator.level() >= 1 && person.skills.knows(Skill.FORMATIONS_1),
    actions: () => []
}