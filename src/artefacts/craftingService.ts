import inventory from '@/inventory/inventory';
import { MINERALS, SPIRIT_STONE } from '@/inventory/items';
import { PersonType } from "@/person/Person";
import { ar } from 'vitest/dist/global-e98f203b';
import { ArtefactBuildType } from "./artefacts";


export const craftingService = { 

    craft(artefactType : ArtefactBuildType | undefined, person : PersonType) {
        console.log("crafting");
        if (artefactType) {
            console.log(artefactType);
            for (const material of Object.keys(artefactType.materials)) {
                const quantity = artefactType.materials[material];
                person.inventory.take(material, quantity);
            }
            
            person.craftsman.increaseCraftingSkill(1);
            person.inventory.add(artefactType.name, 1);
        }
    }
}