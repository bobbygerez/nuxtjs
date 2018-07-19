import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
       reducer: (persistedState) => {
        const stateFilter = Object.assign({}, persistedState)
        const blackList = ['loginDialog', 'userReg']

        blackList.forEach((item) => {
          delete stateFilter[item]
        })

        return stateFilter
      }
  })(store)
}