<template>
    <div :class="['banner', selected() ? 'selected' : 'clickable']" @click="select">
        
            <img :src="props.person.face()"/>
            <span class="right">
                <Items><PersonGender :person="props.person" />{{ props.person.name() }}</Items>
                <Items v-if="action.hasAction() || props.person.location.is()?.defaultAction">
                    <strong>{{ action.doing() }}</strong>
                </Items>
            </span>
        
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { PersonType } from '@/person/Person';
import store from '@/store';
import Items from '@/components/ItemsC.vue';
import PersonGender from './PersonGender.vue';

const props = defineProps({
    person: PersonType
});

const action = computed(() => props.person.action);

const selected = () => props.person.isSelected();
const select = () => store.setSelectedPerson(props.person.id());
</script>

<style scoped>
.banner {
    border: 1px solid #ccc;
    margin: 5px;
    display: inline-block;
    background-color: antiquewhite;
    box-sizing: border-box;
    padding: 5px;
    width: 90px;
}

img {
    width: 50px;
    margin-right: 5px;
}
.selected {
    border: 4px solid black;
}

.clickable:hover {
    cursor: pointer;
}
</style>