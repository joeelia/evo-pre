<template>
  <div>
    <FeatureSection />
    <TastefulTouch />
    <!-- <TailwindBookingForm /> -->
    <!-- <Services /> -->
    <Services2 />
    <LightFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'EVO Body Image - Medical Spa | Birmingham, MI',
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
}
</script>
