import { addConcoctActions, apothecary } from "@/apothecary/apothecary";
import { Elixer } from "@/apothecary/elixers";
import { LOCATION_APOTHECARY } from "@/building/location.enum";
import { Book } from "@/library/books";
import { Skill } from "@/library/skills";
import { getFoundationLevel } from "./cultivationGoals";
import { getGinseng } from "./explorationGoals";
import { GoalType } from "./goals";
import { studyBook } from "./libraryGoals";

export const becomeApothecary : GoalType = {
    name: 'Learn Apothecary',
    complete: (person) => person.skills.knows(Skill.APOTHECARY_1),
    action: (person) => studyBook(person, Book.APOTHECARY_1)
}

export const buildApothecary : GoalType = {
    name: 'Build Apothecary',
    complete: () => apothecary.built(),
    action: () => apothecary.build()
}

export const goToApothecary : GoalType = {
    name: 'Go to Apothecary',
    complete: (person) => person.location.eq(LOCATION_APOTHECARY),
    pre: () => [
        { g: getFoundationLevel },
        { g: becomeApothecary },
        { g: buildApothecary }
    ],
    action: (person) => person.location.goTo(LOCATION_APOTHECARY)
}

export const studyVitalityPill : GoalType = {
    name: 'Study Vitality Pill',
    complete: (person) => person.skills.knows(Skill.VITALITY_PILL),
    pre: () => [
        { g: becomeApothecary }
    ],
    action: (person) => studyBook(person, Book.VITALITY_PILL)
}

export const concoctVitalityPill : GoalType = {
    name: 'Concoct Vitality Pill',
    complete: (person) => person.inventory.has(Elixer.VITALITY_PILL) >= 1,
    pre: () => [
        { g: studyVitalityPill },
        { g: getGinseng, q: 1},
        { g: goToApothecary }
    ],
    action: (person) => {
        const vitalityPillAction = addConcoctActions(person).find(action => action.name.includes(Elixer.VITALITY_PILL));
        if (!vitalityPillAction) throw `Couldn't find vitality pill action`;
        person.action.set(vitalityPillAction, '');
    }
}