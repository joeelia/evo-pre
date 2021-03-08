<template>
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 block">
      <svg
        class="absolute bottom-0 transform translate-x-64 -translate-y-12 left-1/2"
        width="100"
        height="100"
      >
        <path d="M0,50 a1,1 0 0,0 100,0" fill="blue" />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 lg:mb-64 md:pb-20 lg:pb-24 xl:pb-32">
      <main class="max-w-screen-xl px-4 mx-auto mt-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <!-- <div
              class="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base"
            >
              Coming soon
            </div> -->
            <h2
              class="mt-1 text-2xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none lg:text-3xl xl:text-4xl"
            >
              Do it for the after selfie, do it for
              <span style="color: #8e1a42">YOU.</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Health and beauty go hand in hand. Let us, a physician and a
              dietitian, help you achieve your lifestyle and aesthetic goals.
            </p>
            <div class="mt-5 lg:text-left lg:mx-0">
              <p class="text-base font-medium text-gray-900">Book Now</p>

              <nuxt-link
                to="/pricing"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
              >
                Book Your Appointment!
              </nuxt-link>
            </div>
          </div>
          <!-- <div
            class="relative hidden mt-12 lg:block sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div class="relative w-full mx-auto lg:-mt-14 lg:max-w-md">
              <img
                class="w-full"
                src="~/assets/images/hero-clean-face.png"
                alt="Woman with a nice clean face"
              />
            </div>
          </div> -->
          <div
            class="relative hidden mt-12 lg:block sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div
              class="container relative w-full h-full xl:max-w-6xl lg:w-screen"
            >
              <cld-image
                public-id="v1608498604/assets/hero-shower-lips_byucfc"
                fetchFormat="auto"
                radius="75"
                width="500"
                quality="auto"
                loading="lazy"
                class="absolute inset-y-0 right-0 -mt-10 rounded-xl"
                alt="Girl with kissy lips with Botox injections"
                style="height: 42rem"
              />
              <!-- <img
                src="~/assets/images/hero-shower-lips.jpg"
                class="absolute inset-y-0 right-0 -mt-10 rounded-xl"
                style="height: 42rem"
              /> -->
            </div>
          </div>
        </div>
      </main>
    </div>
    <svg
      class="absolute bottom-0 w-full text-pink-200 fill-current"
      viewBox="0 0 1400 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0c309.151 33.333 542.484 50 700 50 157.516 0 390.849-16.667 700-50v50H0V0z"
      />
    </svg>
  </div>
</template>
