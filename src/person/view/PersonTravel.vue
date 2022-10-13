<template>
    <div v-if="store.isOutside()">
        <h2>Travel</h2>
        <template v-if="isTravelling()">
            <p>Travelling...</p>
            <p>Time left: {{ props.person.location.travelTime() }}</p>
            <button @click="stopTravel">Stop travel</button>
        </template>
        <template v-else-if="canTravel()">
            <p>Time left: {{ props.person.location.travelTime() }}</p>
            <button @click="startTravel">Travel</button>
        </template>       
        <p v-else>Travel time exhausted this tick</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import store from '@/store';
import { PersonType } from '../Person';

const props = defineProps({
    person: PersonType
})

const canTravel = () => props.person.location.canTravel();
const isTravelling = () => props.person.location.isTravelling();
const startTravel = () => props.person.location.startTravelling();
const stopTravel = () => props.person.location.stopTravelling();
</script>

<style scoped>
button {
    width: 100%;
}

button:hover {
    cursor: pointer;
}
</style>