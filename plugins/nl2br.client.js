import Vue from 'vue'

Vue.directive('nl2br', {
  inserted: (el) => {
    el.innerHTML = el.textContent.replace(/\n/g, '<br />')
  },
})
