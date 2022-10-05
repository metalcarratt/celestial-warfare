<template>
    <div class="inventory">
        <h2>Inventory</h2>
        <Items v-for="(inventoryItem, iindex) in props.person.inventory.items()" :key="iindex">
            {{ inventoryItem }}: {{ props.person.inventory.has(inventoryItem) }}
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
