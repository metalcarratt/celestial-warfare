import { PersonStoreType } from "./PersonStoreType";

export class PersonInventory {

    store: PersonStoreType['inventory'];
    
    constructor(personStore : PersonStoreType) {
        this.store = personStore.inventory;
    }

    add(item : string, amount : number) {
        if (this.store[item]) {
            this.store[item] += amount;
        } else {
            this.store[item] = amount;
        }
    }

    has(item : string) : number {
        return this.store[item] ? this.store[item] : 0;
    }

    take(item : string, amount : number) {
        if (this.store[item]) {
            this.store[item] -= amount;
        } else {
            this.store[item] = 0;
        }
    }

    items() : string[] {
        return Object.keys(this.store);
    }
}