import { getBuildingAt } from "@/building/allBuildings";
import { ActionType } from "@/building/building";
import store from "@/store";
import { Craftsman } from "./Craftsman";
import { Cultivator } from "./Cultivator";
import { PersonAction } from "./PersonAction";
import { PersonInventory } from "./PersonInventory";
import { PersonLocation } from "./PersonLocation";
import { PersonStoreType } from "./PersonStoreType";
import { PersonSkills } from './PersonSkills';
import { PersonGoal } from "./PersonGoal";

export class PersonType {
    
    ps : PersonStoreType;
    cultivator : Cultivator;
    inventory: PersonInventory;
    location: PersonLocation;
    craftsman: Craftsman;
    action: PersonAction;
    skills: PersonSkills;
    goals: PersonGoal;
    
    constructor(personStore : PersonStoreType) {
        this.ps = personStore;
        this.cultivator = new Cultivator(this.ps, this);
        this.inventory = new PersonInventory(this.ps);
        this.location = new PersonLocation(this.ps);
        this.craftsman = new Craftsman(this.ps);
        this.action = new PersonAction(this.ps, this);
        this.skills = new PersonSkills(this.ps);
        this.goals = new PersonGoal(this.ps, this);
    }

    id() {
        return this.ps.id;
    }

    name() {
        return this.ps.name
    }

    face() {
        return `assets/img/faces/${this.ps.face}.png`;
    }

    gender() {
        return this.ps.gender;
    }

    isSelected() : boolean {
        return this.ps.id === store.getSelectedPersonId();
    }
} 