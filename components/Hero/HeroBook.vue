/* eslint-disable */
<template>
  <div class="">
    <div
      class="justify-center leading-none rounded-l-lg md:hidden sm:flex-wrap md:flex"
    >
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <nuxt-link
          v-if="$route.fullPath.indexOf('book-now') != true"
          to="/book-now"
          class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
        >
          Book Now
        </nuxt-link>
      </div>
      <!-- <button
        class="block w-full px-8 py-4 text-white transition bg-pink-500 rounded-b-lg md:hidden hover:bg-blue-400 focus:bg-blue-400"
        @click="showBookingForm = true"
      >
        Book Now
      </button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeroBook',
  data() {
    return {
      showBookingForm: false,
      value: false,
    }
  },
}
</script>
