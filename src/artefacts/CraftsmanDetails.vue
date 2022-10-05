<template>
    <h2>Craftsman</h2>
    <Items>Craftsman level: {{ levelType(props.person.craftsman.level()).name }}</Items>
    <Items>Artefact Knowledge: {{ craftsman.artefactKnowledge() }}</Items>
    <Items>Crafting Skill: {{ craftsman.craftingSkill() }}</Items>
        
    <!-- <template v-for="(artefactType, aIndex) in artefactTypes" :key="aIndex">
        <button v-if="craftingService.canCraft(artefactType, props.person)" @click="craftingService.craft(artefactType)">
            Craft {{ artefactType.name }}
        </button>
    </template> -->

    <!-- <NextSteps v-if="props.person.location.eq(LOCATION)">
        <label>Next level: {{ levelType(craftsman.level() + 1).name }}</label>
        <Items>Artefact Knowledge: {{ levelType(craftsman.level() + 1).artefactKnowledge }}</Items>
        <Items>Crafting Skill: {{ levelType(craftsman.level() + 1).craftingSkill }}</Items>
    </NextSteps> -->
</template>

<script setup>
import { defineProps, computed } from 'vue';
import Items from "@/components/ItemsC.vue";
// import NextSteps from '@/components/NextSteps.vue';
// import { Craftsman } from './Craftsman';
// import { artefactTypes } from './artefacts';
// import { craftingService } from './craftingService';
import { levelType } from './craftsmanLevel';
// import { school } from './artefactBuildings';

const props = defineProps({
    person: Object
});

const craftsman = computed(() => props.person.craftsman);

</script>

<style scoped>
.next-steps {
    border-top: 1px solid #aaa;
    margin-top: 10px;
}
</style>