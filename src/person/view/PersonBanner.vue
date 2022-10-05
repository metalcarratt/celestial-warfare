<template>
    <span class="banner">
        <img :src="props.person.face()"/>
        <span class="right">
            <Items>Name: {{ props.person.name() }}</Items>
            <Items v-if="action.hasAction() || props.person.location.is()?.defaultAction">
                Doing: 
                <strong>{{ action.doing() }}</strong>
            </Items>
            <Items>Level: {{ printLevel(props.person.cultivator.level()) }}</Items>
        </span>
    </span>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { printLevel } from '@/person/PersonStoreType';
import { PersonType } from '@/person/Person';
import Items from '@/components/ItemsC.vue';

const props = defineProps({
    person: PersonType
});

const action = computed(() => props.person.action);

</script>

<style scoped>
.banner {
    display: flex;
}

img {
    width: 50px;
    margin-right: 5px;
}
</style>