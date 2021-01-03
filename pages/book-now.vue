<template>
  <div>
    <iframe
      src="https://app.acuityscheduling.com/schedule.php?owner=21606081"
      title="Schedule Appointment"
      class="overflow-y-visible"
      width="100%"
      height="1000px"
      frameBorder="0"
    ></iframe>
    <script
      src="https://embed.acuityscheduling.com/js/embed.js"
      type="text/javascript"
    ></script>
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
