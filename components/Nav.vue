/* eslint-disable */
<template>
  <div class="relative bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between h-2 items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <div class="mb-1 md:hidden" v-click-outside="hideMobile">
          <div
            id="nav-toggle"
            @click="showMobileMenu = !showMobileMenu"
            class="relative z-50 mr-10"
            v-bind:class="{ active: showMobileMenu }"
          >
            <span></span>
          </div>
        </div>
        <nav class="hidden md:flex space-x-10" v-click-outside="hideDesktop">
          <nuxt-link
            to="/about"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            About
          </nuxt-link>
          <div class="relative">
            <button
              type="button"
              @click="
                showServices = !showServices
                showBlog = false
              "
              class="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              <span>Services</span>

              <svg
                class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="showServices"
                class="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div class="shadow-lg">
                  <div class="shadow-xs overflow-hidden">
                    <div
                      class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <nuxt-link
                        to="/analyze/analytics"
                        class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <nuxt-link to="/analyze/analytics">
                          <div class="space-y-1">
                            <p
                              class="text-base leading-6 font-medium text-gray-900"
                            >
                              Weight Loss
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              Get a better understanding of where your traffic
                              is coming from.
                            </p>
                          </div>
                        </nuxt-link>
                      </nuxt-link>
                      <nuxt-link
                        to="/target/paid-media"
                        class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                        <nuxt-link to="/target/paid-media">
                          <div class="space-y-1">
                            <p
                              class="text-base leading-6 font-medium text-gray-900"
                            >
                              PRP
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              Speak directly to your customers in a more
                              meaningful way.
                            </p>
                          </div>
                        </nuxt-link>
                      </nuxt-link>
                      <nuxt-link
                        to="/target/search-engine-optimization"
                        class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <nuxt-link to="/target/search-engine-optimization">
                          <div class="space-y-1">
                            <p
                              class="text-base leading-6 font-medium text-gray-900"
                            >
                              Fillers
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              Earn search rankings.
                            </p>
                          </div>
                        </nuxt-link>
                      </nuxt-link>
                      <nuxt-link
                        to="/implement/integrations"
                        class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                          />
                        </svg>
                        <nuxt-link to="/implement/integrations">
                          <div class="space-y-1">
                            <p
                              class="text-base leading-6 font-medium text-gray-900"
                            >
                              Botox
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              Connect with third-party tools that you’re already
                              using.
                            </p>
                          </div>
                        </nuxt-link>
                      </nuxt-link>
                      <nuxt-link
                        to="/analyze/automations"
                        class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <nuxt-link to="/implement/automations">
                          <div class="space-y-1">
                            <p
                              class="text-base leading-6 font-medium text-gray-900"
                            >
                              Hair Loss Soultions
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                              Build strategic funnels that will drive your
                              customers to convert
                            </p>
                          </div>
                        </nuxt-link>
                      </nuxt-link>
                    </div>
                    <div
                      class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                    >
                      <div class="flow-root">
                        <nuxt-link
                          to="/process"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Our Process</span>
                        </nuxt-link>
                      </div>
                      <div class="flow-root">
                        <nuxt-link
                          to="/contact"
                          class="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                        >
                          <svg
                            class="flex-shrink-0 h-6 w-6 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>Contact</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <nuxt-link
            to="/blog"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Contact
          </nuxt-link>
        </nav>
        <div
          class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"
        >
          <span class="inline-flex rounded-md shadow-sm">
            <nuxt-link
              to="/return-on-investment"
              class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Book Now
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showMobileMenu"
        class="absolute -mt-14 inset-x-0 p-2 transition transform origin-top-right md:hidden w-5/6"
        style="margin-left: auto; margin-right: 0"
      >
        <div class="shadow-lg">
          <div class="shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6 bg-blue-100">
              <div class="flex items-center justify-between">
                <div>
                  <p
                    class="h-8 w-auto -mb-4 uppercase tracking-wider text-indigo-800 font-bold"
                  >
                    Services
                  </p>
                </div>
                <div class="-mr-4 -mt-2"></div>
              </div>
              <div>
                <nav class="grid row-gap-8">
                  <nuxt-link
                    to="/analyze/analytics"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Weight Loss
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/target/paid-media"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      PRP
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/target/search-engine-optimization"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Fillers
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/implement/integrations"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Botox
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="/implement/automations"
                    class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Hair Loss Soultions
                    </div>
                  </nuxt-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6 bg-blue-200">
              <div class="grid grid-cols-2 row-gap-4 col-gap-8">
                <nuxt-link
                  to="/quick-wins"
                  class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  About
                </nuxt-link>
                <nuxt-link
                  to="/blog"
                  class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Contact
                </nuxt-link>
              </div>
              <div class="space-y-6">
                <span class="w-full flex rounded-md shadow-sm">
                  <nuxt-link
                    to="/contact"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Book Now
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      showServices: false,
      showBlog: false,
      isSticky: false,
      scrolling: null,
    }
  },
  computed: {
    lastThreePosts() {
      return this.$static.blogPost.edges.slice(0, 3)
    },
  },
  mounted() {
    let lastScrollTop = window.scrollY
    if (!this.scrolling) {
      document.addEventListener(
        'scroll',
        () => {
          // or window.addEventListener("scroll"....
          const st =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0 // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
          if (st > lastScrollTop) {
            this.isSticky = false
            this.scrolling = true
          } else {
            this.isSticky = true
            if (st < 40) {
              //  console.log(st);
              this.isSticky = false
              this.scrolling = false
            }
            this.scrolling = true
          }
          this.scrolling = false
          lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
        },
        false
      )
    }
  },
  methods: {
    stickyNavO(val) {
      this.stickyNav = val
    },
    hideDesktop(event) {
      this.showServices = false
      this.showBlog = false
    },
    hideMobile(event) {
      this.showMobileMenu = false
    },
  },
}
</script>
<style>
@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}

#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  cursor: pointer;
  height: 5px;
  width: 35px;
  position: absolute;
  display: block;
  content: '';
  background: black;
  float: right;
}
#nav-toggle span:before {
  top: -10px;
}
#nav-toggle span:after {
  bottom: -10px;
}

#nav-toggle span,
#nav-toggle span:before,
#nav-toggle span:after {
  transition: all 150ms ease-in-out;
}
#nav-toggle.active span {
  background-color: transparent;
}
#nav-toggle.active span:before,
#nav-toggle.active span:after {
  top: 0;
}
#nav-toggle.active span:before {
  transform: rotate(45deg);
}
#nav-toggle.active span:after {
  transform: rotate(-45deg);
}
</style>
