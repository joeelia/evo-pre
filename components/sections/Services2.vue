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
