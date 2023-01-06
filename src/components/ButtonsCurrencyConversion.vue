<script setup>
defineEmits(['inFocus', 'addToDisplay'])
</script>

<template>
    <button id="euroKey" @click="$emit('addToDisplay', 'Euro')">Euro</button>
    <button id="dolarKey" @click="$emit('addToDisplay', 'Dolar')">Dolar</button>
    <button id="yenKey" @click="$emit('addToDisplay', 'Yen')">Yen</button>
    <button id="lempiraKey" @click="$emit('addToDisplay', 'Lempira')">L.H.</button>
</template>

<style scoped>
</style> 