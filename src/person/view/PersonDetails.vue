<template>
    <PersonWrapper>
        <PersonBanner :person="props.person" />
        <PersonInventory :person="props.person" />
        <PersonSkills :person="props.person" />
        <h3>At {{ props.person.location.is().title }}</h3>
        <CultivationDetails :person="props.person" v-if="isAtResidence()" />
        <CraftsmanDetails :person="props.person" v-if="isAtArtefacts()" />
        <BuildingActions :person="props.person" />
        <PersonGoals :person="props.person" />
        <PersonActions :person="props.person" />
        <PersonTravel :person="props.person" />
    </PersonWrapper>
</template>

<script setup>
import { defineProps } from 'vue';
import CultivationDetails from '@/residence/CultivationDetails.vue';
import CraftsmanDetails from '@/artefacts/CraftsmanDetails.vue';
import { PersonType } from '@/person/Person';
import BuildingActions from '@/building/BuildingActions.vue';
import PersonInventory from './PersonInventory.vue';
import PersonBanner from './PersonBanner.vue';
import PersonWrapper from './PersonWrapper.vue';
import PersonActions from './PersonActions.vue';
import PersonSkills from './PersonSkills.vue';
import PersonGoals from './PersonGoals.vue';
import { LOCATION_MOUNTAIN, LOCATION_RESIDENCE, LOCATION_SECLUSION, LOCATION_ARTEFACT_SCHOOL, LOCATION_ARTEFACT_FURNACE } from '@/building/location.enum';
import PersonTravel from './PersonTravel.vue';

const props = defineProps({
    person: PersonType
});

const isAtResidence = () => 
    props.person.location.eq(LOCATION_RESIDENCE)
    || props.person.location.eq(LOCATION_MOUNTAIN)
    || props.person.location.eq(LOCATION_SECLUSION);


const isAtArtefacts = () =>
    props.person.location.eq(LOCATION_ARTEFACT_SCHOOL)
    || props.person.location.eq(LOCATION_ARTEFACT_FURNACE);
</script>

<style scoped>
h3 {
    font-size: 14px;
    margin-bottom: 0px;
    background-color: #ffcc7c;
    padding: 2px;
}
</style>