import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 1,
      items: [],
      categories: []
    },
    mutations: {
      items(state, payload){
        state.items = payload
      },
      page(state, payload){
        state.page = payload
      },
      categories(state, payload){
        state.categories = payload
      }
    },
    actions: {
      items(store, payload){
        store.commit('items', payload)
      },
      page(store, payload){
        store.commit('page', payload)
      },
      categories(store, payload){
        store.commit('categories', payload)
      }
    },
    getters: {
      items(state){
        return state.items
      },
      page(state){
        return state.page
      },
      categories(state){
        return state.categories
      }
    }
  })
}

export default createStore