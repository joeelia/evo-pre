<template>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0"
  >
    <div class="justify-center flex-none sm:flex">
      <div class="w-full mb-5 overflow-auto lg:w-1/2 xl:w-1/3">
        <div class="float-left w-full px-4 py-5">
          <p class="block mb-2 text-xs tracking-wide text-gray-600 uppercase">
            Developer preview
          </p>
          <div
            class="relative float-left w-full max-w-sm overflow-hidden bg-white rounded shadow-lg md"
          >
            <pre
              class="float-left w-full px-6 py-4 text-blue-800"
            ><code>{{ normalized }}</code></pre>
          </div>
        </div>
      </div>
      <div class="w-full px-4 py-5 overflow-auto lg:w-1/2 xl:w-1/3">
        <form-wizard
          class="relative w-full max-w-md overflow-hidden bg-white rounded shadow-lg sm:float-right"
          shape="tab"
          @on-complete="onComplete"
          back-button-text="Back"
          next-button-text="Next"
          finish-button-text="Submit"
          ref="wizard"
          :start-index="0"
        >
          <div slot="title"></div>
          <tab-content title="Service">
            <h2 class="mb-2 text-xl text-center text-gray-800">Service</h2>
            <div class="flex flex-wrap -mx-1 overflow-hidden">
              <div
                v-for="(service, index) in services"
                v-bind:id="'service-' + service.id"
                :class="'w-1/2 overflow-hidden my-1 px-1 item-' + index"
                @click="saveService(index)"
                :key="service.id"
              >
                <div
                  class="py-4 text-base text-center text-gray-800 bg-orange-200 rounded cursor-pointer hover:bg-orange-300"
                >
                  <span>{{ service.name }}</span>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Appointment">
            <h2 class="mb-2 text-xl text-center text-gray-800">Appointment</h2>
            <div class="flex flex-wrap -mx-1">
              <div class="relative h-full">
                <center>
                  <date-picker
                    v-model="date"
                    mode="date"
                    :available-dates="availableDates"
                    :input-debounce="300"
                  >
                    <template v-slot="{ inputValue, inputEvents }">
                      <input
                        class="px-2 py-1 bg-white border rounded"
                        :value="inputValue"
                        v-on="inputEvents"
                      />
                    </template>
                  </date-picker>
                </center>
              </div>
              <p />
              <div
                v-for="(appointment, index) in appointments"
                v-bind:id="'appointment-' + appointment.id"
                :class="'w-1/2 overflow-hidden my-1 px-1 item-' + index"
                :key="index"
                @click="saveAppointment(index)"
              >
                <div
                  class="py-4 text-base text-center text-gray-800 bg-orange-200 rounded cursor-pointer hover:bg-orange-300"
                >
                  <span>{{ appointment.name }}</span>
                </div>
              </div>
            </div>
          </tab-content>
          <tab-content title="Info">
            <h2 class="mb-2 text-xl text-center text-gray-800">Thank you!</h2>
            <label
              class="block mb-2 text-xs tracking-wide text-gray-600 uppercase"
              for="grid-password"
              >Email address</label
            >
            <input
              class="block w-full px-4 py-3 leading-normal bg-white border border-gray-300 rounded appearance-none input focus:outline-0 focus:shadow-outline"
              v-model="email"
              type="email"
              maxlength="200"
              placeholder="Your email address"
            />
            <p class="mt-2 text-xs italic text-gray-600">
              Your data will not be disclosed to third parties.
            </p>
          </tab-content>
        </form-wizard>
      </div>
    </div>
  </transition>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      date: new Date(),
      availableDates: [
        {
          start: null,
          end: null,
          weekdays: [2, 3],
        },
        {
          start: null,
          end: null,
          weekdays: [4, 5, 6],
        },
      ],
      stepIndex: 0,
      services: [
        { id: 1, name: 'Weight Loss', selected: false },
        { id: 2, name: 'Botox', selected: false },
        { id: 3, name: 'Fillers', selected: false },
        { id: 4, name: 'PRP', selected: false },
      ],
      appointments: [
        { id: 5, name: '11:20am', selected: false },
        { id: 6, name: '12:30pm', selected: false },
        { id: 7, name: '1:15pm', selected: false },
        { id: 8, name: '2:45pm', selected: false },
        { id: 9, name: '3:30pm', selected: false },
        { id: 10, name: '3:45pm', selected: false },
        { id: 11, name: '4:15pm', selected: false },
        { id: 12, name: '5:00pm', selected: false },
      ],
      data: [],
      value: '',
      email: '',
    }
  },
  computed: {
    normalized() {
      const services = this.services.filter(function (item) {
        return item.selected === true
      })
      const appointments = this.appointments.filter(function (item) {
        return item.selected === true
      })
      let data = this.data
      if (this.email.length) {
        data = new Array({
          email: this.email,
        })
      }
      return JSON.stringify([services, appointments, data], null, 2)
    },
  },
  methods: {
    saveService(index) {
      this.$data.services = this.services
      this.services[index].selected = true
      this.$refs.wizard.changeTab(0, 1)
    },
    saveAppointment(index) {
      this.$data.appointments = this.appointments
      this.appointments[index].selected = true
      this.$refs.wizard.changeTab(1, 2)
    },
    onComplete() {
      alert('Thank you for your response! We will contact you soon.')
    },
  },
}
</script>
<style>
[v-cloak] {
  display: none;
}

.vue-form-wizard .wizard-tab-content {
  width: 100%;
  float: left;
  padding: 2rem 1rem;
  height: 400px;
}

.vue-form-wizard .wizard-nav {
  position: relative;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

.vue-form-wizard .wizard-nav li,
.vue-form-wizard .wizard-nav a {
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
}

.vue-form-wizard .wizard-nav > li > a {
  color: #718096;
}

.vue-form-wizard .wizard-nav > li > a.disabled {
  pointer-events: none;
  cursor: default;
}

.vue-form-wizard .wizard-nav > li.active > a .wizard-icon {
  color: #fff;
}

.vue-form-wizard .wizard-nav .stepTitle {
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 2;
}

.vue-form-wizard .wizard-nav .wizard-icon-circle {
  width: 100%;
  background-color: #e2e8f0;
  border-radius: 0;
}

.vue-form-wizard .wizard-nav .wizard-icon-circle.checked:hover {
  background-color: #cbd5e0;
}

.vue-form-wizard .wizard-nav .wizard-icon-circle .wizard-icon-container {
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  border: none;
  background-color: #e2e8f0;
}

.vue-form-wizard .wizard-nav .wizard-icon-circle .wizard-icon {
  font-size: 1.5rem;
  line-height: 2;
}

.vue-form-wizard .wizard-progress-with-circle {
  position: absolute;
  bottom: 0;
  height: 0.25rem;
  width: 100%;
  background-color: #e2e8f0;
}

.vue-form-wizard .wizard-progress-with-circle .wizard-progress-bar {
  position: relative;
  height: 0.25rem;
}

.vue-form-wizard .wizard-card-footer {
  width: 100%;
  float: left;
  padding: 1.5rem 1rem;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-left {
  float: left;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-right {
  float: right;
}

.vue-form-wizard .wizard-card-footer .wizard-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.vue-form-wizard .wizard-card-footer .wizard-btn:focus {
  outline: 0;
}

.vue-form-wizard .wizard-card-footer .wizard-btn:hover {
  background-color: #c53030 !important;
}
</style>
