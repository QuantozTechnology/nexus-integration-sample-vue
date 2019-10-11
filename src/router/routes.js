import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import CustomerPage from '@/pages/CustomerPage'
import AccountPage from '@/pages/AccountPage'

Vue.use(Router)

// const guard = async (_to, _from, next) => {
//   if (await store.dispatch('auth/isAuthenticated')) {
//     next()
//   }
// }

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerPage
    },
    {
      path: '/account',
      name: 'account',
      component: AccountPage
    }
  ],
  /** Display active tab as a different css tab than the others */
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
