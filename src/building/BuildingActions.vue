<template>
    <div v-if="building().actions && !props.person.action.hasAction() && !props.person.location.isTravelling()">
        <h2>Actions...</h2>
        <template v-for="(action, aIndex) in building().actions(person)" :key="aIndex">
            <select v-if="action.targets && action.targets(person)" v-model="target" >
                <option v-for="(target, tIndex) in action.targets(person)" :key="tIndex">{{ target }}</option>
            </select>
            <!-- <button @click="performAction(action)">{{ action.name }}</button> -->
            <span class="action" @click="performAction(action)">{{ action.name }}</span>
        </template>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { PersonType } from '@/person/Person';

const props = defineProps({
    person: PersonType
});

const target = ref('');

const building = () => props.person.location.is();

const performAction = (action) => props.person.action.set(action, target.value);

</script>

<style scoped>
button {
    display: block;
}

.action {
    display: inline-block;
    vertical-align: top;
    width: 44px;
    height: 44px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: white;
    font-size: 10px;
    padding: 2px;
}

.action:hover {
    cursor: pointer;
    background-color: #eee;
}
</style>