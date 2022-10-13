import { FIRE_LILY, GINSENG } from "@/apothecary/herbs";
import { ActionType } from "@/building/building";
import { MED_SPIRIT_STONE, MINERALS, SPIRIT_STONE } from "@/inventory/items";

const randomAmount = (from : number, to : number) : number => {
    const diff = to - from + 1;
    return Math.floor(Math.random() * diff) + from;
}

export interface ResourceType {
    type: string,
    description: string,
    icon: string,
    action: ActionType
}

export const ss = () : ResourceType => {
    return {
        type: 'Spirit Stones',
        description: 'Stones embued with spiritual energy, they are a crucial tool to increasing the speed of cultivating spiritual energy.',
        icon: 'sstone.png',
        action: {
            name: 'Mine Spirit Stones',
            describe: 'Mining Spirit Stones',
            action: (person) => person.inventory.add(SPIRIT_STONE, randomAmount(3, 5))
        }
    }
}

export const ms = () : ResourceType => {
    return {
        type: 'Mid-grade Spirit Stones',
        description: 'Stones embued with spiritual energy. Mid-grade spirit stones contain higher density Qi than standard spirit stones.',
        icon: 'mstone.png',
        action: {
            name: 'Mine Spirit Stones',
            describe: 'Mining Spirit Stones',
            action: (person) => person.inventory.add(MED_SPIRIT_STONE, randomAmount(1, 2))
        }
    }
}

export const gs = () : ResourceType => {
    return {
        type: 'Ginseng',
        description: 'A herb embued with spiritual energy, it can be used for cultivation or brewing elixers.',
        icon: 'ginseng.jpg',
        action: {
            name: 'Gather Ginseng',
            describe: 'Gathering Ginseng',
            action: (person) => person.inventory.add(GINSENG, randomAmount(1, 2))   
        }
    }
}

export const fl = () : ResourceType => {
    return {
        type: 'Fire Lily',
        description: 'A lily with a natural flame energy.',
        icon: 'firelily.jpg',
        action: {
            name: 'Gather Fire Lillies',
            describe: 'Gathering Fire Lillies',
            action: (person) => person.inventory.add(FIRE_LILY, randomAmount(1, 2))   
        }
    }
}

export const mm = () : ResourceType => {
    return {
        type: 'Minerals',
        description: 'Common crafting materials.',
        icon: 'minerals.webp',
        action: {
            name: 'Mine minerals',
            describe: 'Mining minerals',
            action: (person) => person.inventory.add(MINERALS, randomAmount(3, 5))   
        }
    }
}