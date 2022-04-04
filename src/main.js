import Vue from 'vue'
import App from './App.vue'

/* FONTAWESOME ICONS IMPORT */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faTrophy, faBoltLightning, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* FONTAWESOME ICONS LIBRARY FUNCTIONS*/
library.add(faMagnifyingGlass, faTrophy, faBoltLightning, faQuestion)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')