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
  name: 'HCGWeightLoss',
  data() {
    return {
      service: {
        title: 'HCG Weight Loss',
        subtitle: 'Quick and Effective Weight Loss Program ',
        image: 'v1609643870/services/Service-Weight_Loss_i8jbic.jpg',
        description:
          'HCG is a hormone that results in quick and effective weight loss while being on a very low calorie diet (while not getting hungry). It can be given via injection under the skin or taken by mouth. We offer a 23 day program and a 40 day program depending on the amount of desired weight loss. This service also comes with Vitamin B12 and MIC (aids in fat loss/ enhance metabolism) injections, as well as a simple to follow diet plan.',
        h2: 'Live A Healthy Lifestyle',
        faqs: [
          {
            question: 'WHAT IS HCG WEIGHT LOSS?',
            answer: `HCG is a hormone produced by placenta during pregnancy.
              
              Depending on the desired weight loss, it can be used for 23 days or 35 days for up to 20-40lbs weight loss. Even though you are on a very low calorie diet, your appetite will be suppressed as a result of the hormone.
              
              This service comes with biweekly Vitamin B12, Vitamin B1-B6 and Fat Loss injections.`,
          },
          {
            question: 'HOW LONG WILL THE RESULTS LAST?',
            answer: `That depends on you. There is more than one phase to the diet,
                  with the first phase consisting of a very low calorie diet,
                  minimal exercise, avoiding certain types of food and staying
                  adequately hydrated. Over the next phase, calories are
                  gradually increased while still limiting certain products and
                  adding them later on during the last phase.
                  
                  The whole point is not just a quick weight loss,
                  but it is also lifestyle modification to allow for weight
                  maintenance after the initial goal weight has been achieved.`,
          },
          {
            question: 'IF I GAIN SOME OF THE WEIGHT BACK, WHAT ARE MY OPTIONS?',
            answer: `You can do another round of HCG after a minimum of 6 week
                  break. If you choose not to do so, our Registered Dietitian
                  can help you get on an alternative track with monthly follow
                  ups.`,
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
