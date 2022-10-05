import { GoalType } from "@/goals/goals";
import { PersonType } from "./Person";
import { PersonStoreType } from "./PersonStoreType";

const doAction = (goal : GoalType, person : PersonType) => {
    if (goal.pre) {
        for (const pre of goal.pre(person)) {
            if (!pre.g.complete(person, pre.q)) {
                doAction(pre.g, person);
                if (person.action.hasAction()) {
                    return;
                }
            } else {
                console.log("Complete goal action: " + pre.g.name);
            }
        }
    }
    console.log("Start goal action: " + goal.name);
    goal.action(person);
    
}

export class PersonGoal {

    store: PersonStoreType['goal'];
    person: PersonType;
    
    constructor(personStore : PersonStoreType, person : PersonType) {
        this.store = personStore.goal;
        this.person = person;
    }

    assignGoal(goal : GoalType) {
        console.log("Assign goal " + goal.name);
        this.store.type = goal;
        this.processGoal();
    }

    hasGoal() : boolean {
        return this.store.type !== undefined;
    }

    goalName() {
        return this.store.type?.name;
    }

    processGoal() {
        if (this.store.type) {
            if (this.store.type.complete(this.person)) {
                console.log("Complete goal action: " + this.store.type.name);
                this.store.type = undefined;

            } else {
                doAction(this.store.type, this.person);
                if (this.store.type.complete(this.person)) {
                    console.log("Complete goal action: " + this.store.type.name);
                    this.store.type = undefined;
                }
            }
        }
    }
}