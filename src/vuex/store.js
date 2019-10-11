import Vue from 'vue'
import Vuex from 'vuex'

import { AuthModule } from './modules/authModule'
import { NavigationModule } from './modules/navModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    'auth': AuthModule,
    'navigation': NavigationModule
  }
})

export { store }
