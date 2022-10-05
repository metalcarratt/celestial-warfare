<template>
    <BuildingBar />
    <BuildingDiv :building="outside" :plotNumber="OUTSIDE_PLOT" />
    <div class="sect">
        <BuildingDiv
            v-for="(plot, plotIndex) in buildingService.getPlots()"
            :key="plotIndex"
            :building="plot"
            :plotNumber="plotIndex"
        />
    </div>
</template>

<script setup>
import BuildingDiv from "@/building/BuildingDiv.vue";
import BuildingBar from "./BuildingBar.vue";
import { buildingService, OUTSIDE_PLOT } from "./buildingService";
import { outside } from "@/outside/outside";
</script>

<style scoped>
.sect {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
</style>