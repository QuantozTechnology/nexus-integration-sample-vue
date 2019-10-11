<template>
    <b-modal id="login-modal" 
      ref="login-modal"
      hide-footer
      title="Login"
      @hide="checkClosing"
      @show="resetModal">
        <b-alert  v-if="loginError" variant="danger" dismissible show>{{ loginError }}</b-alert>
        <b-alert  v-if="mustLoginIn" variant="warning" dismissible show>Please login in order to proceed.</b-alert>
        <b-form @submit.prevent="onSubmit" @show="true">
          <b-form-group
            id="input-group-1"
            label="Client ID:"
            label-for="client-id"
            description="Unique identifier generated during client creation.">
            <b-form-input
              id="client-id"
              v-model="form.clientId"
              required>
            </b-form-input>
          </b-form-group>

          <b-form-group 
            id="input-group-2" 
            label="Client Secret:" 
            label-for="client-secret"
            description="Password provided during client creation.">
            <b-form-input
              id="client-secret"
              v-model="form.clientSecret"
              type="password"
              required>
            </b-form-input>
          </b-form-group>
          <b-btn type="submit" variant="primary">Login</b-btn>
          <div v-if="loggingIn" class="spinner-border text-primary spinner-border-sm" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </b-form>
    </b-modal>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('auth', ['loggingIn', 'loginError', 'isLoggedIn']),
      ...mapState('nav', ['activeTab'])
    },
    data () {
      return {
        form: {
          clientId: '',
          clientSecret: ''
        },
        mustLoginIn: false
      }
    },
    methods: {
      onSubmit (evt) {
        this.$store.dispatch('auth/login', {
          clientId: this.form.clientId,
          clientSecret: this.form.clientSecret
        }).then(() => {
          this.$nextTick(() => {
            this.$refs['login-modal'].hide()
          })
        })
      },
      resetModal () {
        this.form.clientId = ''
        this.form.clientSecret = ''
      },
      checkClosing (evt) {
        if (this.mustLoginIn) {
          evt.preventDefault()
        }
      },
      showModal () {
        this.$refs['login-modal'].show()
      }
    },
    mounted () {
      // Show login modal if the user is not logged in
      if (!this.$store.state.auth.isLoggedIn) {
        this.mustLoginIn = true
        this.showModal()
      } else {
        this.mustLoginIn = false
      }
    }
  }
</script>