<template>
  <section id="services" class="bg-purple-100">
    <div class="mx-auto max-w-340">
      <h2 class="py-8 text-3xl font-bold text-center text-indigo-800">
        Our Services
      </h2>
      <div class="px-10 pb-20 overflow-auto md:pb-2 lg:px-28 hide-scrollbar">
        <div
          class="flex pt-16 md:pt-8 md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-4"
        >
          <div
            v-for="(service, i) in services"
            :key="i"
            data-aos="fade"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            class="flex-shrink-0 w-64 px-5 mx-3 bg-pink-500 rounded-md cursor-pointer md:mb-10 md:w-full"
          >
            <center>
              <XyzTransition appear xyz="fade rotate-right ease-out-back">
                <cld-image
                  :public-id="service.image"
                  width="300"
                  height="169"
                  radius="30"
                  fetchFormat="auto"
                  quality="auto"
                  loading="lazy"
                  class="inline-block -mt-16 rounded-md md:-mt-4"
                />
              </XyzTransition>
              <!-- <img
                :src="service.image"
                width="300"
                height="169"
                class="inline-block -mt-16 rounded-md md:-mt-4"
              /> -->
            </center>
            <div class="mt-5 font-bold text-white">
              <h3>{{ service.title }}</h3>
            </div>
            <div v-show="service.subtitle" class="mb-8 text-sm text-spindle">
              <h4>{{ service.subtitle }}</h4>
            </div>
            <div class="pb-8 text-sm text-spindle">
              {{ service.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Services2',
  data() {
    return {
      services: [
        {
          title: 'Weight Loss',
          subtitle: 'Lose Weight',
          image: 'v1608494633/services/Service-PRP_Face_ywkdfy.jpg',
          description:
            'Multiple options for weight loss including a lifestyle plan with our dietician along with B12 and injections to help increase your metabolism. We also offer an HCG diet plan which can help lose weight fast and effectively.',
        },
        {
          title: 'PRP',
          subtitle: 'Skin Rejuvenation',
          image: 'v1608494633/services/Service-PRP_Face_ywkdfy.jpg',
          description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
        },
        {
          title: 'Botox',
          subtitle: 'Physician Injected',
          image: 'v1608494632/services/Service-Botox_df6up6.jpg',
          description: `Botox is one of the most well-known methods for warding off wrinkles and other signs of aging. It's a prescription medication that's injected into the muscles of the face. Botox works by stopping the muscle that it's injected into from contracting, so it appears relaxed and smooth.`,
        },
        {
          title: 'Fillers',
          subtitle: 'Physician Injected',
          image: 'v1608494632/services/Service-Fillers_icqwao.jpg',
          description: `If you are concerned about aging or volume loss, as is about hyaluronic acid fillers to fill in deep wrinkles and restore volume to areas where it is lost, such as under eyes, lips, nasolabial folds and cheeks, which will help in giving a more youthful and refined appearance to your face.`,
        },
        {
          title: 'B12 Shots',
          subtitle: 'Constant Energy',
          image:
            'v1608494633/services/Service-Vitamin_B12_Injection_xardxd.jpg',
          description: `B12 + MIC shots will give you energy. MIC amino acids will increase metabolism to help with weight loss`,
        },
        {
          title: 'Hair Loss Treatment',
          subtitle: 'PRP for Scalp',
          image: 'v1608494633/services/Service-PRP_Hair_loss_rdfhul.jpg',
        },
        {
          title: 'Nutrition',
          subtitle: 'Consultation by Registered Dietitians',
          image:
            'v1608494633/services/Service-Personalized_Nutrition_Consultation_bmfbip.jpg',
        },
        {
          title: 'Chemical Peel',
          subtitle: 'Medical Grade',
          image:
            'v1608494632/services/Service-Medical_Grade_Chemical_Peel_zn96a7.jpg',
        },
        {
          title: 'Fat Burning Injections',
          subtitle: 'Jumpstart your diet',
          image:
            'v1608494632/services/Service-Fat_Burning_injections_pivnfb.jpg',
        },
        {
          title: 'B12 + Fat Burning Injection Combo',
          subtitle: 'Vitamins and Amino Acids',
          image:
            'v1608494632/services/Service-B12_Fat_Burning__Combo_apvxfc.jpg',
        },
        {
          title: 'Food sensitivity and Inflammation Diet Therapy',
          subtitle: 'Know your senses',
          image: 'v1608495907/services/Service-Food_Sensitivity_qy05qx.jpg',
        },
      ],
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
