<template>
  <div class="relative w-full px-8 py-20 bg-pink-200 sm:py-32 md:py-40">
    <div
      class="container flex flex-col items-center justify-center h-full max-w-6xl mx-auto sm:flex-row sm:justify-between"
    >
      <div
        class="relative flex flex-col items-start justify-center w-full mb-10 sm:w-5/6 sm:w-1/3 sm:mb-0 sm:pr-10"
      >
        <h2 class="mb-5 text-2xl font-black leading-tight xl:text-4xl">
          Easily Add Your Own Screenshots
        </h2>
        <p class="mb-8 text-base text-yellow-900 xl:text-xl md:max-w-lg">
          You can easily customize this design by replacing your image with the
          image on the right. Cool, right?
        </p>
        <a href="#_" class="relative">
          <span
            class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-black rounded"
          ></span>
          <span
            class="relative inline-block w-full h-full px-5 py-3 text-lg font-bold transition duration-100 bg-white border-2 border-black rounded fold-bold hover:bg-yellow-500 hover:text-white"
            >GET STARTED</span
          >
        </a>
      </div>
      <div
        class="relative flex flex-col items-center justify-center w-full -mr-0 sm:w-5/6 sm:w-2/3 sm:-mr-20"
      >
        <div class="overflow-hidden border-2 border-black rounded-lg">
          <img
            src="https://cdn.devdojo.com/images/october2020/screenshot.png"
            alt="Screen shot of Flare"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
