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
          <div class="mt-12 sm:mt-16 lg:mt-0">
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
  name: 'ChemicalPeel',
  data() {
    return {
      service: {
        title: 'Chemical Peel',
        subtitle: 'Medical Grade',
        image:
          'v1608494632/services/Service-Medical_Grade_Chemical_Peel_zn96a7.jpg',
        description:
          'A medical grade chemical peel will help remove dead skin cells and induce collagen, remove sun and age spots, decrease the appearance of fine lines and wrinkles, brighten the complexion and make the skin smoother.',
        h2: 'something',
        faqs: [
          {
            question: 'WHAT IS A MEDICAL GRADE CHEMICAL PEEL?',
            answer: `A medical grade chemical peel is a peel that has been extensively researched and can only be used by a healthcare expert. It works by lifting away dead cells, allowing cell renewal and overall improvement in skin quality.`,
          },
          {
            question: 'WHAT ARE THE BENEFITS OF A MEDICAL GRADE CHEMICAL PEEL?',
            answer: `It will even the skin tone while reducing the appearance of acne scars and hyperpigmentation, soften fine lines and wrinkles. The newly renewed/exfoliated skin will be more hydrated and brighter as well as able to soak up regular skin care products better. It is a great anti aging regimen to add to your other beauty regimen.`,
          },
          {
            question:
              'WHO IS A GOOD CANDIDATE FOR A MEDICAL GRADE CHEMICAL PEEL?',
            answer: `Anyone with Fitzpatrik skin type I through V.
            
            Type I consists of pale white skin which always burns, does not tan. Type V is brown skin that rarely burns, tans dark easily.
            
            People with Fitzpatrick skin type VI i.e., dark brown or black skin which never burns but always tans darkly, are not ideal candidates for this peel.`,
          },
          {
            question: 'HOW OFTEN CAN I DO A MEDICAL GRADE CHEMICAL PEEL?',
            answer: `It can be done every 4 to 6 weeks.`,
          },
          {
            question: 'HOW MUCH DOWN TIME IS REQUIRED?',
            answer: `Typically 3-5 days, depending on skin type.`,
          },
        ],
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
