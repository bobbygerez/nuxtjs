import axios from 'axios'

export default function ({ store }) {

  return axios.get('http://localhost/estoreapi/public/api/menu-categories')
  .then(response => {
      store.dispatch('post', response.data.categories)
    })
}