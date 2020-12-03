import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import dateFilter from '@/filters/date.filter'
import currencyFilter from "@/filters/currency.filter"
import localizeFilter from "@/filters/localize.filter"
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import Loader from "@/components/Loader"
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import VueMeta from 'vue-meta'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.component('Paginate', Paginate)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)
Vue.filter('date', dateFilter)
Vue.filter('locale', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

firebase.initializeApp({
  apiKey: "AIzaSyDJSp9SmQfTkmjuEVMpRLWz8znUbCDc6Ko",
  authDomain: "youtoo-5eb03.firebaseapp.com",
  databaseURL: "https://youtoo-5eb03.firebaseio.com",
  projectId: "youtoo-5eb03",
  storageBucket: "youtoo-5eb03.appspot.com",
  messagingSenderId: "672173648218",
  appId: "1:672173648218:web:3080c0d27bb58502d6ab63",
  measurementId: "G-92974RV320"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
