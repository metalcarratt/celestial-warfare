<template>
    <span v-if="props.person.gender() === Gender.Male" ><img :src="maleImage()" /></span>
    <span v-else ><img :src="femaleImage()" /></span>
</template>

<script setup>
import { defineProps } from 'vue';
import { PersonType } from '../Person';
import { Gender } from '../data/gender';

const props = defineProps({
    person : PersonType
})

const maleImage = () => `${process.env.BASE_URL}assets/img/symbol_male.png`;
const femaleImage = () => `${process.env.BASE_URL}assets/img/symbol_female.png`;

</script>

<style scoped>
img {
    width: 10px;
}
</style>