import { createStore } from 'vuex';
import { FarmedHerbType } from './apothecary/farmService';
import { BuildingsStore, createBuildingsStore } from './building/buildingsStore';
import { PersonType } from './person/Person';
import { newPerson, PersonStoreType } from './person/PersonStoreType';

interface StoreType {

    selectedPerson: number | undefined,

    artefactSchool: boolean,
    furnace: boolean,

    residence: {
        mountain: boolean,
        seclusion: boolean,
        trialRealm: boolean
    },

    apothecary: {
        herbFarm: boolean,
        farm: FarmedHerbType[],
        apothecary: boolean
    },

    library: {
        built: boolean
    }

    people: PersonStoreType[],

    inventory: {
        [details:string] : number
    },

    beastPen: {
        built: boolean
    },

    formationPavilion: {
        built: boolean
    },

    arena: {
        built: boolean
    },

    buildingsStore: BuildingsStore
}

const store = createStore<StoreType>({
    state: {
        selectedPerson: undefined,
        artefactSchool: false,
        furnace: false,
        people: [],
        inventory: {},
        residence: {
            mountain: false,
            seclusion: false,
            trialRealm: false
        },
        apothecary: {
            herbFarm: false,
            farm: [],
            apothecary: false
        },
        library: {
            built: true
        },
        beastPen: {
            built: false
        },
        formationPavilion: {
            built: false
        },
        arena: {
            built: false
        },
        buildingsStore: createBuildingsStore()
    }
});

const getPerson = (personId : number) : PersonType | undefined => {
    // console.log("get person " + personId);
    const personStore = store.state.people.find(person => person.id === personId);
    // console.log(personStore);
    if (personStore) return new PersonType(personStore);
    else return undefined;
}

export default {
    store,
    artefactSchool: () => store.state.artefactSchool,
    furnace: () => store.state.furnace,
    people: () => store.state.people.map(personStore => new PersonType(personStore)),
    
    buildSchool: () => {
        store.state.artefactSchool = true;
    },

    buildFurnace: () => {
        store.state.furnace = true;
    },

    recruit() {
        const person = newPerson();
        store.state.people.push(person);
        this.setSelectedPerson(person.id);
    },

    getPerson,

    inventory: () => store.state.inventory,

    setSelectedPerson(id : number) {
        store.state.selectedPerson = id;
    },

    getSelectedPersonId() {
        return store.state.selectedPerson;
    },

    getSelectedPerson() : PersonType | undefined {
        // console.log("Getting selected person for " + store.state.selectedPerson);
        if (store.state.selectedPerson) {
            // console.log('getting person');
            return getPerson(store.state.selectedPerson);
            // console.log(r);
            // return r;
         } else {
            // console.log("no person");
            return undefined;
         }
    }
}