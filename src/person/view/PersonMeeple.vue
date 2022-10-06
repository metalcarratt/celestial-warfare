<template>
    <img :src="blueMeepleImg()" v-if="props.person.gender() === Gender.Male" />
    <img :src="pinkMeepleImg()" v-else />
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
img {
    width: 30px;
}
</style>