<!-- prettier-ignore -->
<template>
  <header>
    <div class="sticky top-0 z-40 antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div v-click-outside="hideNavs" class="flex flex-col max-w-screen-xl px-0 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="flex flex-row items-center justify-between p-4">
            <Logo id="logo" />
            <nuxt-link
              v-if="$route.fullPath.indexOf('/pricing')"
              to="/pricing"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm md:hidden whitespace-nowrap bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
            >
              Book Now
            </nuxt-link>
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="openMobileNav = !openMobileNav">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path v-show="!openMobileNav" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path v-show="openMobileNav" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav :class="{flex: openMobileNav, hidden: !openMobileNav}" class="flex-col flex-grow px-2 pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <nuxt-link to="/pricing" class="px-4 py-4 mt-2 text-sm font-semibold bg-transparent border-2 border-pink-400 rounded-lg cursor-pointer md:border-0 md:border-transparent md:py-2 dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Pricing</nuxt-link>
            <span class="px-4 py-4 mt-2 text-sm font-semibold bg-transparent border-2 border-pink-400 rounded-lg cursor-pointer md:border-0 md:border-transparent md:py-2 dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="contactModalEmit(true)">Contact</span>
            <div class="relative">
              <button :class="{'bg-gray-200': !$route.fullPath.indexOf('/services')}" @click="openSubNav = !openSubNav" class="flex flex-row items-center w-full px-4 py-4 mt-2 text-sm font-semibold text-left text-gray-900 bg-transparent border-2 border-pink-400 rounded-lg md:border-0 md:border-transparent md:py-2 dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                <span>Services</span>
                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': openSubNav, 'rotate-0': !openSubNav}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div v-show="openSubNav" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right shadow-2xl md:max-w-screen-sm md:w-screen">
                <div class="px-2 pt-2 pb-4 bg-white rounded-md shadow-2xl dark-mode:bg-gray-700">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                     <nuxt-link
                      v-for="(service, i) in services"
                      :key="i"
                      :to="service.path"
                      class="flex items-start p-2 bg-transparent rounded-lg row dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                    <div class="p-3 text-white bg-teal-500 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4 md:h-6 md:w-6"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                      </div>
                      <div class="ml-3">
                        <p class="font-semibold">{{ service.title }}</p>
                        <p class="text-sm">Easy {{ service.subtitle }}</p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
              <nuxt-link
              v-if="$route.fullPath.indexOf('/pricing')"
              to="/pricing"
              class="items-center justify-center hidden px-4 py-1 ml-10 text-base font-medium text-white border border-transparent rounded-md shadow-sm md:inline-flex whitespace-nowrap bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
            >
              Book Now
            </nuxt-link>  
          </nav>
        </div>
      </div>
    </div>
      <div v-if="contactModal" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <!--
      Modal panel, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
        <div
          v-click-outside="hideContact"
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div
              class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
            >
              <!-- Heroicon name: check -->
              <svg
                class="w-6 h-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                Contact Us!
              </h3>
              <div class="mt-2 mb-40 space-y-6">
                <a
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
                  @click="gaEvent('contact_modal_sms')"
                  href="sms:+12485952363&body=Hey EVO Body Image!"
                >
                  Text Us
                </a>
                <a
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
                  @click="gaEvent('contact_modal_call_spa')"
                  href="tel:+(248) 878-6639"
                >
                  Call the Spa
                </a>
                 <a
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
                  @click="gaEvent('contact_modal_email')"
                  href="mailto:hello@evobodyimage.com?subject = Hey EVO Body Image!!"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-40">
            <span class="flex w-full shadow-sm">
              <button
                type="button"
                class="inline-flex justify-center w-full py-2 text-base font-medium leading-6 text-purple-600 transition duration-150 ease-in-out bg-pink-200 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
                @click="closeModal"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      openMobileNav: false,
      openSubNav: false,
      contactModal: false,
      services: [
        {
          title: 'HCG Weight Loss',
          subtitle: 'Quick and Effective Weight Loss Program ',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'PRP - Face',
          subtitle: 'Facial Rejuvenation',
          path: '/services/prp-face',
        },
        {
          title: 'Microneedling',
          subtitle: 'Skin Rejuvenation',
          path: '/services/microneedling',
        },
        {
          title: 'Botox',
          subtitle: 'Wrinkle Reduction',
          path: '/services/botox',
        },
        {
          title: 'Fillers',
          subtitle: 'Facial Enhancement',
          path: '/services/fillers',
        },
        {
          title: 'B12 Injections',
          subtitle: 'Vitamins and Amino Acids',
          path: '/services/b12-injections',
        },
        {
          title: 'PRP - Scalp',
          subtitle: 'Hair Growth Stimulation',
          path: '/services/prp-scalp',
        },
        {
          title: 'Nutrition',
          subtitle: 'Consultation + Diet Plan',
          path: '/services/nutrition',
        },
        {
          title: 'Chemical Peel',
          subtitle: 'Medical Grade',
          path: '/services/chemical-peel',
        },
        {
          title: 'Diet Therapy',
          subtitle: 'Food Sensitive Dieting ',
          path: '/services/diet-therapy',
        },
      ],
    }
  },
  created() {
    this.$nuxt.$on('contactModal', (value) => {
      this.contactModal = value
    })
    this.$nuxt.$on('showNav', (value) => {
      if (value === false) {
        this.hideNavs()
      }
    })
  },
  methods: {
    closeModal(event) {
      this.contactModal = false
      this.gaEvent('contact_modal_close')
    },
    gaEvent(event) {
      this.$gtm.push({
        event: 'gaEvent',
        event_name: event,
      })
      this.hideContact()
    },
    contactModalEmit(value) {
      this.$nuxt.$emit('contactModal', value)
      this.$gtm.push({
        event: 'gaEvent',
        event_name: 'contact_modal_open',
      })
    },
    hideContact(event) {
      this.contactModal = false
    },
    hideNavs(event) {
      this.openMobileNav = false
      this.openSubNav = false
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active:not(#logo) {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
</style>
