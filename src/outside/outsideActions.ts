import { ActionType } from "@/building/building";
import { FIRE_LILY, GINSENG } from "@/apothecary/herbs";
import { MED_SPIRIT_STONE, MINERALS, SPIRIT_STONE } from "@/inventory/items";

const randomAmount = (from : number, to : number) : number => {
    const diff = to - from + 1;
    return Math.floor(Math.random() * diff) + from;
}

export const exploreForSpiritStones : ActionType = {
    name: 'Explore for Spirit Stones',
    describe: 'Exploring for Spirit Stones',
    action: (person) => {
        person.inventory.add(SPIRIT_STONE, randomAmount(3, 5));
        person.inventory.add(MED_SPIRIT_STONE, randomAmount(1, 2));
    }
}

export const exploreForMinerals : ActionType = {
    name: 'Explore for Minerals',
    describe: 'Exploring for Minerals',
    action: (person) => {
        person.inventory.add(MINERALS, randomAmount(3, 5));
    }
}

export const exploreForHerbs : ActionType = {
    name: 'Explore for Herbs',
    describe: 'Exploring for Herbs',
    action: (person) => {
        const r = randomAmount(0, 1);
        if (r === 0) {
            person.inventory.add(GINSENG, randomAmount(1, 2));
        } else if (r === 1) {
            person.inventory.add(FIRE_LILY, randomAmount(1, 2));
        }
    }
}