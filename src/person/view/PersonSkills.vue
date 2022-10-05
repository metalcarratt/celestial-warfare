<template>
    <div v-if="props.person.skills.listAll().length > 0">
        <h2>Skills</h2>
        <Items v-for="(skill, sindex) in props.person.skills.listAll()" :key="sindex">
            {{ skill }}
        </Items>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { PersonType } from '../Person';
import Items from "@/components/ItemsC.vue";

const props = defineProps({
    person : PersonType
})
</script>
