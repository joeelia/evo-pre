<template>
  <section class="bg-purple-200 md:p-4">
    <div class="flex flex-wrap md:p-4 rounded-xl md:flex-no-wrap">
      <div class="w-full bg-pink-200 md:p-2 md:w-1/6">
        <ul
          class="box-content flex flex-row flex-no-wrap max-w-full py-2 space-x-6 overflow-x-scroll md:space-x-2 md:space-y-6 md:overflow-auto md:flex-wrap hide-scrollbar"
        >
          <li
            class="flex flex-col items-center w-auto h-12 p-10 ml-2 text-xs font-medium leading-4 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded cursor-pointer md:min-w-full xl:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 md:flex-row md:p-8"
            @click="serviceClicked(service.weightLoss)"
          >
            Weight Loss
          </li>
          <li
            class="flex flex-col items-center w-auto h-12 p-10 ml-2 text-xs font-medium leading-4 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded cursor-pointer md:min-w-full xl:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 md:flex-row md:p-8"
            @click="serviceClicked(service.prp)"
          >
            PRP
          </li>
          <li
            class="flex flex-col items-center w-auto h-12 p-10 ml-2 text-xs font-medium leading-4 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded cursor-pointer md:min-w-full xl:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 md:flex-row md:p-8"
            @click="serviceClicked(service.botox)"
          >
            Botox
          </li>
          <li
            class="flex flex-col items-center w-auto h-12 p-10 ml-2 text-xs font-medium leading-4 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded cursor-pointer md:min-w-full xl:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 md:flex-row md:p-8"
            @click="serviceClicked(service.fillers)"
          >
            Fillers
          </li>
          <li
            class="flex flex-col items-center w-auto h-12 p-10 ml-2 text-xs font-medium leading-4 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded cursor-pointer md:min-w-full xl:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 md:flex-row md:p-8"
            @click="serviceClicked(service.scalpThearpy)"
          >
            Scalp Thearpy
          </li>
          <li
            class="flex flex-col items-center w-auto h-12 p-10 ml-2 text-xs font-medium leading-4 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded cursor-pointer md:min-w-full xl:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 md:flex-row md:p-8"
            @click="serviceClicked(service.nutrition)"
          >
            Nutrition
          </li>
        </ul>
      </div>
      <div class="w-screen md:5/6">
        <h3
          class="w-full h-64 pt-8 text-center text-white bg-blue-900 md:h-full"
        >
          {{ serviceContent.title }}
        </h3>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Services',
  data() {
    return {
      service: {
        weightLoss: {
          title: 'Weight Loss',
        },
        prp: {
          title: 'PRP',
        },
        botox: {
          title: 'Botox',
        },
        fillers: {
          title: 'Fillers',
        },
        scalpThearpy: {
          title: 'Scalp Thearpy',
        },
        nutrition: {
          title: 'Nutrition',
        },
      },
      serviceContent: {
        title: 'content......',
      },
    }
  },
  methods: {
    serviceClicked(service) {
      this.serviceContent.title = service.title
    },
  },
}
</script>
<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
