<template>
  <section class="bg-purple-200 md:p-4">
    <div class="flex flex-wrap md:p-4 rounded-xl md:flex-no-wrap xl:p-40">
      <div class="w-full bg-pink-200 md:p-2 md:w-1/6">
        <ul
          class="box-content flex flex-row flex-no-wrap items-center py-2 space-x-6 overflow-x-scroll md:justify-center md:space-x-2 md:space-y-6 md:overflow-auto md:flex-wrap hide-scrollbar"
        >
          <li
            class="inline-flex flex-col w-32 px-10 py-8 ml-2 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.weightLoss)"
          >
            Weight Loss
          </li>
          <li
            class="flex flex-col w-32 h-auto min-h-full px-10 py-8 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.b12)"
          >
            B12 Shots
          </li>
          <li
            class="flex flex-col w-32 h-auto min-h-full px-10 py-8 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.prp)"
          >
            PRP
          </li>
          <li
            class="flex flex-col w-32 h-auto min-h-full px-10 py-8 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.botox)"
          >
            Botox
          </li>
          <li
            class="flex flex-col w-32 px-10 py-8 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.fillers)"
          >
            Fillers
          </li>
          <li
            class="flex flex-col w-32 px-10 py-8 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.scalpThearpy)"
          >
            Scalp Thearpy
          </li>
          <li
            class="flex flex-col w-32 px-10 py-8 text-xs font-bold text-center text-white bg-blue-500 rounded cursor-pointer md:px-4 md:py-2 md:text-left hover:bg-blue-700"
            @click="serviceClicked(service.nutrition)"
          >
            Nutrition
          </li>
        </ul>
      </div>

      <div class="w-screen p-10 pt-8 bg-blue-900 h-screen-60 md:5/6">
        <div :class="serviceContent.class">
          <h3
            v-show="serviceContent.title"
            key="title"
            class="text-center text-white"
          >
            {{ serviceContent.title }}
          </h3>
          <p
            v-show="serviceContent.description"
            key="description"
            class="pt-8 text-white"
          >
            {{ serviceContent.description }}
          </p>
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
          description:
            'Multiple options for weight loss including a lifestyle plan with our dietician along with B12 and injections to help increase your metabolism. We also offer an HCG diet plan which can help lose weight fast and effectively.',
        },
        prp: {
          title: 'PRP - Face',
          description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
        },
        botox: {
          title: 'Botox',
          description: `Botox is one of the most well-known methods for warding off wrinkles and other signs of aging. It's a prescription medication that's injected into the muscles of the face. Botox works by stopping the muscle that it's injected into from contracting, so it appears relaxed and smooth.`,
        },
        fillers: {
          title: 'Fillers',
          description: `If you are concerned about aging or volume loss, as is about hyaluronic acid fillers to fill in deep wrinkles and restore volume to areas where it is lost, such as under eyes, lips, nasolabial folds and cheeks, which will help in giving a more youthful and refined appearance to your face.`,
        },
        b12: {
          title: 'B12 Shots',
          description: `B12 + MIC shots will give you energy. MIC amino acids will increase metabolism to help with weight loss`,
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
        description: 'description......',
        class: null,
      },
    }
  },
  methods: {
    serviceClicked(service) {
      this.serviceContent.class = 'fade-in'
      this.serviceContent.title = service.title
      this.serviceContent.description = service.description
    },
  },
}
</script>
<style scoped>
.h-screen-60 {
  height: 60vh;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
