import { beastHoldingPen } from "@/beasts/beastHoldingPen";
import { LOCATION_BEAST_HOLDING_PEN } from "@/building/location.enum";
import { Book } from "@/library/books";
import { Skill } from "@/library/skills";
import { getFoundationLevel } from "./cultivationGoals";
import { GoalType } from "./goals";
import { studyBook } from "./libraryGoals";

export const buildBeastPavilion : GoalType = {
    name: 'Build beast pavilion',
    complete: () => beastHoldingPen.built(),
    action: () => beastHoldingPen.build()
}

export const learnBeastTaming : GoalType = {
    name: 'Learn beast taming',
    complete: (person) => person.skills.knows(Skill.BEAST_TAMING_1),
    action: (person) => studyBook(person, Book.BEAST_TAMING_1)
}

export const goToBeastPavilion : GoalType = {
    name: 'Go to Beast Pavilion',
    complete: (person) => person.location.eq(LOCATION_BEAST_HOLDING_PEN),
    pre: () => [
        { g: getFoundationLevel },
        { g : learnBeastTaming },
        { g : buildBeastPavilion }
    ],
    action: (person) => person.location.goTo(LOCATION_BEAST_HOLDING_PEN)
}