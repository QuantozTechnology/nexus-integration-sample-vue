const TOKEN_KEY = 'access_token'

const TokenStorageService = {
  getToken () {
    return JSON.parse(localStorage.getItem(TOKEN_KEY))
  },

  saveToken (accessToken) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(accessToken))
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  }
}

export { TokenStorageService }
