import {expect, test} from 'vitest';
import store from '../store';
import { nextTick } from '@/tick/Tick';
import inventory from '@/inventory/inventory';
// import { exploreForSpiritStones } from '@/outside/outsideActions';
import { MED_SPIRIT_STONE, SPIRIT_STONE } from '@/inventory/items';

const doNTimes = (n : number, action : Function) => {
    for (let i=0;i<n;i++) {
        action();
    }
} 

test('Bot', () => {
    // Recruit
    store.recruit();
    expect(store.people().length).toBe(1);

    // Train energy
    const person = store.people()[0];
    nextTick();
    expect(person.cultivator.qi()).toBe(1);

    // Get to foundation level
    doNTimes(9, nextTick);
    expect(person.cultivator.qi()).toBe(10);
    expect(person.cultivator.level()).toBe(1);

    // Get to next level
    // doNTimes(5, () => exploreForSpiritStones.action(person));
    expect(inventory.quantity(SPIRIT_STONE)).toBe(15);
    expect(inventory.quantity(MED_SPIRIT_STONE)).toBe(5);

    // exploreForSpiritStones.action(person);
    // expect(person.inventory[SPIRIT_STONE]).toBe(15);
    // expect(person.inventory[MED_SPIRIT_STONE]).toBe(5);

    doNTimes(8, nextTick);
    expect(person.cultivator.qi()).toBe(100);
    expect(person.cultivator.level()).toBe(1);
    expect(person.inventory.has(MED_SPIRIT_STONE)).toBe(0);
    expect(person.inventory.has(SPIRIT_STONE)).toBe(12);    
});