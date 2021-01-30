<template>
  <section id="services" class="bg-purple-100">
    <div class="bg-white">
      <div class="bg-gradient-to-b from-pink-50 via-white to-white">
        <!-- Header section with select menu -->
        <div
          class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl"
        >
          <div
            class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center"
          >
            <div class="max-w-xl">
              <h2
                class="text-4xl font-extrabold text-pink-600 sm:text-5xl sm:tracking-tight lg:text-6xl"
              >
                {{ service.title }}
              </h2>
              <!-- <p class="mt-5 text-xl text-rose-300">
              Our services that help you medically and cosmetically are avaiable
              for market rate.
            </p> -->
            </div>
            <div class="mt-10 w-full max-w-xs lg:mt-0">
              <label
                for="currency"
                class="block text-base font-medium text-rose-300"
                >{{ service.subtitle }}</label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
        >
          <div
            class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
          >
            <div>
              <div></div>
              <div class="mt-6">
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ service.h2 }}
                </h2>
                <p class="mt-4 text-lg text-gray-500">
                  {{ service.description }}
                </p>
                <div class="mt-6">
                  <nuxt-link
                    to="/book-now"
                    class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
                  >
                    Book Now
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0 overflow-x-hidden">
            <div
              class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
            >
              <cld-image
                :public-id="service.image"
                width="300"
                height="169"
                radius="30"
                fetchFormat="auto"
                quality="auto"
                loading="lazy"
                class="w-full rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50">
        <!-- FAQ -->
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div class="mt-12">
            <dl
              class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
            >
              <div v-for="(faq, i) in service.faqs" :key="i" class="space-y-2">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  {{ faq.question }}
                </dt>
                <dd
                  class="text-base text-gray-500"
                  v-nl2br
                  v-html="faq.answer"
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
      <LookingForMore />
    </div>
  </section>
</template>
<script>
export default {
  name: 'B12Injections',
  data() {
    return {
      service: {
        title: 'B12 + Fat Burning Injection Combo',
        subtitle: 'Vitamins and Amino Acids',
        image: 'v1608494633/services/Service-Vitamin_B12_Injection_xardxd.jpg',
        description: `Vitamin B12 + Fat burning MIC combo injection- Vitamin B12 helps
          increases energy and improves metabolism. Fat burning
          injections helps break down of stubborn
          fat in the body, aiding in additional weight loss.`,
        h2: 'something',
        faqs: [
          {
            question: 'WHAT IS THE BENEFIT OF A VITAMIN B12 INJECTION?',
            answer: `Vitamin B12 injection  helps your body use fat and carbohydrates for energy and make new protein. It is also important for normal blood, cells, and nerves. Aside from a boost in energy, it increases your metabolism resulting in weight loss as well.`,
          },
          {
            question: 'WHAT ARE FAT LOSS INJECTIONS?',
            answer: `Fat Loss injections, or MIC, are made up of vitamins and amino acids consisting of Methionine, Inositol and Choline. 
            
            Methionine helps in breaking down of fat resulting in decreased fat buildup in arteries. It also aids in liver detoxification. 
            
            Inositol utilizes fat as a form of energy. It is also used for cellular nutrient absorption and keeping nerve signals healthy. 
            
            Choline controls blood cholesterol level and keeps the cells healthy. It also helps in maintaining the nervous system and assists in memory.`,
          },
          {
            question:
              'WHO IS A GOOD CANDIDATE FOR VITAMIN B12 + FAT LOSS COMBO INJECTION?',
            answer: `A good candidate would be anyone desiring additional weight loss, including a decrease in cholesterol levels, a boost in energy, maintain healthy nerve impulses and aid in liver detoxification.`,
          },
        ],
      },
      faqJSON: {},
    }
  },
  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.faqJSON }],
    }
  },
  created() {
    this.faqJSONString()
  },
  methods: {
    faqJSONString() {
      this.faqJSON = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [],
      }
      for (let i = 0; i < this.service.faqs.length; i++) {
        this.faqJSON.mainEntity.push({
          '@type': 'Question',
          name: this.service.faqs[i].question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.service.faqs[i].answer,
          },
        })
      }
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
