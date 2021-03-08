<template>
  <div class="relative">
    <div class="absolute inset-0 flex flex-col" aria-hidden="true">
      <div class="flex-1 bg-gray-50"></div>
      <div class="flex-1"></div>
    </div>
    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-orange-400 to-pink-500 lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div
          class="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
        >
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Looking for more?</span>
              <span class="block text-red-900"
                >Checkout our full services.</span
              >
            </h2>
            <p class="hidden mt-4 text-lg leading-6 text-orange-50">
              Schdule a consulstation online.
            </p>
            <a
              target="_blank"
              href="https://go.booker.com/location/ThisGirlLori/service-menu"
              class="inline-flex items-center px-6 py-3 mt-8 text-base font-medium text-red-600 bg-orange-100 border border-transparent rounded-md shadow cursor-pointer hover:text-red-500"
              >Book Now
            </a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            class="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
            src="~/assets/images/looking-for-more.jpg"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>
