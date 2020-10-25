<template>
  <div class="relative overflow-hidden">
    <div class="block absolute inset-0">
      <svg
        class="absolute bottom-0 left-1/2 transform translate-x-64 -translate-y-12"
        width="100"
        height="100"
      >
        <path d="M0,50 a1,1 0 0,0 100,0" fill="blue" />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <main
        class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"
      >
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <div
              class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
            >
              Coming soon
            </div>
            <h2
              class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
            >
              Weight Loss &amp; Body Care
              <br class="hidden md:inline" />
              <span class="text-indigo-600">Evolve.</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              At Evo Body Image we treat your body like our own. One-stop shop
              for Weightloss and overall body improvement. Exerpinced Medical
              Professionals on staff, for every need.
            </p>
            <div class="mt-5 lg:text-left lg:mx-0">
              <p class="text-base font-medium text-gray-900">
                Sign up to get notified when it’s ready.
              </p>
              <HeroBook />
              <p class="mt-3 text-sm leading-5 text-gray-500">
                We care about the protection of your data. Read our
                <a href="#" class="font-medium text-gray-900 underline"
                  >Privacy Policy</a
                >.
              </p>
            </div>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <svg class="w-64 h-64">
              <!--<circle cx="50" cy="50" r="50" />-->
              <path d="M0,50 a1,1 0 0,0 100,0" fill="blue" />
            </svg>
            <div class="relative mx-auto w-full lg:-mt-24 lg:max-w-md">
              <img
                class="w-full"
                src="~/assets/images/hero-clean-face.png"
                alt="Woman with a nice clean face"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
