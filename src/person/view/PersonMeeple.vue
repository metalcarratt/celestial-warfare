<template>
    <img id="meeple" class="face" :src="props.person.face()" v-if="props.person.isSelected()" />
    <img id="meeple" :src="blueMeepleImg()" v-else-if="props.person.gender() === Gender.Male" />
    <img id="meeple" :src="pinkMeepleImg()" v-else />
</template>

<script setup>
import { defineProps } from 'vue';
import { Gender } from '@/person/data/gender';
import { PersonType } from '../Person';

const props = defineProps({
    person: PersonType
})

const blueMeepleImg = () => `${process.env.BASE_URL}assets/img/blue_meeple.webp`;
const pinkMeepleImg = () => `${process.env.BASE_URL}assets/img/pink_meeple.webp`;
</script>

<style scoped>
img#meeple {
    width: 30px;
    height: 30px;
}
</style>