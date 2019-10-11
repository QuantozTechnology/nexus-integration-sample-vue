<template>
  <div>
    <b-table 
        id="item-table"
        striped hover 
        :items="items" 
        :fields="fields"
        :bordered="true"
        :busy="loading"
        :per-page="0"
        :current-page="currentPage"
        @sort-changed="sortingChanged"
        :no-local-sorting=true
        head-variant="dark">
          <div slot="table-busy" class="text-center" variant='dark'>
            <b-spinner class="align-middle"></b-spinner>
          </div>
    </b-table>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-pagination
          v-model="currentPage"
          :total-rows="total"
          :per-page="perPage"
          aria-controls="item-table">
          </b-pagination>
        </b-col>
        <b-col>
          <b-form-select v-model="perPage" :options="perPageOptions" sm></b-form-select>    
        </b-col>
      </b-row>
    </b-container>    
  </div>
</template>
<script>
  export default {
    name: 'customerList',
    data () {
      return {
        loading: true,
        currentPage: 1,
        perPage: 5,
        total: 10,
        perPageOptions: [ 2, 5, 10 ],
        sortBy: null,
        sortDir: 'Desc',
        items: []
      }
    },
    props: {
      fields: Array
    },
    methods: {
      fetchData () {
        var parameters = {
          perPage: this.perPage,
          currentPage: this.currentPage,
          sortDir: this.sortDir,
          sortBy: this.sortBy
        }

        function callback (items, total) {
          this.loading = false
          this.items = items
          this.total = total
        }

        this.$emit('fetchData', parameters, callback)
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
    mounted () {
      this.fetchData()
    },
    watch: {
      currentPage: {
        handler: function () {
          this.fetchData()
        }
      },
      perPage: {
        handler: function () {
          this.fetchData()
        }
      }
    }
  }
</script>