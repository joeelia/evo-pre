<template>
  <div
    class="relative w-full px-8 py-20 overflow-hidden bg-pink-200 sm:py-32 md:py-40"
  >
    <div
      class="container flex flex-col items-center justify-center h-full max-w-6xl mx-auto sm:flex-row sm:justify-between"
    >
      <div
        class="relative flex flex-col items-start justify-center w-full mb-10 sm:w-5/6 sm:w-1/3 sm:mb-0 sm:pr-10"
      >
        <h2 class="mb-5 text-2xl font-black leading-tight xl:text-4xl">
          Live a better lifestyle, your way
        </h2>
        <p class="mb-8 text-base text-yellow-900 xl:text-xl md:max-w-lg">
          We have a variety of options to offer, ask us about our diet plans and
          fat burning injections. Schedule a consultation now.
        </p>
        <a href="#_" class="relative">
          <span
            class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"
          ></span>
          <nuxt-link
            to="/pricing"
            class="relative inline-block w-full h-full px-5 py-3 text-lg font-bold transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-500 hover:text-white"
            >Book Now</nuxt-link
          >
        </a>
      </div>
      <div
        class="relative flex flex-col items-center justify-center w-full -mr-0 sm:w-5/6 sm:-mr-20"
      >
        <div class="overflow-hidden border-2 border-black rounded-lg">
          <cld-image
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            public-id="v1608498524/assets/healthy-super-foods_e8foii"
            fetchFormat="auto"
            quality="auto"
            loading="lazy"
            class="object-cover w-full h-full"
            alt="Healthy Living"
          />
          <!-- <img
            src="~/assets/images/healthy-super-foods.jpg"
            alt="Screen shot of Flare"
            class="object-cover w-full h-full"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
