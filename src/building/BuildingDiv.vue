<template>
    <div :class="['building', selected() ? 'selected' : '']" @click="select">
        <template v-if="!props.building">
            <label class="centered">Empty land</label>
        </template>
        <template v-else>
            <BuildingLabel :img="props.building.icon" :title="props.building.title" :center="true" />
            <template v-if="props.building.details">
                <ItemsC v-for="(detail, dIndex) in props.building.details()" :key="dIndex">
                    {{ detail.item }}: {{ detail.detail }}
                </ItemsC>
            </template>
            <PersonMeeple v-for="(person, pindex) in props.building.occupants()" :key="pindex" :person="person"/>
        </template>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import BuildingLabel from "@/building/BuildingLabel.vue";
import PersonMeeple from '@/person/view/PersonMeeple.vue';
import ItemsC from '@/components/ItemsC.vue';
import { buildingService } from './buildingService';

const props = defineProps({
    building : {},
    plotNumber: Number
})

const selected = () => buildingService.isBuildingSelected(props.plotNumber);
const select = () => buildingService.selectBuilding(props.plotNumber);
</script>

<style scoped>
.building {
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
    display: inline-block;
    width: 200px;
    height: 200px;
    vertical-align: top;
}

.building.selected {
    border: 4px solid black;
}

.building:hover {
    cursor: pointer;
}

label.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>