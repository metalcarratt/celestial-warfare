import { LOCATION_MOUNTAIN, LOCATION_RESIDENCE } from "@/building/location.enum";
import { gainEnlightenmentAction, mountain } from "@/residence/buildings/mountain";
import { cultivateAction } from "@/residence/buildings/residence";
import { FOUNDATION, VISION } from "@/residence/cultivationLevels";
import { getSpiritStones } from "./explorationGoals";
import { GoalType } from "./goals";

export const getFoundationLevel : GoalType = {
    name: 'Get Foundation Level',
    complete: (person) => person.cultivator.level() >= 1,
    pre: () => [
        { g: getSpiritStones, q: FOUNDATION.spiritEnergy }
    ],
    action: (person) => {
        person.location.goTo(LOCATION_RESIDENCE);
        person.action.set(cultivateAction, '');
    }
}

export const buildMountain : GoalType = {
    name: 'Build mountain',
    complete: () => mountain.built(),
    action: () => mountain.build()
}

export const cultivateQi : GoalType = {
    name: 'Cultivate qi',
    complete: (person, quantity) => quantity ? person.cultivator.qi() >= quantity : true,
    action: (person) => {
        person.location.goTo(LOCATION_RESIDENCE);
        person.action.set(cultivateAction, '');
    }
}

export const gainEnlightenment : GoalType = {
    name: 'Gain enlightenment',
    complete: (person, quantity) => quantity ? person.cultivator.enlightenment() >= quantity : true,
    pre: () => [
        { g: buildMountain }
    ],
    action: (person) => {
        person.location.goTo(LOCATION_MOUNTAIN);
        person.action.set(gainEnlightenmentAction, '');
    }
}

export const getVisionLevel : GoalType = {
    name: 'Get Vision Level',
    complete: (person) => person.cultivator.level() >= 2,
    pre: (person) => [
        { g: getFoundationLevel },
        { g: getSpiritStones, q: VISION.spiritEnergy - person.cultivator.qi() },
        { g: cultivateQi, q: VISION.spiritEnergy },
        { g: gainEnlightenment, q: VISION.enlightenment }
    ],
    action: () => {}
}