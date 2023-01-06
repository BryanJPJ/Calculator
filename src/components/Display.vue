<script setup>
import { ref, computed } from "vue";
import ButtonsOperationsBasics from "./ButtonsOperationsBasics.vue";
import ButtonsCurrencyCOnversionVue from "./ButtonsCurrencyConversion.vue";

const showDisplay = computed({
  get() {
    return showOnDisplay.value;
  },
});

let textOnDisplay = ref("");
let showOnDisplay = ref(0);
let simbols = ["+", "-", "/", "*"];
let currencies = ["Euro", "Dolar", "Yen", "Lempira"];
let currencyValue = [
  { coin: "Euro", value: 1 },
  { coin: "Dolar", value: 1.06 },
  { coin: "Yen", value: 140.19 },
  { coin: "Lempira", value: 26.19 },
];
let convertCurrencies = false;

const addToDisplay = function (element) {
  if (currencies.includes(element)) {
    if (!convertCurrencies) {
      convertCurrencies = !convertCurrencies;
      showOnDisplay.value = 0;
      textOnDisplay.value = "";
    } else {
      if (textOnDisplay.value.replace(/[0-9]+/g, "") == textOnDisplay.value) {
        showOnDisplay.value = 0;
        textOnDisplay.value = "";
      } else {
        let currentCurrencies = textOnDisplay.value.replace(/[0-9.]+/g, "");
        let currentAmount = textOnDisplay.value.replace(/[^0-9.]+/g, "");
        let destinyCurrencies = element;
        const mapCurrencies = currencyValue.map((el) => el.coin);
        const indexOriginCurrencies = mapCurrencies.indexOf(currentCurrencies);
        const indexDestinyCurrencies = mapCurrencies.indexOf(destinyCurrencies);
        let valueChange =
          (currentAmount * currencyValue[indexDestinyCurrencies].value) /
          currencyValue[indexOriginCurrencies].value;
        showOnDisplay.value = destinyCurrencies + valueChange;
        showOnDisplay.value = showOnDisplay.value.toString();
        textOnDisplay.value = showOnDisplay.value;
        convertCurrencies = !convertCurrencies;
        return;
      }
    }
  }

  if (
    simbols.includes(element) &&
    element == textOnDisplay.value.charAt(textOnDisplay.value.length - 1)
  ) {
    return;
  }

  if (element == "ce") {
    showOnDisplay.value = 0;
    textOnDisplay.value = "";
    return;
  }

  if (element == "=") {
    showOnDisplay.value = eval(showOnDisplay.value);
    showOnDisplay.value = showOnDisplay.value.toString();
    textOnDisplay.value = showOnDisplay.value;
    return;
  }

  if (
    simbols.includes(element) &&
    simbols.includes(textOnDisplay.value.charAt(textOnDisplay.value.length - 1))
  ) {
    textOnDisplay.value = textOnDisplay.value.substring(
      0,
      textOnDisplay.value.length - 1
    );
  }

  textOnDisplay.value += element;
  showOnDisplay.value = textOnDisplay.value;
};
</script>

<template>
  <header>
    <p id="display">{{ showDisplay }}</p>
  </header>
  <main>
    <ButtonsOperationsBasics @add-to-display="addToDisplay" />
    <ButtonsCurrencyCOnversionVue @add-to-display="addToDisplay" />
  </main>
</template>

<style scoped></style>
