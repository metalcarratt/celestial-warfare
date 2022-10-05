import { PersonType } from "@/person/Person"

export interface BuildingDetails {
    item: string,
    detail: string
}

export interface BuildingType {
    title: string,
    icon: string,
    details?: () => BuildingDetails[],
    built: () => boolean,
    build: () => void,
    canBuild: () => boolean,
    occupants: () => PersonType[],
    canGo: (person : PersonType) => boolean,
    actions?: (person : PersonType) => ActionType[],
    defaultAction?: ActionType
}

export interface ActionType {
    name: string,
    describe: string | ((person : PersonType) => string),
    targets?: (person : PersonType) => string[],
    action: (person : PersonType) => void,
    withTarget?: (target : string) => ActionType
}