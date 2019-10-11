<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">Nexus Demo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="isLoggedIn">
        <router-link tag="b-nav-item" class="nav-item" to="customer">Customer</router-link>
        <router-link tag="b-nav-item" class="nav-item" to="account">Account</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em v-if="isLoggedIn">{{ userName }}</em>
            <em v-if="!isLoggedIn">Login</em>
          </template>
          <b-dropdown-item v-if="isLoggedIn" v-on:click="logout">Sign Out</b-dropdown-item>
          <b-dropdown-item v-if="!isLoggedIn" v-b-modal.login-modal>Sign In</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> 
  <Login></Login>
</div>
</template>
<script>
import Vuex from 'vuex'
import Login from './Login'

export default {
  name: 'navigation',
  methods: {
    ...Vuex.mapActions('auth', ['logout'])
  },
  computed: {
    ...Vuex.mapState('auth', ['userName', 'isLoggedIn']),
    ...Vuex.mapState('navigation', ['activeTab'])
  },
  components: { Login }
}
</script>