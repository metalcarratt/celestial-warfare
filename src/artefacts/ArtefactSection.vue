<template>
    <Section>
        <h2>Artefacts</h2>        
        <BuildingDiv :building="school" />
    </Section>
</template>

<script setup>
import Section from "@/components/SectionC.vue";
import BuildingDiv from '@/building/BuildingDiv.vue';
import { school } from './artefactBuildings';
</script>