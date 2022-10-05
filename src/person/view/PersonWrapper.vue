<template>
    <span class="person">
        <span class="details">
            <slot></slot>
        </span>
    </span>
</template>

<style scoped>
    .person {
        border: 1px solid #ccc;
        margin: 5px;
        display: block;
        background-color: antiquewhite;
        box-sizing: border-box;
    }
    
    .details {
        padding: 5px;
        display: block;
    }
</style>