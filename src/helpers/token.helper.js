
const TokenHelper = {
  isTokenExpired (token) {
    let expires = Date.parse(token.expires)
    let now = new Date().valueOf()
    return expires <= now
  },

  createTokenFromUser (user) {
    return {
      'code': user.accessToken,
      'expires': user.expires
    }
  }
}

export { TokenHelper }
