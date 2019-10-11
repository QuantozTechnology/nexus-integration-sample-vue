<template>
    <div>
        <navigation></navigation>
        <div class="mt-3">
            <b-container fluid>
                <b-row>
                    <b-col cols="4"><createCustomer></createCustomer></b-col>
                    <b-col cols="4"><getCustomer></getCustomer></b-col>
                    <b-col cols="4"><listCustomers></listCustomers></b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
import Navigation from '@/components/Nav'
import GetCustomer from '@/components/customer/Get'
import CreateCustomer from '@/components/customer/Create'
import ListCustomers from '@/components/customer/List'

export default {
  name: 'customer',
  components: { Navigation, GetCustomer, CreateCustomer, ListCustomers }
}
</script>
