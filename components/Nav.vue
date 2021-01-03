/* eslint-disable */
<template>
  <div class="relative z-50 pt-2">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between h-2 py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10"
      >
        <div class="lg:w-0 lg:flex-1">
          <Logo />
        </div>
        <!-- <div v-click-outside="hideMobile" class="mb-1 md:hidden"> -->
        <div v-click-outside="hideMobile" class="hidden mb-1">
          <div
            id="nav-toggle"
            class="relative z-50 mr-10"
            :class="{ active: showMobileMenu }"
            @click="showMobileMenu = !showMobileMenu"
          >
            <span></span>
          </div>
        </div>
        <nav v-click-outside="hideDesktop" class="hidden space-x-10 md:flex">
          <!-- <nuxt-link
            to="/about"
            class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            About
          </nuxt-link> -->
          <div class="relative hidden">
            <button
              type="button"
              class="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900"
              @click="
                showServices = !showServices
                showBlog = false
              "
            >
              <span>Services</span>

              <svg
                class="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
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
              enter-active-class="transition duration-200 ease-out"
              enter-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <div
                v-if="showServices"
                class="absolute w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              >
                <div class="shadow-lg">
                  <div class="overflow-hidden shadow-xs">
                    <div
                      class="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8"
                    >
                      <nuxt-link
                        to="#services"
                        class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <span
                          class="relative inline-flex w-3 h-3 bg-purple-300 rounded-full"
                        ></span>
                        <!-- <svg
                          class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                        </svg> -->
                        <nuxt-link to="#services">
                          <div class="space-y-1">
                            <p
                              class="text-base font-medium leading-6 text-gray-900"
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
                        to="#services"
                        class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <span
                          class="relative inline-flex w-3 h-3 bg-purple-500 rounded-full"
                        ></span>
                        <!-- <svg
                          class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                        </svg> -->
                        <nuxt-link to="#services">
                          <div class="space-y-1">
                            <p
                              class="text-base font-medium leading-6 text-gray-900"
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
                        to="#services"
                        class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <span
                          class="relative inline-flex w-3 h-3 bg-pink-300 rounded-full"
                        ></span>
                        <!-- <svg
                          class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                        </svg> -->
                        <nuxt-link to="#services">
                          <div class="space-y-1">
                            <p
                              class="text-base font-medium leading-6 text-gray-900"
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
                        to="#services"
                        class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <span
                          class="relative inline-flex w-3 h-3 bg-purple-300 rounded-full"
                        ></span>
                        <!-- <svg
                          class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                        </svg> -->
                        <nuxt-link to="#services">
                          <div class="space-y-1">
                            <p
                              class="text-base font-medium leading-6 text-gray-900"
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
                        to="#services"
                        class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <span
                          class="relative inline-flex w-3 h-3 bg-pink-600 rounded-full"
                        ></span>
                        <!-- <svg
                          class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                        </svg> -->
                        <nuxt-link to="#services">
                          <div class="space-y-1">
                            <p
                              class="text-base font-medium leading-6 text-gray-900"
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
                      class="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                    >
                      <div class="flow-root">
                        <nuxt-link
                          to="/process"
                          class="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        <!-- <nuxt-link
                          to="/contact"
                          class="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                        >
                          <svg
                            class="flex-shrink-0 w-6 h-6 text-gray-400"
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
                        </nuxt-link> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <!-- <nuxt-link
            to="/contact"
            class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Contact
          </nuxt-link> -->
        </nav>
        <!-- <div
          class="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0"
        > -->
        <div class="flex items-center justify-end flex-1 w-0 space-x-8">
          <span class="inline-flex rounded-md shadow-sm">
            <nuxt-link
              to="/book-now"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-pink-500 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Book Now
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="showMobileMenu"
        class="absolute inset-x-0 w-5/6 p-2 transition origin-top-right transform -mt-14 md:hidden"
        style="margin-left: auto; margin-right: 0"
      >
        <div class="shadow-lg">
          <div class="bg-white divide-y-2 shadow-xs divide-gray-50">
            <div class="hidden px-5 pt-5 pb-6 space-y-6 bg-blue-100">
              <div class="flex items-center justify-between">
                <div>
                  <p
                    class="w-auto h-8 -mb-4 font-bold tracking-wider text-indigo-800 uppercase"
                  >
                    Services
                  </p>
                </div>
                <div class="-mt-2 -mr-4"></div>
              </div>
              <div>
                <nav class="grid row-gap-8">
                  <nuxt-link
                    to="#services"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <span
                      class="relative inline-flex w-3 h-3 bg-pink-500 rounded-full"
                    ></span>
                    <!-- <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                    </svg> -->
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Weight Loss
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="#services"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <span
                      class="relative inline-flex w-3 h-3 bg-purple-500 rounded-full"
                    ></span>
                    <!-- <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                    </svg> -->
                    <div class="text-base font-medium leading-6 text-gray-900">
                      PRP
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="#services"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <span
                      class="relative inline-flex w-3 h-3 bg-pink-300 rounded-full"
                    ></span>
                    <!-- <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                    </svg> -->
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Fillers
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="#services"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <span
                      class="relative inline-flex w-3 h-3 bg-purple-300 rounded-full"
                    ></span>
                    <!-- <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                    </svg> -->
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Botox
                    </div>
                  </nuxt-link>
                  <nuxt-link
                    to="#services"
                    class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                  >
                    <span
                      class="relative inline-flex w-3 h-3 bg-pink-600 rounded-full"
                    ></span>
                    <!-- <svg
                      class="flex-shrink-0 w-6 h-6 text-indigo-600"
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
                    </svg> -->
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Hair Loss Soultions
                    </div>
                  </nuxt-link>
                </nav>
              </div>
            </div>
            <div class="px-5 py-6 space-y-6 bg-blue-200">
              <div class="grid grid-cols-2 row-gap-4 col-gap-8">
                <!-- <nuxt-link
                  to=""
                  class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  About
                </nuxt-link> -->
                <button
                  @click="openModal"
                  class="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                >
                  Contact
                </button>
              </div>
              <div class="space-y-6">
                <span class="flex w-full rounded-md shadow-sm">
                  <nuxt-link
                    to="/book-now"
                    class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
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
                  href="sms:+12485952363&body=Hey EVO Body Image!"
                >
                  Text Us
                </a>
                <a
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 mt-10 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-300 bg-pink-600 border border-transparent shadow-sm bg-red-saroki hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
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
  </div>
</template>
<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      showMobileMenu: false,
      contactModal: false,
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
  created() {
    this.$nuxt.$on('contactModal', (value) => {
      this.contactModal = value
    })
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
    openModal(event) {
      this.contactModal = true
    },
    closeModal(event) {
      this.contactModal = false
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
