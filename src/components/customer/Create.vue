<template>
    <div>
        <b-card bg-variant="light" header="Create a new Customer">
            <b-alert  v-if="errorMessage" variant="danger" dismissible show>{{ errorMessage }}</b-alert>
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label="Customer Code:"
                    label-for="customer-code"
                    description="Unique identifier provided during creation.">
                    <b-form-input
                    id="customer-code"
                    v-model="form.customerCode"
                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-2"
                    label="Currency Code:"
                    label-for="currency-code"
                    description="ISO 4217 currency code the customer will buy and sell crypto currency in.">
                    <b-form-input
                    id="currency-code"
                    v-model="form.currencyCode"
                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-3"
                    label="Trustlevel:"
                    label-for="trustlevel"
                    description="Risk limit of the customer.">
                    <b-form-input
                    id="trustlevel"
                    v-model="form.trustLevel"
                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-4"
                    label="Status:"
                    label-for="status"
                    description="Activation status of the customer.">
                    <b-form-input
                    id="status"
                    v-model="form.status"
                    required>
                    </b-form-input>
                </b-form-group>
                <b-btn type="submit" variant="primary">Create</b-btn>
            </b-form>
        </b-card>
    </div>
</template>
<script>
  import { CustomerApiService } from '@/services/nexus.customer.api.service'

  export default {
    name: 'createCustomer',
    data () {
      return {
        form: {
          customerCode: '',
          currencyCode: 'EUR',
          trustLevel: 'Trusted',
          status: 'ACTIVE'
        },
        errorMessage: '',
        customerJSON: ''
      }
    },
    methods: {
      onSubmit (evt) {
        CustomerApiService.createCustomer(this.form)
          .then(response => {
            this.customerJSON = JSON.stringify(response.data, null, 1)
          })
          .catch(error => {
            this.errorMessage = error.response.data.message
          })
      }
    }
  }
</script>

