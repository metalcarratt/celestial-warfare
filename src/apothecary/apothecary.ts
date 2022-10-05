import { BuildingType } from '../building/building';
import store from '@/store';
import { LOCATION_APOTHECARY } from '@/building/location.enum';
import { allElixers, ElixerType } from './elixers';
import { PersonType } from '@/person/Person';
import { Skill } from '@/library/skills';

const concoct = (person : PersonType, elixer : ElixerType) => {
    Object.keys(elixer.ingredients)
        .forEach(ingredient =>
            person.inventory.take(ingredient, elixer.ingredients[ingredient])
        );
    person.inventory.add(elixer.name, elixer.yield);
}

export const addConcoctActions = (person : PersonType) => {
    const actions = [];
    for (const elixer of allElixers) {

        const hasRequiredSkill = !elixer.skill || person.skills.knows(elixer.skill);

        const hasAllIngredients = Object.keys(elixer.ingredients)
            .every(ingredient => 
                person.inventory.has(ingredient) >= elixer.ingredients[ingredient])

        if (hasRequiredSkill && hasAllIngredients) {
            actions.push({
                name: `Concoct ${elixer.name}`,
                describe: `Concocting ${elixer.name}`,
                action: () => concoct(person, elixer)
            });
        }
    }
    return actions;
}

export const apothecary : BuildingType = {
    title: LOCATION_APOTHECARY,
    icon: 'apothecary.png',
    built: () => store.store.state.apothecary.apothecary,
    build: () => store.store.state.apothecary.apothecary = true,
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_APOTHECARY)),
    canGo: (person) => person.skills.knows(Skill.APOTHECARY_1) && person.cultivator.level() >= 1,
    actions: addConcoctActions
}