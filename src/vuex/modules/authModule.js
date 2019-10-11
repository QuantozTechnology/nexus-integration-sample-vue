import { NexusClientService } from '@/services/nexus.client.service'
import { TokenStorageService } from '@/services/storage/token.storage.service'
import { UserService } from '@/services/storage/user.storage.service'
import { TokenHelper } from '@/helpers/token.helper'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGOUT = 'LOGOUT'

const AuthModule = {
  namespaced: true,
  state: {
    isLoggedIn: !!TokenStorageService.getToken() && !TokenHelper.isTokenExpired(TokenStorageService.getToken()),
    loginError: null,
    loggingIn: false,
    userName: UserService.getUser()
  },
  mutations: {
    [LOGIN] (state) {
      state.loggingIn = true
    },
    [LOGIN_SUCCESS] (state, userName) {
      state.isLoggedIn = true
      state.loggingIn = false
      state.userName = userName
    },
    [LOGIN_FAILURE] (state, errorMessage) {
      state.isLoggedIn = false
      state.loggingIn = false
      state.loginError = errorMessage
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
      state.userName = null
    }
  },
  actions: {
    login ({ commit }, cred) {
      commit(LOGIN)
      return new Promise(function (resolve) {
        setTimeout(() => {
          NexusClientService.createNewToken(cred.clientId, cred.clientSecret)
            .then(function (user) {
              let token = TokenHelper.createTokenFromUser(user)
              TokenStorageService.saveToken(token)
            })
            .then(function () {
              var userName = cred.clientId.substring(0, 5) + '...'
              UserService.saveUser(userName)
              commit(LOGIN_SUCCESS, userName)
              resolve()
            })
            .catch(function () {
              var errorMessage = 'Invalid client credentials.'
              commit(LOGIN_FAILURE, errorMessage)
            })
        }, 1000)
      })
    },
    isAuthenticated ({ state }) {
      let token = TokenStorageService.getToken()
      console.log('first test')
      if (token) {
        console.log('test')
        return state.isLoggedIn && !TokenHelper.isTokenExpired(token)
      } else {
        return false
      }
    },
    logout ({ commit }) {
      TokenStorageService.removeToken()
      UserService.removeUser()
      commit(LOGOUT)
    }
  }
}

export { AuthModule }
