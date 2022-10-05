import store from '../store';

export default {
    add: (item : string, amount : number) => {
        console.log(`adding to inventory ${item} x ${amount}`);
        const inventory = store.store.state.inventory;
        if (!inventory[item]) {
            inventory[item] = amount;
        } else {
            inventory[item] += amount;
        }
    },

    consume: (item : string, amount : number) => {
        const inventory = store.store.state.inventory;
        inventory[item] -= amount;
    },

    list: () : string[] => Object.keys(store.store.state.inventory),

    quantity: (item : string) => store.store.state.inventory[item]
}