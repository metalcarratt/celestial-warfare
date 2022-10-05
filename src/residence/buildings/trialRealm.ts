import { BuildingType } from "@/building/building";
import store from "@/store";
import { seclusionChambers } from "./seclusionChambers";

export const trialRealm : BuildingType = {
    title: 'Trial Realm',
    icon: 'trial.png',
    built: () => store.store.state.residence.trialRealm,
    build: () => store.store.state.residence.trialRealm = true,
    canBuild: () => seclusionChambers.built(),
    occupants: () => [],
    canGo: () => false
};