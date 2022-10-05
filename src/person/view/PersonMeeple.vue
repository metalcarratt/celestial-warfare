<template>
    <img src="/assets/img/blue_meeple.webp" v-if="props.person.gender() === Gender.Male" />
    <img src="/assets/img/pink_meeple.webp" v-else />
</template>

<script setup>
import { defineProps } from 'vue';
import { Gender } from '@/person/data/gender';
import { PersonType } from '../Person';

const props = defineProps({
    person: PersonType
})
</script>

<style scoped>
img {
    width: 30px;
}
</style>