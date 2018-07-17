import axios from 'axios'

export default async function ({context, store, route, redirect, req}) {

 	if (store.getters.token === null) {
 		// return axios.post( process.env.baseApi + '/login',{
 		// 	email: 'superAdmin@juanmerkado.com',
 		// 	password: '12345678'
 		// })
		 //  .then(response => {
		 //      store.dispatch('token', response.data.token)
		 //    })
 	}

}