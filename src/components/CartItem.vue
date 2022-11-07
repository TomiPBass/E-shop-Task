<template>
  <div class="cart_item_box" v-if="item.quantity > 0">
    <div class="x">
      <button @click="removeAll(item)">x</button>
    </div>
    <div class="title">{{ item.name }}</div>
    <div class="count">{{ item.quantity}}x</div>
    <div class="total">{{ item.price }}€</div>
  </div>
</template>

<script setup>
// IMPORTS
import {useStoreTasks} from '@/stores/counter'

const storeTasks = useStoreTasks()
// Props
defineProps({
  item: {
    type: Object
  }
})

// Remove all items from cart
const removeAll = (pickedItem) => {
  storeTasks.remove(pickedItem)
}
</script>

<style scoped>
.cart_item_box {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  background: rgb(203, 255, 252);
  border: 3px solid gray;
  margin-top: 20px;
  width: 80%;
  height: 75px;
}

.cart_item_box div {
  margin: 20px;
  font-size: 30px;
}

.x {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0 !important;
  margin-left: 15px !important;
}

.x button {
  margin-top: 5px;
  font-size: 50px !important;
  border: none;
  background: rgb(203, 255, 252);
}

.x button:hover {
  color: red !important;
}

.total {
  font-weight: bold;
  font-size: 35px !important;
  margin-top: 15px !important;
  margin-bottom: 0 !important;
}

@media (max-width: 1850px) {
  .cart_item_box {
  grid-template-columns: 1fr 3fr 1fr 1fr;
}
}

@media (max-width: 1465px) {
  .cart_item_box {
  height: 100px;
  grid-template-columns: 1fr 3fr 0.5fr 1fr;
}
.cart_item_box div {
  display: flex;
  justify-content: center;
  align-items: center ;
}

.x button {
  margin-top: 0px;
  margin-bottom: 7px !important;
}
.total {
  margin-top: 0 !important;
}
}

@media (max-width: 1092px) {
  .cart_item_box {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  background: rgb(203, 255, 252);
  border: 3px solid gray;
  margin-top: 20px;
  width: 100%;
  height: 75px;
  }
}
</style>
