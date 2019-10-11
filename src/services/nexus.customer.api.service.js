import { ApiService } from '@/services/api.base.service'

const CustomerApiService = {
  getCustomerByCode (customerCode) {
    return ApiService.get('/customer/' + customerCode)
  },
  createCustomer (customerForm) {
    return ApiService.post('/customer', customerForm)
  },
  getCustomers (page, limit, sortDirection, sortBy) {
    var params = {
      page: page,
      sortDirection: sortDirection,
      sortBy: sortBy,
      limit: limit
    }
    return ApiService.get('/customer', params)
  }
}

export { CustomerApiService }
