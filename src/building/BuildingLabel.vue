<template>
    <label :class="props.center ? 'center' : ''">
        <img :src="image()" />
        {{ props.title }}
    </label>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    img: String,
    title: String,
    center: { type: Boolean, default: false }
})

console.log("process.env.BASE_URL: " + process.env.BASE_URL);
const image = () => `${process.env.BASE_URL}assets/img/${props.img}`;

</script>

<style scoped>
label {
    font-weight: 700;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    vertical-align: top;
}

label.center {
    display: flex;

}
    
img {
    width: 40px;
}
</style>