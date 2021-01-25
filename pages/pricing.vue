<template>
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
              Pricing
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
              >Birmingham, MI</label
            >
          </div>
        </div>
      </div>
    </div>

    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10">
      <li
        v-for="(pricing, i) in prices"
        :key="i"
        data-aos="fade"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease"
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">
                {{ pricing.title }}
              </h3>
              <span
                class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                >Admin</span
              >
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">
              {{ pricing.subtitle }}
            </p>
          </div>
          <img
            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
            :src="
              'https://res.cloudinary.com/deck8xqmf/image/upload/f_auto,q_auto,r_30/' +
              pricing.image
            "
            alt=""
          />
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                href="#"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <!-- Heroicon name: mail -->
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <nuxt-link to="/book-now" class="ml-3">Book Now</nuxt-link>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href="#"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <!-- Heroicon name: phone -->
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <span @click="contactModalEmit(true)" class="ml-3"
                  >Contact</span
                >
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
            <div class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                What's the best thing about Switzerland?
              </dt>
              <dd class="text-base text-gray-500">
                I don't know, but the flag is a big plus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>
            <div class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                How do you make holy water?
              </dt>
              <dd class="text-base text-gray-500">
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Why do you never see elephants hiding in trees?
              </dt>
              <dd class="text-base text-gray-500">
                Because they're so good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                What do you call someone with no body and no nose?
              </dt>
              <dd class="text-base text-gray-500">
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Why can't you hear a pterodactyl go to the bathroom?
              </dt>
              <dd class="text-base text-gray-500">
                Because the pee is silent. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
            <div class="space-y-2">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Why did the invisible man turn down the job offer?
              </dt>
              <dd class="text-base text-gray-500">
                He couldn't see himself doing it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Feature section with brand panel -->
    <div class="relative">
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1 bg-gray-50"></div>
        <div class="flex-1"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
        >
          <div
            class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
          >
            <div class="lg:self-center">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Looking for more?</span>
                <span class="block text-red-900"
                  >Checkout our full services.</span
                >
              </h2>
              <p class="mt-4 text-lg leading-6 text-orange-50">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <nuxt-link
                to="/book-now"
                class="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
                >Book Now
              </nuxt-link>
            </div>
          </div>
          <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactModal: false,
      title: 'EVO Body Image - Medical Spa| Book Now | Birmingham, MI',
      prices: [
        {
          title: 'HCG Weight Loss',
          subtitle: 'Quick and Effective Weight Loss Program ',
          image: 'v1609643870/services/Service-Weight_Loss_i8jbic.jpg',
          description:
            'HCG is a hormone that results in quick and effective weight loss while being on a very low calorie diet (while not getting hungry). It can be given via injection under the skin or taken by mouth. We offer a 23 day program and a 40 day program depending on the amount of desired weight loss. This service also comes with Vitamin B12 and MIC (aids in fat loss/ enhance metabolism) injections, as well as a simple to follow diet plan.',
        },
        {
          title: 'PRP - Face',
          subtitle: 'Facial Rejuvenation',
          image: 'v1608494633/services/Service-PRP_Face_ywkdfy.jpg',
          description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
        },
        {
          title: 'Microneedling',
          subtitle: 'Skin Rejuvenation',
          image: 'v1608494632/services/Service-Microneedling_hva9rw.jpg',
          description: `Microneedling includes using a microneedle to prick the skin, which increases collagen production resulting in smoother, firmer, and more toned skin.  It is used with a serum specific to suit your needs. `,
        },
        {
          title: 'Botox',
          subtitle: 'Wrinkle Reduction',
          image: 'v1608494632/services/Service-Botox_df6up6.jpg',
          description: `Botox is one of the most well-known methods for warding off wrinkles and other signs of aging. It's a prescription medication that's injected into the muscles of the face. Botox works by stopping the muscle that it's injected into from contracting, so it appears relaxed and smooth.`,
        },
        {
          title: 'Fillers',
          subtitle: 'Facial Enhancement',
          image: 'v1608494632/services/Service-Fillers_icqwao.jpg',
          description: `If you are concerned about aging or volume loss, ask us about hyaluronic acid fillers to fill in wrinkles and restore volume to areas where it is lost. They can be placed under the eyes, lips, nasolabial folds, cheeks, jaw/chin, and hands, which will give a  more youthful and refined appearance to your face.`,
        },
        {
          title: 'B12 + Fat Burning Injection Combo',
          subtitle: 'Vitamins and Amino Acids',
          image:
            'v1608494633/services/Service-Vitamin_B12_Injection_xardxd.jpg',
          description: `Vitamin B12 + Fat burning MIC combo injection- Vitamin B12 helps
          increases energy and improves metabolism. Fat burning
          injections helps break down of stubborn
          fat in the body, aiding in additional weight loss.`,
        },
        {
          title: 'PRP - Scalp',
          subtitle: 'Hair Growth Stimulation',
          image: 'v1608494633/services/Service-PRP_Hair_loss_rdfhul.jpg',
          description:
            'PRP treatment for hair involves injecting your own platelet rich plasma portion of the blood into your scalp which helps stimulate new hair follicles resulting in improved hair growth and texture.',
        },
        {
          title: 'Nutrition',
          subtitle: 'Consultation + Diet Plan',
          image:
            'v1608494633/services/Service-Personalized_Nutrition_Consultation_bmfbip.jpg',
          description:
            "Dietitian supervised review of medical history, food habits, preferences, food security/availability, dietary practices, feeding skills, eating problems, and an analysis of biochemical and anthropometric variables- including the person's height, weight, and fat content of the body. This information is used to come up with a personalized diet plan, with optional follow-ups.",
        },
        {
          title: 'Chemical Peel',
          subtitle: 'Medical Grade',
          image:
            'v1608494632/services/Service-Medical_Grade_Chemical_Peel_zn96a7.jpg',
          description:
            'A medical grade chemical peel will help remove dead skin cells and induce collagen, remove sun and age spots, decrease the appearance of fine lines and wrinkles, brighten the complexion and make the skin smoother.',
        },
        {
          title: 'Food Sensitivity and Inflammation Diet Therapy',
          subtitle: 'Food Sensitive Dieting ',
          image: 'v1608495907/services/Service-Food_Sensitivity_qy05qx.jpg',
          description:
            'MRT lab test identifies inflammatory responses to foods and food chemicals. It will be used to create a highly effective anti-inflammatory eating plan to provide quick and lasting relief for IBS, migraines, fibromyalgia, and other chronic health problems.',
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Botox, Fillers, PRP and more!',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Botox, Fillers, PRP and more!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require(`~/assets/images/og/og-home.jpg`),
        },
      ],
    }
  },
  methods: {
    contactModalEmit(value) {
      this.$nuxt.$emit('contactModal', value)
      this.$gtm.push({
        event: 'gaEvent',
        event_name: 'contact_modal_open',
      })
    },
  },
}
</script>
