import axios from 'axios'

export default async function ({context, store, route, redirect, req}) {

	var token = store.getters.token;
 	if (token != null) {
 		return axios.get( process.env.baseApi + '/auth/user?token=' + token)
		  .then(response => {
		      store.dispatch('userLogin', response.data.user)
		    })
		  .catch(function(error){

		  	  store.dispatch('snackbarText', 'Login expired...')
              store.dispatch('snackbarColor', 'error')
              store.dispatch('snackbar', true)
		  })
 	}

}