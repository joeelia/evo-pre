/* eslint-disable */
<template>
  <div class="w-full">
    <label class="flex flex-col mb-6">
      <div class="p-4 leading-none rounded-l-lg flex">
        <CustomSelect
          title="Service"
          :options="['Weight Loss', 'PRP', 'Botox', 'Fillers']"
        />
        <CustomSelect
          title="Provider"
          :options="['Dr. Elia, M.D', 'Heather Elia, RND']"
        />
        <CustomSelect title="Date" :options="['Tomorrow']" />
        <button
          class="bg-pink-500 text-white px-8 rounded-r-lg transition hover:bg-blue-dark focus:bg-blue-dark"
        >
          Book Now
        </button>
      </div>
    </label>
  </div>
</template>
