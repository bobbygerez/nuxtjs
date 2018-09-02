<template>
	<v-container class="ma-1 pa-1">
      <v-layout wrap justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class="pr-2">
         <products></products>	
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script type="text/javascript">
import products from '~/components/data-tables/products'
	export default {
      components: { products }
    }
</script>