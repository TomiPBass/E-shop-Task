<template>
  <div class="store_item_box">
    <p class="title">{{ props.item.name }}</p>
    <div class="image">
      <img 
        :src="props.item.picture" 
        alt="Image not found" />
    </div>
    <div class="bottom">
      <p class="price">{{ props.item.price }}€</p>
      <button 
        class="buy" 
        :class="{nondisplayed: quantity > 0}" 
        @click="addToCart(item)"
      >BUY</button>
      <div 
        class="quantity" 
        :class="{nondisplayed: quantity === 0}">
        <button 
          class="plus_minus" 
          @click="outOfCart(item)">-</button>
        <p>{{ quantity }}</p>
        <button 
          class="plus_minus" 
          @click="addToCart(item)">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// IMPORTS
import { useStoreTasks } from "@/stores/counter"
import { computed } from "vue"

// STORE
const storeTasks = useStoreTasks()

// PROPS & EMITS
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  itemId: {
    type: Number,
    required: true
  }
});

// DATA (quantity)
const quantity = computed(() => {
  if (storeTasks.getItemQuant(props.itemId)) {
    return storeTasks.getItemQuant(props.itemId)
  } else {
    return 0
  }
})

// Add/Remove Items
const addToCart = (pickedItem) => {
  storeTasks.addToCart(pickedItem)
}
const outOfCart = (pickedItem) => {
  storeTasks.outOfCart(pickedItem)
}
</script>

<style scoped>
.store_item_box {
  background: rgb(224, 248, 255);
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  max-width: 400px;
  border: 2px solid black;
}
.title {
  font-size: 28px;
  text-align: center;
  margin: 18px;
  color: black;
  font-weight: bold;
}
.image {
  display: flex;
  justify-content: center;
  margin: 0 50px;
}
.bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}
.price {
  margin: 0;
  margin-left: 32px;
  margin-top: 17px;
  font-size: 30px;
  font-weight: bold;
  color: black;
}
.buy {
  font-size: 30px;
  margin: 10px;
  margin-right: 30px;
  border: none;
  border-radius: 30px;
  background: black;
  color: white;
  cursor: pointer;
}
.quantity {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px;
  align-items: center;
}
.quantity p {
  margin: 0;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
}
.plus_minus {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  background: black;
  color: white;
  padding: 6px 0px;
  border-radius: 50%;
  cursor: pointer;
}
.nondisplayed {
  display: none;
}

@media (max-width: 788px) {
  .store_item_box {
  max-width: 100%;
  width: 100%;
  margin-top: 30px;
  border: 2px solid black;
}
}

</style>
