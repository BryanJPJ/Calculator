<script setup>
import { computed } from 'vue';

let showOnDisplay = "";

const textDisplay = computed(() => {
  return showOnDisplay !== "" ? "Psatata" : 0
})

function addDisplay(element) {
  showOnDisplay += element
  return showOnDisplay
}

</script>

<template>
 <main>
  <p id="display">{{ textDisplay }}</p> 
  <button id="oneKey" @click="addDisplay(1)">1</button>
 </main>
</template>

<style scoped>

p {
  color: white;
  font-size: 32px;
}
button {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid black ;
}
</style>
