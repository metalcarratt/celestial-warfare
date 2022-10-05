
import { levelType } from "@/artefacts/craftsmanLevel";
import { PersonStoreType } from "./PersonStoreType";

export class Craftsman {

    store: PersonStoreType['craftsman'];
    
    constructor(personStore : PersonStoreType) {
        this.store = personStore.craftsman;
    }

    level() : number {
        return this.store.craftsmanLevel;
    }

    levelUp() {
        this.store.craftsmanLevel += 1;
    }

    artefactKnowledge() : number {
        return this.store.artefactKnowledge;
    }

    increaseArtefactKnowledge(amount : number) {
        const nextLevel = levelType(this.level() + 1);
        if (this.artefactKnowledge() < nextLevel.artefactKnowledge) {
            this.store.artefactKnowledge += amount;
        }
        this.nextCraftsmanLevel();
    }

    craftingSkill() : number {
        return this.store.craftingSkill;
    }

    increaseCraftingSkill(amount : number) {
        const nextLevel = levelType(this.level() + 1);
        if (this.craftingSkill() < nextLevel.craftingSkill) {
            this.store.craftingSkill += amount;
        }
        this.nextCraftsmanLevel();
    }

    nextCraftsmanLevel() {
        const nextLevel = levelType(this.level() + 1);
        if (this.artefactKnowledge() >= nextLevel.artefactKnowledge
            && this.craftingSkill() >= nextLevel.craftingSkill
        ) {
            this.levelUp();
        }
    }    
}