import { SHIELD } from "@/artefacts/artefacts";
import { furnace, furnaceActions } from "@/artefacts/furnace";
import { LOCATION_ARTEFACT_FURNACE } from "@/building/location.enum";
import { MINERALS, SPIRIT_STONE } from "@/inventory/items";
import { Book } from "@/library/books";
import { Skill } from "@/library/skills";
import { getFoundationLevel } from "./cultivationGoals";
import { getMinerals, getSpiritStones } from "./explorationGoals";
import { GoalType } from "./goals";
import { studyBook } from "./libraryGoals";

export const buildFurnace : GoalType = {
    name: 'Build Furnace',
    complete: () => furnace.built(),
    action: () => furnace.build()
}

export const learnCrafting : GoalType = {
    name: 'Learn crafting',
    complete: (person) => person.skills.knows(Skill.CRAFTING_1),
    action: (person) => studyBook(person, Book.CRAFTING_LEVEL_1)
}

export const goToFurnace : GoalType = {
    name: 'Go to furnace',
    complete: (person) => person.location.eq(LOCATION_ARTEFACT_FURNACE),
    pre: () => [
        { g: getFoundationLevel },
        { g: learnCrafting },
        { g: buildFurnace }
    ],
    action: (person) => person.location.goTo(LOCATION_ARTEFACT_FURNACE)
}

export const learnCraftingShield : GoalType = {
    name: 'Learn crafting shield',
    complete: (person) => person.skills.knows(Skill.SHIELD),
    action: (person) => studyBook(person, Book.SHIELD_BOOK)
}

export const craftShield : GoalType = {
    name: 'Craft shield',
    complete: (person) => person.inventory.has(SHIELD.name) >= 1,
    pre: () => [
        { g: getFoundationLevel },
        { g: learnCrafting },
        { g: learnCraftingShield },
        { g: getSpiritStones, q: SHIELD.materials[SPIRIT_STONE]},
        { g: getMinerals, q: SHIELD.materials[MINERALS]},
        { g: goToFurnace }
    ],
    action: (person) => {
        const craftShieldAction = furnaceActions(person).find(action => action.name.includes(SHIELD.name));
        if (!craftShieldAction) throw 'error finding craft shield action';
        person.action.set(craftShieldAction, '');
    }
}