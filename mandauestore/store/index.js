import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      base_api: "http://juanmerkado.it.nf/public/api/",
      post: []
    },
    mutations: {
      post(state, payload){
        state.post = payload
      }
    },
    actions: {
      post(store, payload){
        store.commit('post', payload)
      }
    },
    getters: {
      post(state){
        return state.post
      },
      base_api(state){
        return state.base_api
      }
    }
  })
}

export default createStore