<script setup>
import { ref, computed } from 'vue'
import socksBlueImage from '../assets/socks_blue.jpg'
import socksGreenImage from '../assets/socks_green.jpg'

const props = defineProps({
  premium: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['add-to-cart'])

const product = ref('Socks')
const brand = ref('Vue Mastery')
const selectedVariant = ref(0)
const details = ref(['50% cotton', '30% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
])
    
const title = computed(() => {
  return brand.value + ' ' + product.value
})

const image = computed(() => {
  return variants.value[selectedVariant.value].image
})

const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0
})

const shipping = computed(() => {
  if (props.premium) {
    return 'Free'
  }
  return 2.99
})

function addToCart() {
  emit('add-to-cart', variants.value[selectedVariant.value].id)
}

function updateVariant(index) {
  selectedVariant.value = index
}
</script>

<template>
  <!-- .product-display -->
  <div class="p-4">
    <!-- .product-container -->
    <div class="flex flex-row flex-wrap">
      <!-- .product-image -->
      <div class="w-[100%] md:w-[50%]">
        <img v-bind:src="image" class="w-[70%] m-10 p-4 border-2 border-solid border-mist">
      </div>
      <!-- .product-info -->
      <div class="w-[100%] ml-3 md:w-[50%] md:ml-0">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li 
            v-for="(detail, index) in details" 
            :key="index"
          >
            {{ detail }}
          </li>
        </ul>

        <!-- 
        Tailwind code scanning requires background class be static, e.g., 
        .bg-[green], not dynamically-generated e.g., .bg-[ = green + ].
        -->
        <div 
          v-for="(variant, index) in variants" 
          class="w-12 h-12 mt-2 border-2 border-solid border-mist rounded-[50%] cursor-pointer" 
          :class="{
            green: 'bg-[green]',
            blue: 'bg-[blue]',
          }[variant.color]"
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
        >
        </div>
        
        <!-- Note use of array in :class binding, instead of string -->
        <button 
          class="w-40 h-16 m-8 p-5 text-lg leading-none text-cloud text-center rounded-[5px] btn-shading-bn" 
          :class="inStock ? 
            ['bg-midnight', 'cursor-pointer'] : 
            ['bg-mist', 'cursor-not-allowed']"
          :disabled="!inStock" 
          @click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.product-display {
  padding: 16px;
  /* p-4 */
}

.product-container {
  display: flex;
  /* flex */
  flex-direction: row;
  /* flex-row */
  flex-wrap: wrap;
  /* flex-wrap */
}

.product-image {
  width: 100%;
  /* w-full AKA w-[100%] */
}

.OBSOLETE img {
  width: 70%;
  /* w-[70%] */
  margin: 40px;
  /* m-10 */
  padding: 15px;
  /* p-4 */
  border: 2px solid #d8d8d8;
  /* border-2 border-solid border-[#d8d8d8] */
}

.product-info {
  width: 100%;
  /* w-full AKA w-[100%] */
  margin-left: 10px;
  /* ml-3 */
}

.color-circle {
  width: 50px;
  /* w-12 */
  height: 50px;
  /* h-12 */
  margin-top: 8px;
  /* mt-2 */
  border: 2px solid #d8d8d8;
  /* border-2 */
  border-radius: 50%;
  /* rounded-[50%] */
}

.button {
  width: 160px;
  /* w-40 */
  height: 60px;
  /* h-16 */
  margin: 30px;
  /* m-8 */
  padding: 20px;
  /* p-5 */
  font-size: 18px;
  /* text-lg leading-none (to remove added line-height from .text-lg) */
  color: white;
  /* text-white */
  text-align: center;
  /* text-center */
  border-radius: 5px;
  /* rounded-[5px] */
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  /* Moved to index.css as .btn-shading-bn */  
  background-color: #39495c;
  /* bg-[#39495c] */
  cursor: pointer;
  /* cursor-pointer */
}

.button.disabled {
  background-color: #d8d8d8;
  /*  */
  cursor: not-allowed;
  /*  */
}

@media only screen and (min-width: 860px) {
/* md: --> Breakpoint Modifier */

  .product-image {
    width: 50%;
    /* md:w-6/12 AKA md:w-[50%] */
  }

  .product-info {
    width: 50%;
    /* md:w-6/12 AKA md:w-[50%] */
    margin-left: 0;
    /* md:ml-0 */
  }
} 
</style>