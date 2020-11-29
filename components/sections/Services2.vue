<template>
  <section id="services" class="bg-purple-400">
    <div class="mx-auto max-w-340">
      <h3 class="py-8 text-3xl font-bold text-center text-white">
        Our Services
      </h3>
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
            class="flex-shrink-0 w-64 px-5 mx-3 bg-pink-500 rounded-md md:mb-10 md:w-full"
          >
            <center>
              <img
                :src="service.image"
                width="300"
                height="169"
                class="inline-block -mt-16 rounded-md md:-mt-4"
              />
            </center>
            <div class="mt-5 font-bold text-white">{{ service.title }}</div>
            <div class="mb-8 text-sm text-spindle">Loose Weight</div>
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
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
          description:
            'Multiple options for weight loss including a lifestyle plan with our dietician along with B12 and injections to help increase your metabolism. We also offer an HCG diet plan which can help lose weight fast and effectively.',
        },
        {
          title: 'PRP',
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
          description: `PRP is a concentration of platelets in the blood that are crucial to wound healing. When used for skin rejuvenation or in the treatment of hair loss, it releases growth factors into the skin to expedite the body's repair process and stimulate new collagen and elastin production. This means basically using your own body to heal yourself and look younger.`,
        },
        {
          title: 'Botox',
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
          description: `Botox is one of the most well-known methods for warding off wrinkles and other signs of aging. It's a prescription medication that's injected into the muscles of the face. Botox works by stopping the muscle that it's injected into from contracting, so it appears relaxed and smooth.`,
        },
        {
          title: 'Fillers',
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
          description: `If you are concerned about aging or volume loss, as is about hyaluronic acid fillers to fill in deep wrinkles and restore volume to areas where it is lost, such as under eyes, lips, nasolabial folds and cheeks, which will help in giving a more youthful and refined appearance to your face.`,
        },
        {
          title: 'B12 Shots',
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
          description: `B12 + MIC shots will give you energy. MIC amino acids will increase metabolism to help with weight loss`,
        },
        {
          title: 'Scalp Thearpy',
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
        },
        {
          title: 'Nutrition',
          image:
            'https://res.cloudinary.com/deck8xqmf/image/upload/v1606616074/samples/landscapes/architecture-signs.jpg',
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
