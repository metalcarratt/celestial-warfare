import { PersonType } from "@/person/Person";

export interface Prerequisite {
    g: GoalType,
    q?: number
}

export interface GoalType {
    name: string,
    complete: (person: PersonType, quantity?: number) => boolean,
    action: (person : PersonType) => void,
    pre?: (person : PersonType) => Prerequisite[]
}