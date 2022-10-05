<template>
    <button><slot></slot></button>
</template>

<style scoped>
button {
    padding: 10px;
    border-radius: 0;
    border: 1px solid black;
    display: block;
    width: 100%;
}

button:hover {
    cursor: pointer;
}
</style>