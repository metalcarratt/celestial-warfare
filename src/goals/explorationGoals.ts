import { FIRE_LILY, GINSENG } from "@/apothecary/herbs";
import { LOCATION_OUTSIDE } from "@/building/location.enum";
import { MED_SPIRIT_STONE, MINERALS, SPIRIT_STONE } from "@/inventory/items";
import { exploreForHerbs, exploreForMinerals, exploreForSpiritStones } from "@/outside/outsideActions";
import { PersonType } from "@/person/Person";
import { GoalType } from "./goals";

const personHasQuantity = (person : PersonType, quantity : number) => {
    const q = (person.inventory.has(SPIRIT_STONE) * 5) + (person.inventory.has(MED_SPIRIT_STONE) * 15);
    return q >= quantity;
}

export const getSpiritStones : GoalType = {
    name: 'Get Spirit Stones',
    complete: (person, quantity) => personHasQuantity(person, quantity ? quantity : 1),
    action: (person) => {
        person.location.goTo(LOCATION_OUTSIDE);
        person.action.set(exploreForSpiritStones, '');
    }
}

export const getMinerals : GoalType = {
    name: 'Get Minerals',
    complete: (person, quantity) => person.inventory.has(MINERALS) >= (quantity ? quantity : 1),
    action: (person) => {
        person.location.goTo(LOCATION_OUTSIDE);
        person.action.set(exploreForMinerals, '');
    }
}

export const getGinseng : GoalType = {
    name: 'Get Ginseng',
    complete: (person, quantity) => person.inventory.has(GINSENG) >= (quantity ? quantity : true),
    action: (person) => {
        person.location.goTo(LOCATION_OUTSIDE);
        person.action.set(exploreForHerbs, '');
    }
}

export const getFireLily : GoalType = {
    name: 'Get Fire lily',
    complete: (person, quantity) => person.inventory.has(FIRE_LILY) >= (quantity ? quantity : true),
    action: (person) => {
        person.location.goTo(LOCATION_OUTSIDE);
        person.action.set(exploreForHerbs, '');
    }
}