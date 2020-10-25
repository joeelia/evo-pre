<template>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-200 ease-in"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      class="z-50 modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-white opacity-95"
      ></div>

      <div class="modal-container fixed w-full h-full z-50 overflow-y-auto">
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50"
          @click="$emit('show-booking-form', false)"
        >
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
          (Esc)
        </div>

        <!-- Add margin if you want to see grey behind the modal-->
        <div class="modal-content container mx-auto h-auto text-left p-4">
          <!--Title-->
          <div class="flex justify-between items-center pb-2">
            <p class="text-2xl font-exo font-bold">Book Your Appointment</p>
          </div>

          <!--Body-->
          <flow-form
            ref="flowform"
            v-bind:questions="questions"
            v-bind:standalone="true"
          >
            <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
            <!-- We've overriden the default "complete" slot content -->
            <template v-slot:complete>
              <div class="f-section-wrap">
                <p>
                  <span class="fh2">Review Appointment Details</span>
                  <span class="f-section-text">
                    Great work, one last step before we can see you. Please
                    confirm the following:
                    <li
                      class="font-bold"
                      v-for="item in questions"
                      :key="item.id"
                    >
                      {{ item.title }} : {{ item.answer }}
                    </li>
                  </span>
                </p>
                <p class="f-description">
                  Note: An Email / SMS notification will be sent to you on
                  confirmation.
                </p>
              </div>
            </template>

            <!-- We've overriden the default "completeButton" slot content -->
            <template v-slot:completeButton>
              <div class="f-submit" v-if="!submitted">
                <button
                  class="o-btn-action"
                  ref="button"
                  type="submit"
                  href="#"
                  v-on:click.prevent="$emit('show-booking-form', false)"
                  aria-label="Press to submit"
                >
                  <span>Submit</span>
                </button>
                <a class="f-enter-desc" href="#"> </a>
              </div>

              <p class="text-success" v-if="submitted">
                Submitted succesfully.
              </p>
            </template>
          </flow-form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// Import necessary components and classes
import FlowForm, {
  QuestionModel,
  QuestionType,
  ChoiceOption,
} from '@ditdot-dev/vue-flow-form'

export default {
  name: 'BookingForm',
  components: {
    FlowForm,
  },
  data() {
    return {
      submitted: false,
      questions: [
        // QuestionModel array
        new QuestionModel({
          title: 'Service',
          type: QuestionType.MultipleChoice,
          options: [
            new ChoiceOption({
              label: 'Weight Loss',
            }),
            new ChoiceOption({
              label: 'PRP',
            }),
            new ChoiceOption({
              label: 'Botox',
            }),
            new ChoiceOption({
              label: 'Fillers',
            }),
            new ChoiceOption({
              label: 'Hair Loss',
            }),
          ],
        }),
        new QuestionModel({
          title: 'Date',
          type: QuestionType.MultipleChoice,
          options: [
            new ChoiceOption({
              label: 'Today',
            }),
            new ChoiceOption({
              label: 'Tomorrow',
            }),
            new ChoiceOption({
              label: 'Next Week',
            }),
          ],
        }),
      ],
    }
  },
}
</script>

<style>
/* Import Vue Flow Form base CSS */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
/* Import one of the Vue Flow Form CSS themes (optional) */
/* @import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
@import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css';
</style>
