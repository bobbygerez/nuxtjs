import axios from 'axios'

export default function ({ store, params }) {

  return axios.get( process.env.baseApi + '/get-items/' + params.catId + '?catId=' + params.catId + '&page=' + store.getters.page + '&perPage=' + store.getters.selectedPage)
        .then(res => {
             store.commit('items', res.data.items)
             store.commit('categoryName', res.data.categoryName)
          })
}