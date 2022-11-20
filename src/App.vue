<script setup>
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue'

const cart = ref([])
const premium = ref(true)
  
function updateCart(id) {
  cart.value.push(id)
}
</script>

<template>
  <!--.nav-bar-->
  <div class="h-16 mb-6 bg-gradient-to-r from-[#16c0b0] to-[#84cf6a]"></div>

  <!--.cart-->
  <div class="my-6 mx-24 p-7 border border-solid border-[#d8d8d8] bg-white float-right">
    Cart({{ cart.length }})
  </div>

  <ProductDisplay 
    :premium="premium" 
    @add-to-cart="updateCart"
  ></ProductDisplay>
</template>

<style scoped>

/**
 * Bracket vs No Bracket
 * 
 * Some utility classes used brackets, some didn’t.
 * The bracket syntax dynamically generates classes for the exact values. 
 * For less verbosity, use existing Tailwind classes.
 * Not exactly the same, but fine in many cases. 
 * 
 * Can also make these replacements:
 *   ~ h-[60px] ~= h-16
 *   ~ mb-[25px] ~= mb-6
 *   ~ my-[25px] ~= my-6
 *   ~ mx-[100px] ~= mx-24
 *   ~ p-[30px] ~= p-7
 */

.nav-bar {
  height:  60px; 
  /* h-[60px] */
  margin-bottom:  25px;
  /* mb-[25px] */
  background: linear-gradient(90deg, #16c0b0, #84cf6a); 
  /* bg-gradient-to-r from-[#16c0b0] to-[#84cf6a] */
}

.cart {
  margin: 25px 100px;
  /* my-[25px] mx-[100px] */
  padding: 30px;
  /* p-[30px] */
  border: 1px solid #d8d8d8;
  /* border border-solid border-[#d8d8d8] bg-white float-right */
  background-color: white;
  /* bg-white */
  float: right;
  /* float-right */
}
</style>
