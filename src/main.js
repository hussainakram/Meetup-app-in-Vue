import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAS59XZLFDsTnMuRXmRSeVZSdfDeRtHuS0',
      authDomain: 'meetup-app-65a0c.firebaseapp.com',
      databaseURL: 'https://meetup-app-65a0c.firebaseio.com',
      projectId: 'meetup-app-65a0c',
      storageBucket: 'meetup-app-65a0c.appspot.com'
    })
    this.$store.dispatch('loadMeetups')
  }
})
