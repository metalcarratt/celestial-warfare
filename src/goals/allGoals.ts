import { becomeApothecary, buildApothecary, concoctVitalityPill, goToApothecary } from "./apothecaryGoals";
import { buildFurnace, craftShield, goToFurnace, learnCrafting, learnCraftingShield } from "./artefactGoals";
import { buildBeastPavilion, goToBeastPavilion, learnBeastTaming } from "./beastTamingGoals";
import { buildArena, goToArena } from "./combatGoals";
import { getFoundationLevel, getVisionLevel } from "./cultivationGoals";
import { getGinseng, getMinerals, getSpiritStones } from "./explorationGoals";
import { buildFormationPavilion, goToFormationPavilion, learnFormations } from "./formationGoals";
import { GoalType } from "./goals";
import { buildHerbFarm, goToHerbFarm, learnHerbalism, plantFireLily, plantGinseng } from "./herbalismGoals";

export const allGoals = [
    getFoundationLevel,
    getVisionLevel,
    getSpiritStones,
    getMinerals,
    getGinseng,
    becomeApothecary,
    buildApothecary,
    goToApothecary,
    concoctVitalityPill,
    learnHerbalism,
    buildHerbFarm,
    goToHerbFarm,
    plantFireLily,
    plantGinseng,
    buildFurnace,
    learnCrafting,
    goToFurnace,
    learnCraftingShield,
    craftShield,
    buildFormationPavilion,
    learnFormations,
    goToFormationPavilion,
    buildBeastPavilion,
    learnBeastTaming,
    goToBeastPavilion,
    buildArena,
    goToArena
]

export const goalForName = (goalName : string) : GoalType => {
    const found = allGoals.find(goal => goal.name === goalName);
    if (!found) throw 'No goal found for name ' + goalName;
    return found;
}