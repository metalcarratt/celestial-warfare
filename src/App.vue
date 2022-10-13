<template>
    <div class="main">
        <SectView v-if="store.isSect()"/>
        <OutsideView v-if="store.isOutside()" />
        <SidePanel>
            <ThickButton @click="store.recruit()" v-if="!hasTraveller()">Recruit</ThickButton>
            <PersonDetails :person="selectedPerson()" v-if="selectedPerson()" />
            <ThickButton @click="nextTick" v-if="!hasTraveller()">Next Tick</ThickButton>
        </SidePanel>
    </div>
</template>

<script setup>
import ThickButton from './tick/ThickButton.vue';
import SidePanel from './components/SidePanel.vue';
import PersonDetails from './person/view/PersonDetails.vue';
import store from '@/store';
import SectView from './components/SectView.vue';
import OutsideView from '@/outside/OutsideView.vue';
import { nextTick } from './tick/Tick';

const selectedPerson = () => {
    const p = store.getSelectedPerson();
    // console.log(p);
    return p;
}

const hasTraveller = () => store.hasTraveller();

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


.main {
    display: flex;
    justify-content: space-between;
}
</style>