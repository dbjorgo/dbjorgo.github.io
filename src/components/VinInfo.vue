<template>
  <div class="flex flex-col lg:flex-row border-2 mb-4 p-3 bg-white">
    <img :alt="name" :src="imgSrc" class="w-[120px] lg:mx-3 shadow-2xl rounded max-h-[400px] mx-auto mb-3">
    <div class="text-left pl-5">
      <p class="text-lg">{{name}} - <span class="text-gray-500">{{artikkelNr}}</span></p>
      <p class="text-gray-600">{{price}},-</p>
      <p class="mb-3">{{grape}}</p>
      <slot />
      <p class="mt-3" v-if="rating">{{rating}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '..'
    },
    name: {
      type: String,
      default: 'Navn'
    },
    artikkelNr: {
      type: String,
      default: 999
    },
    price: {
      type: String,
      default: '100'
    },
    grape: {
      type: String,
      default: '100'
    },
    notat: {
      type: String,
      default: '100'
    },
    rating: {
      type: String,
    },
    vinkveld: {
      type: Object,
    },

  }
}
</script>