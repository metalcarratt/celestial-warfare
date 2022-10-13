<template>
    <TopBox>
        <h2>{{ tile().type }}</h2>
        <span v-if="resource()" class="resource-desc">
            <img :src="resourceImage()" />
            <label>{{ resource().type }}</label>
            <p>{{ resource().description }}</p>
        </span>
        <PersonSynopsis v-for="(person, pindex) in people()" :key="pindex" :person="person"/>
    </TopBox>
</template>

<script setup>
import TopBox from '@/components/TopBox.vue';
import PersonSynopsis from '@/person/view/PersonSynopsis.vue';
import { mapService } from './mapService';

const people = () => mapService.selectedTileOccupants();
const tile = () => mapService.selectedTile();
const resource = () => tile().resource ? tile().resource : undefined;

const resourceImage = () => `${process.env.BASE_URL}assets/img/${resource().icon}`;
</script>

<style scoped>

.resource-desc {
    display: inline-block;
    padding: 10px;
    border: 1px solid #ccc;
    width: 250px;
    border-radius: 10px;
}
.resource-desc img {
    width: 70px;
    height: 70px;
}

.resource-desc label {
    display: block;
    font-weight: 700;
}
</style>