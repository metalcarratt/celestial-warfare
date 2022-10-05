import farmService from "@/apothecary/farmService";
import { addPlantHerbActions, herbFarm } from "@/apothecary/herbFarm";
import { FIRE_LILY, GINSENG } from "@/apothecary/herbs";
import { LOCATION_HERB_FARM } from "@/building/location.enum";
import { Book } from "@/library/books";
import { Skill } from "@/library/skills";
import { getFoundationLevel } from "./cultivationGoals";
import { getFireLily, getGinseng } from "./explorationGoals";
import { GoalType } from "./goals";
import { studyBook } from "./libraryGoals";

export const learnHerbalism : GoalType = {
    name: 'Learn Herbalism',
    complete: (person) => person.skills.knows(Skill.HERBALISM_1),
    action: (person) => studyBook(person, Book.HERBALISM_1)
}

export const buildHerbFarm : GoalType = {
    name: 'Build Herb Farm',
    complete: () => herbFarm.built(),
    action: () => herbFarm.build()
}

export const goToHerbFarm : GoalType = {
    name: 'Go to Herb Farm',
    complete: (person) => person.location.eq(LOCATION_HERB_FARM),
    pre: () => [
        { g: getFoundationLevel },
        { g : learnHerbalism },
        { g : buildHerbFarm }
    ],
    action: (person) => person.location.goTo(LOCATION_HERB_FARM)
}

export const plantFireLily : GoalType = {
    name: 'Plant fire lily',
    complete: (person) => farmService.getDetails().some(detail => detail.item === FIRE_LILY && detail.detail.includes(`${person.id()}`)),
    pre: () => [
        { g : getFireLily },
        { g: goToHerbFarm }
    ],
    action: (person) => {
        const plantFireLilyAction = addPlantHerbActions(person).find(action => action.name.includes(FIRE_LILY));
        if (!plantFireLilyAction) throw 'No action to plant fire lily';
        person.action.set(plantFireLilyAction, '');
    }
}

export const plantGinseng : GoalType = {
    name: 'Plant ginseng',
    complete: (person) => farmService.getDetails().some(detail => detail.item === GINSENG && detail.detail.includes(`${person.id()}`)),
    pre: () => [
        { g : getGinseng },
        { g: goToHerbFarm }
    ],
    action: (person) => {
        const plantGinsengAction = addPlantHerbActions(person).find(action => action.name.includes(GINSENG));
        if (!plantGinsengAction) throw 'No action to plant ginseng';
        person.action.set(plantGinsengAction, '');
    }
}