<template>
  <div class="cart_grid">
    <div class="item_grid">
      <CartItem 
        v-for="item in storeTasks.cart" 
        :key="item.id" 
        :item="item" />
    </div>
    <div class="total">
      <p>Total</p>
      <p class="price">{{ totalPrice }}$</p>
    </div>
  </div>
</template>

<script setup>
// IMPORTS
import CartItem from "@/components/CartItem.vue"
import { useStoreTasks } from "@/stores/counter"
import { computed } from "vue"

// STORE
const storeTasks = useStoreTasks()

// Computed Total Price
const totalPrice = computed(() => {
  storeTasks.getTotalPrice()
  return storeTasks.totalPrice
})
</script>

<style scoped>
.cart_grid {
  margin-top: 200px;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.item_grid {
  display: block;
  row-gap: 20px;
  margin-left: 200px;
}
.total {
  text-align: center;
  margin-right: 200px;
  max-height: 400px;
  max-width: 400px;
  border: 4px solid black;
}
.total p {
  font-size: 70px;
  margin-top: 50px;
}
.price {
  margin-top: 120px !important;
  font-weight: bold;
}
@media (max-width: 1092px) {
  .cart_grid {
    margin-top: 150px;
    display: block;
    justify-content: center;
    grid-template-columns: 0;
  }
  .item_grid {
    display: block;
    row-gap: 20px;
    margin-left: 0;
    width: 100%;
  }
  .total {
    position: fixed;
    bottom: 30px;
    right: 30px;
    text-align: center;
    margin-right: 0;
    height: 200px;
    width: 200px;
    border: 4px solid black;
    background: white;
  }
  .total p {
    font-size: 40px;
    margin-top: 30px;
  }
  .price {
    margin-top: 50px !important;
    font-weight: bold;
  }
}
</style>
