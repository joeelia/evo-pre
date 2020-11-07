<template>
  <section class="bg-purple-200 md:p-4">
    <div class="flex flex-wrap md:p-4 rounded-xl md:flex-no-wrap">
      <div class="w-full bg-pink-200 md:p-2 md:w-1/6 xl:w-1/12">
        <ul
          class="box-content flex flex-row flex-no-wrap max-w-full py-2 space-x-6 overflow-x-scroll md:space-x-2 md:space-y-6 md:overflow-auto md:flex-wrap hide-scrollbar"
        >
          <li
            class="flex flex-col w-auto h-12 p-10 ml-2 text-center text-white bg-blue-900 xl:mt-6 md:flex-row md:p-8"
            @click="serviceClicked(service.weightLoss)"
          >
            Weight Loss
          </li>
          <li
            class="flex flex-col w-auto h-12 p-10 text-center text-white bg-blue-900 md:flex-row md:p-8"
            @click="serviceClicked(service.prp)"
          >
            PRP
          </li>
          <li
            class="flex flex-col w-auto h-12 p-10 text-center text-white bg-blue-900 md:flex-row md:p-8"
            @click="serviceClicked(service.botox)"
          >
            Botox
          </li>
          <li
            class="flex flex-col w-auto h-12 p-10 text-center text-white bg-blue-900 md:flex-row md:p-8"
            @click="serviceClicked(service.fillers)"
          >
            Fillers
          </li>
          <li
            class="flex flex-col w-auto h-12 p-10 text-center text-white bg-blue-900 md:flex-row md:p-8"
            @click="serviceClicked(service.scalpThearpy)"
          >
            Scalp Thearpy
          </li>
          <li
            class="flex flex-col w-auto h-12 p-10 text-center text-white bg-blue-900 md:flex-row md:p-8"
            @click="serviceClicked(service.nutrition)"
          >
            Nutrition
          </li>
        </ul>
      </div>
      <div class="w-screen md:5/6 xl:w-11/12">
        <div class="w-full h-64 text-center text-white bg-blue-900 md:h-full">
          {{ serviceContent.title }}
        </div>
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
