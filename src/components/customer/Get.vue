<template>
    <div>
        <b-card bg-variant="light" header="Get a Customer by Code">
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
                 <b-btn type="submit" variant="primary">Get</b-btn>
            </b-form>
            <b-card class="mt-3">
              <pre class="m-0">{{ customerJSON }}</pre>
            </b-card>
        </b-card>
    </div>
</template>
<script>
  import { CustomerApiService } from '@/services/nexus.customer.api.service'

  export default {
    name: 'getCustomer',
    data () {
      return {
        form: {
          customerCode: ''
        },
        errorMessage: '',
        customerJSON: ''
      }
    },
    methods: {
      onSubmit (evt) {
        CustomerApiService.getCustomerByCode(this.form.customerCode)
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