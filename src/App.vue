<template>
    <div class="main">
        <div class="buildings">
            <AllBuildings />
            <InventorySection />
        </div>
        <SidePanel>
            <ThickButton @click="store.recruit()">Recruit</ThickButton>
            <PersonDetails :person="selectedPerson()" v-if="selectedPerson()" />
            <ThickButton @click="nextTick">Next Tick</ThickButton>
        </SidePanel>
    </div>
</template>

<script setup>
import InventorySection from '@/inventory/InventorySection.vue';
import ThickButton from './tick/ThickButton.vue';
import SidePanel from './components/SidePanel.vue';
import PersonDetails from './person/view/PersonDetails.vue';
import store from '@/store';
import AllBuildings from './building/AllBuildings.vue';
import { nextTick } from './tick/Tick';

const selectedPerson = () => {
    const p = store.getSelectedPerson();
    // console.log(p);
    return p;
}

</script>

<style>
body {
    font-size: 14px;
}

h2 {
    font-size: 14px;
    margin: 0;
}

.person .details h2 {
    border-top: 1px solid #aaa;
    margin-top: 8px;
}
</style>

<style scoped>
.buildings > * {
    vertical-align: top;
}

.main {
    display: flex;
    justify-content: space-between;
}
</style>