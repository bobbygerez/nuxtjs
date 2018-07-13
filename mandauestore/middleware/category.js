import axios from 'axios'

export default function ({ store, params }) {

  return axios.get( process.env.baseApi + '/get-items/' +  params.catId)
  .then(response => {
      
    })
}