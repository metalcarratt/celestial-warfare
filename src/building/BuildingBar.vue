<template>
    <div class="buildingBar">
        <template v-if="building() && building().built()">
            <BuildingLabel :img="building().icon" :title="building().title" />
            <PersonSynopsis v-for="(person, pindex) in building().occupants()" :key="pindex" :person="person"/>
        </template>
        <template v-else>
            <div class="chooseBuilding">
                <span v-for="(building, bIndex) in buildableBuildings()" :key="bIndex" class="canBuild" @click="build(building)">
                    <label class="title">Build:</label>
                    <BuildingLabel :img="building.icon" :title="building.title" />
                </span>
            </div>
        </template>
    </div>
</template>

<script setup>
import BuildingLabel from './BuildingLabel.vue';
import { buildingService } from './buildingService';
import PersonSynopsis from "@/person/view/PersonSynopsis.vue";
import { allBuildings } from './allBuildings';

const building = () => buildingService.getSelectedBuilding();

const buildableBuildings = () => allBuildings.filter(building => !building.built() && building.canBuild());

const build = (building) => buildingService.build(building);
</script>

<style scoped>
.buildingBar {
    border: 1px solid #ccc;
    padding: 5px;
    height: 150px;
}

.chooseBuilding {
    display: flex;
    height: 100%;
    align-items: center;
}

.canBuild {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 5px;
    margin: 5px;
}

.canBuild label.title {
    display: block;
    font-weight: 700;
}

.canBuild:hover {
    cursor: pointer;
    background-color: #aaa;
}
</style>