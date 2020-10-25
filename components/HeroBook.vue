/* eslint-disable */
<template>
  <div class="">
    <div
      class="leading-none rounded-l-lg flex flex-wrap md:flex-no-wrap sm:justify-center lg:justify-start"
    >
      <CustomSelect
        class="w-full md:w-1/3"
        title="Service"
        :options="['Weight Loss', 'PRP', 'Botox', 'Fillers']"
      />
      <CustomSelect
        class="w-full md:w-1/3"
        title="Provider"
        :options="['Dr. Elia, M.D', 'Heather Elia, RND']"
      />
      <CustomSelect
        class="w-full md:w-1/3"
        title="Date"
        :options="['Tomorrow']"
      />
      <button
        class="hidden font-bold md:block bg-pink-500 text-white px-8 rounded-r-lg transition hover:bg-blue-400 focus:bg-blue-400"
      >
        Book Now
      </button>
    </div>
    <div
      class="leading-none md:hidden rounded-l-lg sm:flex-wrap md:flex justify-center"
    >
      <button
        class="block md:hidden bg-pink-500 py-4 w-full text-white px-8 rounded-b-lg transition hover:bg-blue-400 focus:bg-blue-400"
      >
        Book Now
      </button>
    </div>
  </div>
</template>
