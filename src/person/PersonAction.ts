import { ActionType } from "@/building/building";
import { PersonType } from "./Person";
import { PersonStoreType } from "./PersonStoreType";

export class PersonAction {

    store: PersonStoreType;
    person: PersonType;
    
    constructor(personStore : PersonStoreType, person : PersonType) {
        this.store = personStore;
        this.person = person;
    }

    set(action : ActionType, target : string) {
        this.store.action = {
            action,
            target
        }
    }

    clear() {
        this.store.action = undefined;
    }

    perform() {
        if (this.store.action) this.store.action.action.action(this.person);
    }

    getTarget() : string {
        return this.store.action ? this.store.action.target : '';
    }

    hasAction() : boolean {
        return this.store.action !== undefined;
    }

    getAction() : ActionType | null {
        return this.store.action ? this.store.action.action : null;
    }

    doing() : string {
        let describe;
        if (this.store.action) {
            describe = this.store.action.action.describe;
        } else {
            const location = this.person.location.is();
            describe = location?.defaultAction?.describe;
        }

        if (typeof describe === 'string') {
            return describe;
        } else if (typeof describe === 'function') {
            return describe(this.person);
        } else {
            return '';
        }
    }
}