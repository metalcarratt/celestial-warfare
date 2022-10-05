import { LOCATION_FOMRATION_PAVILION } from "@/building/location.enum";
import { formationPavilion } from "@/formation/formationPavilion";
import { Book } from "@/library/books";
import { Skill } from "@/library/skills";
import { getFoundationLevel } from "./cultivationGoals";
import { GoalType } from "./goals";
import { studyBook } from "./libraryGoals";

export const buildFormationPavilion : GoalType = {
    name: 'Build formation pavilion',
    complete: () => formationPavilion.built(),
    action: () => formationPavilion.build()
}

export const learnFormations : GoalType = {
    name: 'Learn formations',
    complete: (person) => person.skills.knows(Skill.FORMATIONS_1),
    action: (person) => studyBook(person, Book.FORMATIONS_1)
}

export const goToFormationPavilion : GoalType = {
    name: 'Go to Formation Pavilion',
    complete: (person) => person.location.eq(LOCATION_FOMRATION_PAVILION),
    pre: () => [
        { g: getFoundationLevel },
        { g : learnFormations },
        { g : buildFormationPavilion }
    ],
    action: (person) => person.location.goTo(LOCATION_FOMRATION_PAVILION)
}