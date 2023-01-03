<script setup>
import { ref, computed } from 'vue';
import ButtonsOperationsBasics from '../ButtonsOperationsBasics.vue';

const showDisplay = computed({
    get() {
        return showOnDisplay.value
    }
})

let textOnDisplay = ref("");
let showOnDisplay = ref(0);
let simbols = ["+", "-", "/", "*"];

const addToDisplay = function (element) {
    if (element == textOnDisplay.value.charAt(textOnDisplay.value.length - 1)){
        return
    }
   if (simbols.includes(element) && simbols.includes(textOnDisplay.value.charAt(textOnDisplay.value.length - 1))){
   console.log(element);
   }
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

    textOnDisplay.value += element;
    showOnDisplay.value = textOnDisplay.value;
}

</script>

<template>
    <header>
        <p id="display">{{ showDisplay }}</p>
    </header>
    <main>
        <ButtonsOperationsBasics @add-to-display="addToDisplay" />
    </main>
</template>

<style scoped>
p {
    color: white;
    font-size: 32px;
}
</style>