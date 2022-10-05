import { Elixer } from "@/apothecary/elixers";
import { MED_SPIRIT_STONE, SPIRIT_STONE } from "@/inventory/items";
import { CultivationLevelType, levelType } from "@/residence/cultivationLevels";
import { PersonType } from "./Person";
import { PersonStoreType } from "./PersonStoreType";

export class Cultivator {
    person : PersonType;
    store: PersonStoreType['cultivation'];
    
    constructor(personStore : PersonStoreType, person : PersonType) {
        this.person = person;
        this.store = personStore.cultivation;
    }

    qi() {
        return this.store.spiritEnergy;
    }

    increaseQi(amount : number) {
        this.store.spiritEnergy += amount;
    }

    level() {
        return this.store.level;
    }

    levelUp() {
        this.store.level += 1;
    }

    minLevel(level : number) : boolean {
        return this.store.level >= level;
    }

    enlightenment() {
        return this.store.enlightenment;
    }

    sense() {
        return this.store.sense;
    }

    nextLevelType() : CultivationLevelType {
        return levelType(this.level() + 1);
    }

    cultivate() {
        // console.log("cultivate");
        if (this.qi() < this.nextLevelType().spiritEnergy) {
            
            if (this.person.inventory.has(MED_SPIRIT_STONE) > 0) {
                this.person.inventory.take(MED_SPIRIT_STONE, 1);
                this.increaseQi(15);
            } else if (this.person.inventory.has(SPIRIT_STONE) > 0) {
                this.person.inventory.take(SPIRIT_STONE, 1);
                this.increaseQi(5);
            } else if (this.person.inventory.has(Elixer.VITALITY_PILL)) {
                this.person.inventory.take(Elixer.VITALITY_PILL, 1);
                this.increaseQi(2);
            } else {
                this.increaseQi(1);
            }

            this.nextLevel();
        }
    }

    gainEnlightenment() {
        if (this.enlightenment() < this.nextLevelType().enlightenment) {
            this.store.enlightenment += 1;
            this.nextLevel();
        }
    }

    senseElements() {
        if (this.sense() < this.nextLevelType().sense) {
            this.store.sense += 1;
            this.nextLevel();
        }
    }

    nextLevel() {
        const nextLevel = this.nextLevelType();
        // console.log(nextLevel);
    
        if (
            this.qi() >= nextLevel.spiritEnergy
            && this.enlightenment() >= nextLevel.enlightenment
            && this.sense() >= nextLevel.sense
        ) {
            // console.log("qualifications met");
            this.levelUp();
        }
    }
}