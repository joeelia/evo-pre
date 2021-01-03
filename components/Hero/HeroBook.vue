/* eslint-disable */
<template>
  <div class="">
    <BookingForm
      v-if="showBookingForm"
      @show-booking-form="showBookingForm = value"
    />
    <div
      class="flex flex-wrap leading-none rounded-l-lg md:flex-no-wrap sm:justify-center lg:justify-start"
    >
      <CustomSelect
        class="w-full md:flex-1"
        title="Service"
        :options="['Weight Loss', 'PRP', 'Botox', 'Fillers']"
      />
      <CustomSelect
        class="w-full md:flex-1"
        title="Date"
        :options="['ASAP', 'Tomorrow', 'Next Week']"
      />
      <!-- <button
        class="hidden px-8 font-bold text-white transition bg-pink-500 rounded-r-lg md:block hover:bg-blue-400 focus:bg-blue-400"
        @click="showBookingForm = true"
      >
        Book Now
      </button> -->
      <nuxt-link
        to="/book-now"
        class="hidden px-8 py-8 font-bold text-white transition bg-pink-500 rounded-r-lg md:block hover:bg-blue-400 focus:bg-blue-400"
      >
        Book Now
      </nuxt-link>
    </div>
    <div
      class="justify-center leading-none rounded-l-lg md:hidden sm:flex-wrap md:flex"
    >
      <!-- <button
        class="block w-full px-8 py-4 text-white transition bg-pink-500 rounded-b-lg md:hidden hover:bg-blue-400 focus:bg-blue-400"
        @click="showBookingForm = true"
      >
        Book Now
      </button> -->
      <nuxt-link
        to="/book-now"
        class="block w-full px-8 py-4 text-white transition bg-pink-500 rounded-b-lg md:hidden hover:bg-blue-400 focus:bg-blue-400"
      >
        Book Now
      </nuxt-link>
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
