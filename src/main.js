// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// FONT AWESOME
import FontAwesome from './FontAwesome'

// BOOTSTRAP IMPORT
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { 
				Alert,
				Button,
				Modal } from 'bootstrap-vue/es/components'

// BOOTSTRAP USE
Vue.use(Alert)
Vue.use(Button)
Vue.use(Modal)

// GLOBAL USE
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
