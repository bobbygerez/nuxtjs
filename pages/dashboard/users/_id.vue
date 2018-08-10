<template>
	<v-container class="ma-1 pa-1">
      <v-layout wrap justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class="pr-2">
         	<h3>Users</h3>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script type="text/javascript">
	export default {
		middleware: 'auth'
	}
</script>