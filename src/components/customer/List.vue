<template>
  <CustomTable 
    v-bind:fields="fields"
    @fetchData="fetchData"></CustomTable>
</template>
<script>
  import CustomTable from '@/components/CustomTable'
  import { CustomerApiService } from '@/services/nexus.customer.api.service'

  export default {
    name: 'customerList',
    data () {
      return {
        fields: [
          { key: 'customerCode', sortable: true },
          { key: 'created', sortable: true }
        ]
      }
    },
    methods: {
      fetchData (parameters, callback) {
        CustomerApiService.getCustomers(parameters.currentPage, parameters.perPage, parameters.sortDir, parameters.sortBy)
          .then(response => {
            var items = response.data.values.records
            var total = response.data.values.total
            console.log(items)
            callback(items, total)
          })
          .catch(error => {
            console.log(error)
          })
      },
      sortingChanged (ctx) {
        this.sortBy = ctx.sortBy

        if (ctx.sortDesc) {
          this.sortDir = 'Desc'
        } else {
          this.sortDir = 'Asc'
        }

        this.fetchData()
      }
    },
    components: { CustomTable }
}
</script>