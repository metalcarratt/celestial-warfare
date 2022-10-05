import { ActionType, BuildingType } from "@/building/building";
import { LOCATION_ARTEFACT_FURNACE } from "@/building/location.enum";
import { Skill } from "@/library/skills";
import { PersonType } from "@/person/Person";
import store from "@/store";
import { ArtefactBuildType, artefactTypes } from "./artefacts";
import { craftingService } from "./craftingService";

const canCraftArtefact = (person : PersonType, artefact : ArtefactBuildType) => {
    const hasMaterials = Object.keys(artefact.materials)
        .every(materialName => 
            person.inventory.has(materialName) >= artefact.materials[materialName]);
    const hasSkill = person.skills.knows(artefact.skill);

    return hasSkill && hasMaterials;
}

export const furnaceActions = (person : PersonType) => {
    const actions : ActionType[] = [];
    artefactTypes
        .filter(artefact => canCraftArtefact(person, artefact))
        .forEach(artefact => {
            actions.push({
                name: `Craft ${artefact.name}`,
                describe: () => `Crafting ${artefact.name}`,
                action: () => craftingService.craft(artefact, person)
            });
        });
    return actions;
}

export const furnace : BuildingType = {
    title: LOCATION_ARTEFACT_FURNACE,
    icon: 'furnace.png',
    built: () => store.furnace(),
    build: () => store.buildFurnace(),
    canBuild: () => true,
    occupants: () => store.people().filter(person => person.location.eq(LOCATION_ARTEFACT_FURNACE)),
    canGo: (person) => person.skills.knows(Skill.CRAFTING_1),
    actions: furnaceActions
}

