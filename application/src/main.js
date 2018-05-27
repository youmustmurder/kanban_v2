import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueCookie from 'vue-cookie'

import router from './router'
import('../node_modules/vuetify/dist/vuetify.min.css')
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueCookie)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
