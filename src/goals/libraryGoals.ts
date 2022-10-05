import { LOCATION_LIBRARY } from "@/building/location.enum";
import { Book } from "@/library/books";
import { addReadBookActions } from "@/library/library";
import { PersonType } from "@/person/Person";

export const studyBook = (person : PersonType, book : Book) => {
    person.location.goTo(LOCATION_LIBRARY);
    const readCrafting = addReadBookActions(person).find(action => action.name.includes(book));
    if (!readCrafting) throw `Cannot find ${book} book to read`;
    person.action.set(readCrafting, '');
}