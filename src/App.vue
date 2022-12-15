<script setup>
import { ref, computed } from 'vue';

let textOnDisplay = ref("");
let showOnDisplay = ref(0);

const showDisplay = computed({
  get() {
    return showOnDisplay.value
  }
})


const addToDisplay = function (element) {
  if (element == "c") {
    showOnDisplay.value = 0;
    textOnDisplay.value = "";
    return
  }
  if (element == "=") {
    showOnDisplay.value = eval(showOnDisplay.value);
    textOnDisplay.value = showOnDisplay.value;
    return
  }
  // if (element == "e" || element == "d" || element == "y" || element == "lh") {
  //   // showOnDisplay.value = 0;
  //   // textOnDisplay.value = "";
  //   console.log(textOnDisplay.value.charAt(1));
    
  // }
  textOnDisplay.value += element;
  showOnDisplay.value = textOnDisplay.value;
 }

 
</script>

<template>
<main>
    <p id="display">{{ showDisplay }}</p>
    <button id="oneKey" @click="addToDisplay(1)">1</button>
    <button id="twoKey" @click="addToDisplay(2)">2</button>
    <button id="threeKey" @click="addToDisplay(3)">3</button>
    <button id="fourKey" @click="addToDisplay(4)">4</button>
    <button id="fiveKey" @click="addToDisplay(5)">5</button>
    <button id="sixKey" @click="addToDisplay(6)">6</button>
    <button id="sevenKey" @click="addToDisplay(7)">7</button>
    <button id="heightKey" @click="addToDisplay(8)">8</button>
    <button id="nineKey" @click="addToDisplay(9)">9</button>
    <button id="zeroKey" @click="addToDisplay(0)">0</button>
    <button id="additionKey" @click="addToDisplay(`+`)">+</button>
    <button id="subtractionKey" @click="addToDisplay(`-`)">-</button>
    <button id="multiplicationKey" @click="addToDisplay(`*`)">*</button>
    <button id="divisionKey" @click="addToDisplay(`/`)">/</button>
    <button id="equalKey" @click="addToDisplay(`=`)">=</button>
    <button id="resetKey" @click="addToDisplay(`c`)" class="resetButton">C</button>

    <!-- <button id="resetKey" @click="addToDisplay(`e`)" class="resetButton">Euro</button>
    <button id="resetKey" @click="addToDisplay(`d`)" class="resetButton">Dolar</button>
    <button id="resetKey" @click="addToDisplay(`y`)" class="resetButton">Yen</button>
    <button id="resetKey" @click="addToDisplay(`lh`)" class="resetButton">Lembira Hondureño</button> -->
  </main></template>

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
