import { apothecary } from "@/apothecary/apothecary";
// import { school } from "@/artefacts/artefactBuildings";
import { outside } from "@/outside/outside";
import { BuildingType } from './building';
import { library } from "@/library/library";
import { residence } from "@/residence/buildings/residence";
import { mountain } from "@/residence/buildings/mountain";
import { seclusionChambers } from "@/residence/buildings/seclusionChambers";
import { trialRealm } from "@/residence/buildings/trialRealm";
import { herbFarm } from "@/apothecary/herbFarm";
import { furnace } from "@/artefacts/furnace";
import { beastHoldingPen } from "@/beasts/beastHoldingPen";
import { formationPavilion } from "@/formation/formationPavilion";
import { arena } from "@/combat/arena";

export const allBuildings : BuildingType[] = [
    outside,
    residence,
    mountain,
    seclusionChambers,
    trialRealm,
    herbFarm,
    apothecary,
    furnace,
    library,
    formationPavilion,
    arena,
    beastHoldingPen
];

export const getBuildingAt = (buildingName : string) : BuildingType => {
    const found = allBuildings.find(building => building.title === buildingName);
    if (!found) throw 'Error finding building for name ' + buildingName;
    return found;
}
