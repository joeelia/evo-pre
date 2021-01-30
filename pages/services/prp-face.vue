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
  name: 'PRPFace',
  data() {
    return {
      service: {
        title: 'PRP - Face',
        subtitle: 'Facial Rejuvenation',
        image: 'v1608494633/services/Service-PRP_Face_ywkdfy.jpg',
        description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
        h2: 'something',
        faqs: [
          {
            question: 'WHAT IS PRP?',
            answer: `PRP or platelet rich plasma, uses your own blood that is rich in platelets, which are essential to healing and contain growth factors, to stimulate new and healthy skin cells.
            
            During PRP facial hair stimulation, blood is drawn from you and spun in a centrifuge which separates the platelet rich portion of the blood from other components, allowing for the most beneficial components of the blood to be used for skin rejuvenation. 
            
            When the PRP is injected into the desired parts of the face that needs replenishing, or into the scalp for hair stimulation, the renewal process begins. The process is also sped up since these concentrated platelets are full of growing and healing factors, which help repair and attract important stem cells needed to heal the damaged skin and tissue. 
            
            The injection areas can be targeted, such as under the eyes, nasolabial folds, cheeks, lips, jawline and neck or specific scalp areas with noticeable hair thinning, to allow for maximum benefit. The initial results are usually apparent within 4-6 weeks however the healing process is ongoing and skin/scalp will continue to be stimulated resulting in a more overall youthful appearance with time.`,
          },
          {
            question: 'WHAT ARE THE BENEFITS OF PRP?',
            answer: `PRP stimulates elastin and collagen stimulation, resulting in tighter and smoother skin as well as reduction in the appearance of wrinkles and fine lines. In addition, it boosts collagen resulting in overall skin rejuvenation, a more youthful appearance and long lasting results. 
            
            PRP is natural and safe since it is using the natural elements of your own blood, without the addition of any foreign products.`,
          },
          {
            question: 'HOW LONG DO RESULTS LAST?',
            answer: `Results typically last 12-18 months after a minimum of 3 treatments spaced about 4 weeks apart.`,
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
