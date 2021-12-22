<template>
  <div class="bg-white">
    <div class="bg-gradient-to-b from-pink-50 via-white to-white">
      <!-- Header section with select menu -->
      <div
        class="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl"
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
          <div class="w-full max-w-xs mt-10 lg:mt-0">
            <label
              for="currency"
              class="block text-base font-medium text-rose-300"
              >950 E. Maple Rd, Ste L10. Birmingham, MI 48009</label
            >
          </div>
        </div>
      </div>
    </div>

    <ul class="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(pricing, i) in prices"
        :key="i"
        data-aos="fade"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease"
        class="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
      >
        <div class="flex items-center justify-between w-full p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-sm font-medium text-gray-900 truncate">
                {{ pricing.title }}
              </h3>
              <span
                v-if="pricing.price"
                class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                >${{ pricing.price }} +</span
              >
            </div>
            <p class="mt-1 text-sm text-gray-500 truncate">
              {{ pricing.subtitle }}
            </p>
          </div>
          <img
            class="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
            :src="
              'https://res.cloudinary.com/deck8xqmf/image/upload/f_auto,q_auto,r_30/' +
              pricing.image
            "
            alt=""
          />
        </div>
        <div>
          <div class="flex -mt-px divide-x divide-gray-200">
            <div class="flex flex-1 w-0">
              <a
                target="_blank"
                :href="pricing.link"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <!-- Heroicon name: mail -->
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <a target="_blank" :href="pricing.link" class="ml-3"
                  >Book Now</a
                >
              </a>
            </div>
            <div class="flex flex-1 w-0 -ml-px">
              <a
                @click="contactModalEmit(true)"
                href="#"
                class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
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
    <LookingForMore />
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
          price: 500,
          subtitle: 'Quick and Effective Weight Loss Program ',
          image: 'v1609643870/services/Service-Weight_Loss_i8jbic.jpg',
          description:
            'HCG is a hormone that results in quick and effective weight loss while being on a very low calorie diet (while not getting hungry). It can be given via injection under the skin or taken by mouth. We offer a 23 day program and a 40 day program depending on the amount of desired weight loss. This service also comes with Vitamin B12 and MIC (aids in fat loss/ enhance metabolism) injections, as well as a simple to follow diet plan.',
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854643',
        },
        {
          title: 'PRP - Face',
          price: 700,
          subtitle: 'Facial Rejuvenation',
          image: 'v1608494633/services/Service-PRP_Face_ywkdfy.jpg',
          description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3813854',
        },
        {
          title: 'PRP Face/Hair Microneedling With Injections',
          price: 850,
          subtitle: 'Facial Rejuvenation',
          image: 'v1608494633/services/Service-PRP_Face_ywkdfy.jpg',
          description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3813856',
        },
        {
          title: 'Microneedling',
          price: 250,
          subtitle: 'Skin Rejuvenation',
          image: 'v1608494632/services/Service-Microneedling_hva9rw.jpg',
          description: `Microneedling includes using a microneedle to prick the skin, which increases collagen production resulting in smoother, firmer, and more toned skin.  It is used with a serum specific to suit your needs. `,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854640',
        },
        {
          title: 'Botox',
          price: 12,
          subtitle: 'Wrinkle Reduction',
          image: 'v1608494632/services/Service-Botox_df6up6.jpg',
          description: `Botox is one of the most well-known methods for warding off wrinkles and other signs of aging. It's a prescription medication that's injected into the muscles of the face. Botox works by stopping the muscle that it's injected into from contracting, so it appears relaxed and smooth.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854638',
        },
        {
          title: 'Fillers',
          price: 550,
          subtitle: 'Facial Enhancement',
          image: 'v1608494632/services/Service-Fillers_icqwao.jpg',
          description: `If you are concerned about aging or volume loss, ask us about hyaluronic acid fillers to fill in wrinkles and restore volume to areas where it is lost. They can be placed under the eyes, lips, nasolabial folds, cheeks, jaw/chin, and hands, which will give a  more youthful and refined appearance to your face.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854639',
        },
        {
          title: 'Cheek Fillers',
          price: 650,
          subtitle: 'Facial Enhancement',
          image: 'v1608494632/services/Service-Fillers_icqwao.jpg',
          description: `If you are concerned about aging or volume loss, ask us about hyaluronic acid fillers to fill in wrinkles and restore volume to areas where it is lost. They can be placed under the eyes, lips, nasolabial folds, cheeks, jaw/chin, and hands, which will give a  more youthful and refined appearance to your face.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854639',
        },
        {
          title: 'Under Eye Fillers',
          price: 650,
          subtitle: 'Facial Enhancement',
          image: 'v1608494632/services/Service-Fillers_icqwao.jpg',
          description: `If you are concerned about aging or volume loss, ask us about hyaluronic acid fillers to fill in wrinkles and restore volume to areas where it is lost. They can be placed under the eyes, lips, nasolabial folds, cheeks, jaw/chin, and hands, which will give a  more youthful and refined appearance to your face.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854639',
        },
        {
          title: 'B12 + Fat Burning Injection Combo',
          price: 60,
          subtitle: 'Vitamins and Amino Acids',
          image:
            'v1608494633/services/Service-Vitamin_B12_Injection_xardxd.jpg',
          description: `Vitamin B12 + Fat burning MIC combo injection- Vitamin B12 helps
          increases energy and improves metabolism. Fat burning
          injections helps break down of stubborn
          fat in the body, aiding in additional weight loss.`,
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3846421',
        },
        {
          title: 'PRP - Scalp',
          price: 700,
          subtitle: 'Hair Growth Stimulation',
          image: 'v1608494633/services/Service-PRP_Hair_loss_rdfhul.jpg',
          description:
            'PRP treatment for hair involves injecting your own platelet rich plasma portion of the blood into your scalp which helps stimulate new hair follicles resulting in improved hair growth and texture.',
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3813852',
        },
        {
          title: 'Nutrition',
          subtitle: 'Consultation + Diet Plan',
          image:
            'v1608494633/services/Service-Personalized_Nutrition_Consultation_bmfbip.jpg',
          description:
            "Dietitian supervised review of medical history, food habits, preferences, food security/availability, dietary practices, feeding skills, eating problems, and an analysis of biochemical and anthropometric variables- including the person's height, weight, and fat content of the body. This information is used to come up with a personalized diet plan, with optional follow-ups.",
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854641',
        },
        {
          title: 'Chemical Peel',
          price: 250,
          subtitle: 'Medical Grade',
          image:
            'v1608494632/services/Service-Medical_Grade_Chemical_Peel_zn96a7.jpg',
          description:
            'A medical grade chemical peel will help remove dead skin cells and induce collagen, remove sun and age spots, decrease the appearance of fine lines and wrinkles, brighten the complexion and make the skin smoother.',
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854642',
        },
        {
          title: 'Food Sensitivity and Inflammation Diet Therapy',
          subtitle: 'Food Sensitive Dieting ',
          image: 'v1608495907/services/Service-Food_Sensitivity_qy05qx.jpg',
          description:
            'MRT lab test identifies inflammatory responses to foods and food chemicals. It will be used to create a highly effective anti-inflammatory eating plan to provide quick and lasting relief for IBS, migraines, fibromyalgia, and other chronic health problems.',
          link:
            'https://go.booker.com/location/ThisGirlLori/detail-summary/3854641',
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
