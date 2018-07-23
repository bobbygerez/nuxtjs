import Vuex from 'vuex'
import _ from 'lodash'
const createStore = () => {
  return new Vuex.Store({
    
    state: {
      colorIds:[],
      cart: [],
      cartQuantity: 0,
      item: {},
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      furtherCategoryName: '',
      subcategoryName: '',
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
      colorIds(state, payload){
        state.colorIds = payload
      },
      cart(state, payload){
        state.cart = payload
      },
      cartQuantity(state, payload){
        state.cartQuantity = payload
      },
      item(state, payload){
        state.item = payload
      },
      email(state, payload){
        state.email = payload
      },
      phone(state, payload){
        state.phone = payload
      },
      jobTitle(state, payload){
        state.jobTitle = payload
      },
      company(state, payload){
        state.company = payload
      },
      lastname(state, payload){
        state.lastname = payload
      },
      middlename(state, payload){
        state.middlename = payload
      },
      firstname(state, payload){
        state.firstname = payload
      },
      furtherCategoryName(state, payload){
        state.furtherCategoryName = payload
      },
      subcategoryName(state, payload){
        state.subcategoryName = payload
      },
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
      cart(store, value){
      var cart = store.state.cart;

        if(_.isEmpty(cart)){
          store.commit('cart', [value]);
        }
        else {
          cart.push(value);
          var newCart = store.state.cart;
          store.commit('cart', newCart);
        }
              
      },
      removeCart(store, delKey){
        var cart = store.state.cart;
        delete cart[delKey]
        var cleanArray = [];
        for(var key in cart){
          if(cart[key] !== null || cart[key] !== undefined){
            cleanArray.push(cart[key])
          }
        }
        store.commit('cart', cleanArray)
      },
      colorIds(store, payload){
        store.commit('colorIds', payload)
      },
      cartQuantity(store, payload){
        store.commit('cartQuantity', payload)
      },
      item(store, payload){
        store.commit('item', payload)
      },
      email(store, payload){
        store.commit('email', payload)
      },
      phone(store, payload){
        store.commit('phone', payload)
      },
      jobTitle(store, payload){
        store.commit('jobTitle', payload)
      },
      company(store, payload){
        store.commit('company', payload)
      },
      lastname(store, payload){
        store.commit('lastname', payload)
      },
      middlename(store, payload){
        store.commit('middlename', payload)
      },
      firstname(store, payload){
        store.commit('firstname', payload)
      },
      furtherCategoryName(store, payload){
        store.commit('furtherCategoryName', payload)
      },
      subcategoryName(store, payload){
        store.commit('subcategoryName', payload)
      },
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
      colorIds(state){
        return state.colorIds
      },
      cart(state){
        return state.cart
      },
      cartQuantity(state){
        return state.cartQuantity
      },
      item(state){
        return state.item
      },
      email(state){
        return state.email
      },
      firstname(state){
        return state.firstname
      },
      middlename(state){
        return state.middlename
      },
      lastname(state){
        return state.lastname
      },
      company(state){
        return state.company
      },
      jobTitle(state){
        return state.jobTitle
      },
      phone(state){
        return state.phone
      },
      furtherCategoryName(state){
        return state.furtherCategoryName
      },
      subcategoryName(state){
        return state.subcategoryName
      },
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