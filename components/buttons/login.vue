<template>
	<span :class="visibility">
		  <v-btn icon @click="showUserReg">
		    <v-icon>account_circle</v-icon>
		  </v-btn>
		  <v-btn icon>
		  <v-icon>place</v-icon>
		  </v-btn>
		  <v-btn icon @click="showLoginDialog">
		    <v-icon>lock_outline</v-icon>
		  </v-btn>
	 </span>
</template>
<script type="text/javascript">
	export default {

		props: ['visibility'],
		computed: {
			loginDialog(){
				return this.$store.getters.loginDialog
			}
		},
		methods: {
			showLoginDialog(){
				this.$store.dispatch('loginDialog', true);
			},
			showUserReg(){
				this.$store.dispatch('userReg', true);
			}
		}
	}

</script>