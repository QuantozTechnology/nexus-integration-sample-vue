const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB'

const tabNames = {
  HOME: 'home',
  CUSTOMER: 'customer'
}

const NavigationModule = {
  namespaced: true,
  state: {
    activeTab: tabNames.CUSTOMER
  },
  mutations: {
    [CHANGE_ACTIVE_TAB] (state, activeTab) {
      state.activeTab = activeTab
    }
  },
  actions: {
    changeActiveTab ({ commit }, activeTab) {
      commit(CHANGE_ACTIVE_TAB, activeTab)
    }
  }
}

export { NavigationModule, tabNames }
