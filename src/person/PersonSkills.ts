import { Skill } from "@/library/skills";
import { PersonStoreType } from "./PersonStoreType";

export class PersonSkills {

    store: PersonStoreType;
    
    constructor(personStore : PersonStoreType) {
        this.store = personStore;
    }

    learnSkill(skill : Skill) {
        this.store.skills.push(skill);
    }

    listAll() {
        return this.store.skills;
    }

    knows(skill : Skill) : boolean {
        return this.store.skills.includes(skill);
    }
}