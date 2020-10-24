<template>
  <div class="root">
    <div v-if="loaded" class="carousel">
      <slick
        ref="slick"
        :options="slickOptions"
      >
        <div class="item" v-if="isDesktop">
          <div class="item-props-first" />
        </div>
        <div
          v-for="(item, index) in testiContent"
          :key="index"
          class="item"
        >
          <testimonial-card
            :avatar="item.avatar"
            :title="item.title"
            :name="item.name"
            :text="item.text"
            :star="item.rating"
          />
        </div>
        <div class="item" v-if="isDesktop">
          <div class="item-props-last" />
        </div>
      </slick>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('medicalLanding.testimonial_title')"
            icon="mdi-format-quote-close"
          />
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import TestimonialCard from '../Cards/Testimonial'
import TitleIcon from '../Title/WithIcon'

export default {
  components: {
    TestimonialCard,
    TitleIcon,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Athlete',
          rating: 5
        },
        {
          text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Housewife',
          rating: 4
        },
        {
          text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[2],
          name: 'Jena Doe',
          title: 'Profesional',
          rating: 4
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[3],
          name: 'Jovelin Doe',
          title: 'Profesional',
          rating: 3
        },
        {
          text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[4],
          name: 'Jihan Doe',
          title: 'Housewife',
          rating: 5
        },
        {
          text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[6],
          name: 'Jovelin Doe',
          title: 'Profesional',
          rating: 5
        },
        {
          text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[7],
          name: 'John Doe',
          title: 'Carpenter',
          rating: 4
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Athlete',
          rating: 5
        },
        {
          text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Student',
          rating: 4
        }
      ],
      slickOptions: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    const limit = window.innerWidth > 1400 ? 3 : 2
    const lastSlide = Math.floor(this.testiContent.length - limit)
    setTimeout(() => {
      if (window.innerWidth > 1279 && !this.$vuetify.rtl) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
