<template>
    <h2>Cultivation</h2>
    <Items>Spirit Energy: {{ cultivator.qi() }}</Items>
    <Items>Enlightenment: {{ cultivator.enlightenment() }}</Items>
    <Items>Sense: {{ cultivator.sense() }}</Items>

    <NextSteps>
        <label>Next level: {{ cultivator.nextLevelType().name }}</label>
        <Items>Spirit Energy: {{ cultivator.nextLevelType().spiritEnergy }}</Items>
        <Items>Enlightenment: {{ cultivator.nextLevelType().enlightenment }}</Items>
    </NextSteps>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import Items from "@/components/ItemsC.vue";
import NextSteps from '@/components/NextSteps.vue';
import { PersonType } from '@/person/Person';

const props = defineProps({
    person : PersonType
})

const cultivator = computed(() => props.person.cultivator);

</script>

<style scoped>
button {
    margin-left: 10px;
}

.next-steps {
    border-top: 1px solid #aaa;
    margin-top: 10px;
}
</style>