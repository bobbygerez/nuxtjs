import axios from 'axios'

export default function ({ store }) {
  return axios.get( process.env.baseApi + '/menu-categories' )
  .then(response => {
      store.dispatch('categories', response.data.categories)
    })
}