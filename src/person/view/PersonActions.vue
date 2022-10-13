<template>
    <div v-if="!props.person.action.hasAction() && store.isSect() && !props.person.location.isTravelling()">
        <h2>Go to...</h2>
        <template v-for="(building, bIndex) in allBuildings" :key="bIndex">
            <span 
                class="goto"
                @click="goTo(building)"
                v-if="!props.person.location.eq(building.title) && building.canGo(props.person) && building.built()"
                :title="'Go to ' + building.title"
            >
                <img :src="image(building)" />
            </span>
        </template>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { allBuildings } from '@/building/allBuildings';
import { PersonType } from '@/person/Person';
import store from '@/store';
import { buildingService } from '@/building/buildingService';
import { LOCATION_OUTSIDE } from '@/building/location.enum';

const props = defineProps({
    person: PersonType
});

const image = (building) => `${process.env.BASE_URL}assets/img/${building.icon}`;

const goTo = (building) => {
    props.person.location.goTo(building.title);
    if (building.title !== LOCATION_OUTSIDE) {
        buildingService.selectBuilding(buildingService.getPlotForBuilding(building.title));
    } else {
        store.goOutside();
    }
}
</script>

<style scoped>
.goto {
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 1px solid #ccc;
    margin-left: 0px;
    background-color: white;
}

.goto img {
    width: 40px;
    height: 40px;
}

.goto:hover {
    cursor: pointer;
    border: 1px solid blue;
    background-color: #eee;
}
</style>