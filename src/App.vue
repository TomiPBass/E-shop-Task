<template>
  <div>
    <TheHeader />
    <RouterView />
  </div>
</template>

<script setup>
// IMPORTS
import TheHeader from "../../e-shop/src/components/TheHeader.vue";
import JsonFile from "@/assets/items";
import { useStoreTasks } from "@/stores/counter";
import { onMounted, onUpdated } from "vue";

// STORE
const storeTasks = useStoreTasks()

// Stringify and Parse Data
onMounted(() => {
  const stringJSON = JSON.stringify(JsonFile);
  storeTasks.cart = JSON.parse(stringJSON);
  storeTasks.cart.forEach((item) => {
    item.quantity = 0
  })
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
body {
  margin: 0;
}
</style>
