<script setup>
defineEmits(['inFocus', 'addToDisplay'])
</script>

<template>
    <button id="euroCurrency" @click="$emit('addToDisplay', 'Euro')">Euro</button>
    <button id="euroCurrency" @click="$emit('addToDisplay', 'Dolar')">Dolar</button>
    <button id="euroCurrency" @click="$emit('addToDisplay', 'Yen')">Yen</button>
    <button id="euroCurrency" @click="$emit('addToDisplay', 'Lempira')">L.H.</button>
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