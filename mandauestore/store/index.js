import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      base_api: "http://juanmerkado.it.nf/public/api/",
      categories: []
    },
    mutations: {
      categories(state, payload){
        state.categories = payload
      }
    },
    actions: {
      categories(store, payload){
        store.commit('categories', payload)
      }
    },
    getters: {
      categories(state){
        return state.categories
      },
      base_api(state){
        return state.base_api
      }
    }
  })
}

export default createStore