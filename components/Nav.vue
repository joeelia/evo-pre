/* eslint-disable */
<template>
  <header>
    <div class="relative bg-white">
      <div
        class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">EVO Body Image</span>
            <Logo />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click.prevent="showMobileMenu = true"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              class="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="toggleFlyout"
              type="button"
            >
              <span>Services</span>
              <!--
                Heroicon name: chevron-down

                Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->
              <svg
                class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!--
              'Solutions' flyout menu, show/hide based on flyout menu state.

              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            -->
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-show="isFlyout"
                class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                @click="toggleFlyout"
              >
                <div
                  class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div
                    class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
                  >
                    <nuxt-link
                      v-for="(service, i) in services"
                      :key="i"
                      :to="service.path"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div
                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12"
                      >
                        <!-- Heroicon name: inbox -->
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ service.title }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ service.subtitle }}
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <nuxt-link
            to="/pricing"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </nuxt-link>
          <!-- <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Partners
          </a>
          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Company
          </a> -->
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <nuxt-link
            v-if="$route.fullPath.indexOf('book-now') != true"
            to="/book-now"
            class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
          >
            Book Now
          </nuxt-link>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="showMobileMenu"
          class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    @click="showMobileMenu = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav
                  @click.prevent="showMobileMenu = false"
                  class="grid grid-cols-1 gap-7"
                >
                  <nuxt-link
                    v-for="(service, i) in services"
                    :key="i"
                    :to="service.path"
                    class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    >
                      <!-- Heroicon name: inbox -->
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      {{ service.title }}
                    </div>
                  </nuxt-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <nuxt-link
                  to="/pricing"
                  @click.prevent="showMobileMenu = false"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </nuxt-link>

                <!-- <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Partners
                </a>

                <a
                  href="#"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Company
                </a> -->
              </div>
              <div @click.prevent="showMobileMenu = false" class="mt-6">
                <nuxt-link
                  to="/book-now"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600"
                >
                  Book Now
                </nuxt-link>
                <p
                  class="mt-6 text-center text-base font-medium text-gray-500 cursor-pointer"
                >
                  <span @click="contactModalEmit(true)" class="text-gray-900">
                    Contact
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="contactModal" class="fixed inset-0 z-10 overflow-y-auto">
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
              <div class="mt-2 mb-40">
                <a
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-300 bg-pink-600 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
                  @click="gaEvent('contact_modal_sms')"
                  href="sms:+12485952363&body=Hey EVO Body Image!"
                >
                  Text Us
                </a>
                <a
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 mt-10 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-300 bg-pink-600 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
                  @click="gaEvent('contact_modal_call_spa')"
                  href="tel:+(248) 878-6639"
                >
                  Call the Spa
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
      isFlyout: false,
      showMobileMenu: false,
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
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'Microneedling',
          subtitle: 'Skin Rejuvenation',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'Botox',
          subtitle: 'Wrinkle Reduction',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'Fillers',
          subtitle: 'Facial Enhancement',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'B12 Injections',
          subtitle: 'Vitamins and Amino Acids',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'PRP - Scalp',
          subtitle: 'Hair Growth Stimulation',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'Nutrition',
          subtitle: 'Consultation + Diet Plan',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'Chemical Peel',
          subtitle: 'Medical Grade',
          path: '/services/hcg-weight-loss',
        },
        {
          title: 'Diet Therapy',
          subtitle: 'Food Sensitive Dieting ',
          path: '/services/hcg-weight-loss',
        },
      ],
    }
  },
  created() {
    this.$nuxt.$on('contactModal', (value) => {
      this.contactModal = value
    })
  },
  methods: {
    // need annotation due to `this` in return type
    toggleFlyout() {
      this.isFlyout = !this.isFlyout
    },
    closeModal(event) {
      this.contactModal = false
      this.gaEvent('contact_modal_close')
    },
    gaEvent(event) {
      this.$gtm.push({
        event: 'gaEvent',
        event_name: event,
      })
    },
    contactModalEmit(value) {
      this.$nuxt.$emit('contactModal', value)
      this.$gtm.push({
        event: 'gaEvent',
        event_name: 'contact_modal_open',
      })
    },
    hideMobile(event) {
      this.showMobileMenu = false
    },
  },
}
</script>
