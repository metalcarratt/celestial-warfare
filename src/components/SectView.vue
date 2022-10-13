<template>
    <div class="buildings">
        <BuildingDiv :building="outside" :plotNumber="OUTSIDE_PLOT" @click="store.goOutside()" />
        <BuildingBar />
        <InventorySection />
        <div></div>
        <div>
            <div class="sect">
                <BuildingDiv
                    v-for="(plot, plotIndex) in buildingService.getPlots()"
                    :key="plotIndex"
                    :building="plot"
                    :plotNumber="plotIndex"
                />
            </div>
        </div>        
    </div>
</template>

<script setup>
import InventorySection from '@/inventory/InventorySection.vue';
import BuildingDiv from "@/building/BuildingDiv.vue";
import BuildingBar from "../building/BuildingBar.vue";
import { buildingService, OUTSIDE_PLOT } from "../building/buildingService";
import { outside } from "@/outside/outside";
import store from '@/store';
</script>

<style scoped>
.sect {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

.buildings {
    vertical-align: top;
    display: inline-grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 4fr;
}
</style>