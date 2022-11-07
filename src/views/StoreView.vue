<template>
  <div class="item_grid">
    <StoreItem 
      v-for="item in storeTasks.cart" 
      :key="item.id" 
      :item="item" 
      :item-id="item.id"  
      @check="checkCart(item.id)" />
    <RouterLink to="/cart" class="cart_button">
      <p class="cart_item_number">{{quantity}}</p>
      <img 
        src="@/assets/images.png" 
        alt="" 
        class="cart_icon" />
    </RouterLink>
  </div>
</template>

<script setup>
// IMPORTS
import StoreItem from "@/components/StoreItem.vue"
import { computed } from "vue"
import { useStoreTasks } from "../stores/counter"

// STORE
const storeTasks = useStoreTasks()
const quantity = computed(() => {
  storeTasks.getTotalQuantity()
  return storeTasks.quantity
})
</script>

<style scoped>
.item_grid {
  margin: 0 60px;
  margin-top: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 60px;
  row-gap: 60px;
}
.cart_button {
  background: rgb(255, 255, 255);
  border: 4px solid rgb(134, 134, 134);
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 150px;
  height: 150px;
}
.cart_item_number {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 40px;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 50%;
  background: rgb(204, 0, 0);
  color: white;
  z-index: 1;
}
.cart_icon {
  width: 45%;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 22px;
}
@media (max-width: 1880px) {
  .item_grid {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (max-width: 1516px) {
  .item_grid {
  grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 1157px) {
  .item_grid {
  grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 788px) {
  .item_grid {
  display: block;
  width: 100%;
  margin: 0;
  margin-top: 150px
  }
}
</style>
