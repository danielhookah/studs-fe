import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import globalMixin from '@/mixins/global-mixin'

import 'animate.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { VueMasonryPlugin } from 'vue-masonry'

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import './common/vee-validate-config'

import 'vue-multiselect/dist/vue-multiselect.min.css'
import Multiselect from 'vue-multiselect'

import './assets/scss/style.scss'

import ApiService from './common/api-service'
import errorHelper from '@/common/error'

import ScrollLoader from 'vue-scroll-loader'

ApiService.init()

Vue.use(ScrollLoader)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMasonryPlugin)
Vue.component('multiselect', Multiselect)
Vue.mixin(globalMixin)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = process.env.NODE_ENV === 'production'
Vue.prototype.$errorHelper = errorHelper

// Vue.config.errorHandler = (err, vm, info) => {
//   errorHelper.handleUndefinedError({ err, vm, info })
// }

window.getCookie = function (name) {
  const value = `; ${document.cookie}`
  console.log(value)
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return false
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// --host 192.168.0.129
