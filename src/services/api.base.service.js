
import axios from 'axios'
import { TokenStorageService } from './storage/token.storage.service'

/** Define defaults */
axios.defaults.baseURL = process.env.NEXUS_API_URL
axios.defaults.headers['api_version'] = '1.2'

/** Define request interceptor to fetch the token from the storage */
axios.interceptors.request.use(request => {
  let token = TokenStorageService.getToken()
  if (token) {
    request.headers['Authorization'] = `Bearer ${token.code}`
  }

  return request
})

const ApiService = {
  get (resource, params) {
    console.log(params)
    return axios.get(resource, { params: params })
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  },

  /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
  customRequest (data) {
    return axios(data)
  }
}

export { ApiService }
