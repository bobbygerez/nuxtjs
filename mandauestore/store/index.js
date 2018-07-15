import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      snackbarColor: 'success',
      snackbarText: '',
      snackbar: true,
      loginLoader: '',
      loader: false,
      perPage: [12, 16, 20, 24, 28],
      selectedPage: 20,
      page: 1,
      items: [],
      categories: []
    },
    mutations: {
      snackbarColor(state, payload){
        state.snackbarColor = payload
      },
      snackbarText(state, payload){
        state.snackbarText = payload
      },
      snackbar(state, payload){
        state.snackbar = payload
      },
      loginLoader(state, payload){
        state.loginLoader = payload
      },
      loader(state, payload){
        state.loader = payload
      },
      perPage(state, payload){
        state.perPage = payload
      },
      selectedPage(state, payload){
        state.selectedPage = payload
      },
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
      snackbarColor(store, payload){
        store.commit('snackbarColor', payload)
      },
      snackbarText(store, payload){
        store.commit('snackbarText', payload)
      },
      snackbar(store, payload){
        store.commit('snackbar', payload)
      },
      loginLoader(store, payload){
        store.commit('loginLoader', payload)
      },
      loader(store, payload){
        store.commit('loader', payload)
      },
      selectedPage(store, payload){
        store.commit('selectedPage', payload)
      },
      perPage(store, payload){
        store.commit('perPage', payload)
      },
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
      snackbarColor(state){
        return state.snackbarText
      },
      snackbarText(state){
        return state.snackbarText
      },
      snackbar(state){
        return state.snackbar
      },
      loginLoader(state){
        return state.loginLoader
      },
      loader(state){
        return state.loader
      },
      selectedPage(state){
        return state.selectedPage
      },
      perPage(state){
        return state.perPage
      },
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