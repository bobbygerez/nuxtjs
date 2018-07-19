<template>
	<span :class="visibility">
		  <v-btn icon @click="showUserReg">
		    <v-icon>account_circle</v-icon>
		  </v-btn>
		  <v-btn icon>
		  <v-icon>place</v-icon>
		  </v-btn>
		  <v-btn icon v-if="userLogin == true"> 
		    <v-icon >dashboard</v-icon>
		  </v-btn>
		  <v-btn icon v-if="userLogin == true" @click="logoff"> 
		    <v-icon >power_settings_new</v-icon>
		  </v-btn>
		  <v-btn icon @click="showLoginDialog" v-else>
		    <v-icon>lock_outline</v-icon>
		  </v-btn>
	 </span>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default {

		props: ['visibility'],
		computed: {
			loginDialog(){
				return this.$store.getters.loginDialog
			},
			userLogin(){
				return this.$store.getters.userLogin
			}
		},
		methods: {
			showLoginDialog(){
				this.$store.dispatch('loginDialog', true);
			},
			showUserReg(){
				this.$store.dispatch('userReg', true);
			},
			logoff(){

			}
		}
	}

</script>