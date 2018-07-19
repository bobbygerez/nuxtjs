import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    
    state: {
      categoryName: '',
      token: null,
      user: {},
      userLogin: false,
      userReg: false,
      loginDialog: false,
      snackbarColor: 'success',
      snackbarText: '',
      snackbar: false,
      loginLoader: '',
      loader: false,
      perPage: [12, 16, 20, 24, 28],
      selectedPage: 20,
      page: 1,
      items: [],
      categories: []
    },
    mutations: {
      categoryName(state, payload){
        state.categoryName = payload
      },
      user(state, payload){
        state.user = payload
      },
      userLogin(state, payload){
        state.userLogin = payload
      },
      token(state, payload){
        state.token = payload
      },
      userReg(state, payload){
        state.userReg = payload
      },
      loginDialog(state, payload){
        state.loginDialog = payload
      },
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
      categoryName(store, payload){
        store.commit('categoryName', payload)
      },
      user(store, payload){
        store.commit('user', payload)
      },
      userLogin(store, payload){
        store.commit('userLogin', payload)
      },
      token(store, payload){
        store.commit('token', payload)
      },
      userReg(store, payload){
        store.commit('userReg', payload)
      },
      loginDialog(store, payload){
        store.commit('loginDialog', payload)
      },
      snackbarColor(store, payload){
        store.commit('snackbarColor', payload)
      },
      snackbarText(store, payload){
        store.commit('snackbarText', payload)
      },
      snackbar(store, payload){
        store.commit('snackbar', payload)
      },
      snackbarOptions(store, payload){
        store.commit('snackbarColor', payload['snackbarColor'])
        store.commit('snackbarText', payload['snackbarText'])
        store.commit('snackbar', payload['snackbar'])
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
      categoryName(state){
        return state.categoryName
      },
       user(state){
        return state.user
      },
      userLogin(state){
        return state.userLogin
      },
      token(state){
        return state.token
      },
      userReg(state){
        return state.userReg
      },
      loginDialog(state){
        return state.loginDialog
      },
      snackbarColor(state){
        return state.snackbarColor
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