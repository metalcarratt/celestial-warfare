<template>
    <span v-if="props.person.gender() === Gender.Male" ><img src="/assets/img/symbol_male.png" /></span>
    <span v-else ><img src="/assets/img/symbol_female.png" /></span>
</template>

<script setup>
import { defineProps } from 'vue';
import { PersonType } from '../Person';
import { Gender } from '../data/gender';

const props = defineProps({
    person : PersonType
})
</script>

<style scoped>
img {
    width: 10px;
}
</style>