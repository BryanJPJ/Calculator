<script setup>
</script>

<template>
    <button id="euroCurrency" @click="$emit('addToDisplay', 'Euro')">Euro</button>
</template>

<style scoped>
button {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid black;
}
</style> 