<template>
    <Section class="inventory">
        <h2>Inventory</h2>
        <Items v-for="(item, iIndex) in items()" :key="iIndex">
            {{ item }}: {{ inventory.quantity(item) }}
        </Items>
    </Section>
</template>

<script setup>
import Section from "@/components/SectionC.vue";
import Items from "@/components/ItemsC.vue";
import inventory from './inventory';

const items = () => inventory.list()
</script>

<style scoped>
.inventory {
    height: 200px;
    border: 1px solid #ccc;
}
</style>