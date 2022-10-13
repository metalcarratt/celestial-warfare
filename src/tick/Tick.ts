import farmService from '../apothecary/farmService';
import store from '@/store';

export const nextTick = () => {
    store.people().forEach(person => {
        if (person.action.hasAction()) {
            person.action.perform();
            person.action.clear();
        } else {
            const building = person.location.is();
            if (building?.defaultAction) building.defaultAction.action(person);
        }

        if (person.goals.hasGoal()) {
            person.goals.processGoal();
        }

        person.location.restoreEnergy();
    });

    farmService.grow();
};