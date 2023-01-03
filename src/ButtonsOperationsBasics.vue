<script setup>
// import { ref } from 'vue';

// let textOnDisplay = ref("");
// let showOnDisplay = ref(0);

// const addToDisplay = function (element) {
//     if (element == "c") {
//         showOnDisplay.value = 0;
//         textOnDisplay.value = "";
//         return
//     }
//     if (element == "=") {
//         showOnDisplay.value = eval(showOnDisplay.value);
//         textOnDisplay.value = showOnDisplay.value;
//         return
//     }

//     textOnDisplay.value += element;
//     showOnDisplay.value = textOnDisplay.value;
// }
defineEmits(['inFocus', 'addToDisplay'])
</script>

<template>
    <button id="oneKey" @click="$emit('addToDisplay', 1)">1</button>
    <button id="twoKey" @click="$emit('addToDisplay', 2)">2</button>
    <button id="threeKey" @click="$emit('addToDisplay', 3)">3</button>
    <button id="fourKey" @click="$emit('addToDisplay', 4)">4</button>
    <button id="fiveKey" @click="$emit('addToDisplay', 5)">5</button>
    <button id="sixKey" @click="$emit('addToDisplay', 6)">6</button>
    <button id="sevenKey" @click="$emit('addToDisplay', 7)">7</button>
    <button id="heightKey" @click="$emit('addToDisplay', 8)">8</button>
    <button id="nineKey" @click="$emit('addToDisplay', 9)">9</button>
    <button id="zeroKey" @click="$emit('addToDisplay', 0)">0</button>
    <button id="additionKey" @click="$emit('addToDisplay', '+')">+</button>
    <button id="subtractionKey" @click="$emit('addToDisplay', '-')">-</button>
    <button id="multiplicationKey" @click="$emit('addToDisplay','*')">*</button>
    <button id="divisionKey" @click="$emit('addToDisplay', '/')">/</button>
    <button id="equalKey" @click="$emit('addToDisplay', '=')">=</button>
    <button id="resetKey" @click="$emit('addToDisplay', 'c')" class="resetButton">C</button>
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