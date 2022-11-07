import { defineStore } from "pinia";

export const useStoreTasks = defineStore("storeTasks", {
  state: () => {
    return {
      cart: [
      ],
      quantity: 0,
      totalPrice: 0
    }
  },
  actions: {
    addToCart(item) {
      item.quantity++
    },
    outOfCart(item) {
      item.quantity--
    },
    getTotalQuantity() {
      this.quantity = 0
      for (let i = 0; i < this.cart.length; i++) {
        this.quantity += this.cart[i].quantity
      }
    },
    getTotalPrice() {
      this.totalPrice = 0
      for (let i = 0; i < this.cart.length; i++) {
        this.totalPrice += this.cart[i].price * this.cart[i].quantity
      }
    },
    remove(item) {
      item.quantity = 0
    }
  },
  getters: {
    getItemQuant: (state) => {
      return (id) => {
        return state.cart.filter(item => item.id === id)[0].quantity
      }
    }
  }
})