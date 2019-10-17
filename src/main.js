import Vue from 'vue'
import VueRouter from "vue-router";
import Vuex from 'Vuex'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  VueRouter,
  Vuex
}).$mount('#app')
