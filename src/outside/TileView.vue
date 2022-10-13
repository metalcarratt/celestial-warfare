<template>
    <span :class="['tile', props.selected ? 'selected' : props.tile.color]">
        <img :src="image()" />
        <img :src="bldg()" v-if="props.tile.building" class="building" />
        <span class="ring" />
        <span class="meeples">
            <PersonMeeple v-for="(person, pIndex) in people()" :key="pIndex" :person="person" />
        </span>
        <span class="resources">
            <img :src="resourceImg()" v-if="resource()" />
        </span>
        <span class="matte" v-if="showMatte()"></span>
    </span>
</template>

<script setup>
import { LOCATION_OUTSIDE } from '@/building/location.enum';
import store from '@/store';
import { defineProps } from 'vue';
import PersonMeeple from '@/person/view/PersonMeeple.vue';

const props = defineProps({
    tile: Object,
    coords: {x:  Number, y: Number},
    selected: Boolean
})

const image = () => `${process.env.BASE_URL}assets/img/tiles/${props.tile.tile}`;
const bldg = () => `${process.env.BASE_URL}assets/img/tiles/${props.tile.building}`;
const resourceImg = () => `${process.env.BASE_URL}assets/img/${resource().icon}`;

const people = () => store.people().filter(person =>  person.location.eq(LOCATION_OUTSIDE) && person.location.coordsIs(props.coords));

const showMatte = () => store.getSelectedPerson()
    && store.getSelectedPerson().location.isTravelling()
    && !store.getSelectedPerson().location.inTravelRegion(props.coords.x, props.coords.y);

const resource = () => props.tile.resource ? props.tile.resource : undefined;

</script>

<style scoped>
.tile {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px solid black;

    position: relative;
}

.tile img {
    width: 100px;
    height: 100px;
}

.tile .ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 4px solid #4d9e37;
    border-radius: 10px;
    box-sizing: border-box;

    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
}

.tile.selected .ring {
    border-color: yellow;
}

.tile.green .ring {
    border-color: #4d9e37;
}

.tile.grey .ring {
    border-color: #8d938b;
}

.tile.brown .ring {
    border-color: #a43f18;
}

.tile:hover .ring {
    border-color: white;
    /* cursor: pointer; */
}

.tile:hover {
    cursor: pointer;
}

.tile img.building {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
}

.meeples {
    width: 70px;
    height: 70px;
    display: flex;
    /* justify-content: flex-end; */
    flex-wrap: wrap-reverse;
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 3;
    
}

.meeples img#meeple {
    width: 17.5px;
    height: 17.5px;
    border-radius: 5px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
}

.meeples img#meeple.face {
    width: 33px;
    height: 33px;
}

.matte {
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 5;
    left: 0;
    background-color: #fffc;
}

.resources {
    width: 70px;
    height: 70px;
    display: block;
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 4;
}

.resources img {
    width: 17.5px;
    height: 17.5px;
    border-radius: 5px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
}
</style>