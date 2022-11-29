<script setup>
const { isActive } = defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <!--
  Reusable Component Pattern
  "The primary approach to reusing a set of utilities is to reuse the 
  entire element that contains the utilities."
  -->

  <!-- Note use of array in :class binding, instead of string -->
  <button 
    class="w-40 h-16 m-8 p-5 text-lg leading-none text-cloud text-center rounded-[5px] btn-shading-bn" 
    :class="isActive ? 
      ['bg-midnight', 'cursor-pointer'] : 
      ['bg-mist', 'cursor-not-allowed']"
    :disabled="!isActive" 
    @click="emit('click')"
  >
    <slot />
  </button>
</template>