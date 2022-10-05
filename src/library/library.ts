import { BuildingType } from "@/building/building";
import { LOCATION_LIBRARY } from "@/building/location.enum";
import { PersonType } from "@/person/Person";
import { ActionType } from '@/building/building';
import store from "@/store";
import { allBooks, BookType } from "./books";

const studyBook = (person : PersonType, book : BookType) => {
    console.log("Studying " + book.name);
    person.skills.learnSkill(book.skill);
}

export const addReadBookActions = (person : PersonType) => {
    const actions : ActionType[] = [];
    allBooks
        .filter(book => !person.skills.knows(book.skill)
            && book.prerequisites.every(skill => person.skills.knows(skill))
        )
        .forEach(book =>
        actions.push({
            name: `Study ${book.name}`,
            describe: `Studying ${book.name}`,
            action: () => studyBook(person, book)
        })
    );
    return actions;
}

export const library : BuildingType = {
    title: 'Library',
    icon: 'library.png',
    built: () => true,
    build: () => {},
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_LIBRARY)),
    canGo: () => true,
    actions: addReadBookActions
}