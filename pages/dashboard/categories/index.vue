<template>
	<v-container class="ma-1 pa-1">
      <v-layout wrap justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class="pr-2">
         <categories></categories>	
        </v-flex>
      </v-layout>
      <confirm-alert ref="cat" @click="deleteItem()"></confirm-alert>
  </v-container>
</template>

<script type="text/javascript">
import categories from '~/components/data-tables/categories'
import confirmAlert from '~/components/alert/confirm-alert.vue'
import axios from 'axios'
	export default {
      components: { 
        categories, confirmAlert 
      },
      computed: {
        editCategory(){
          return this.$store.getters.editCategory
        }
      },
      methods: {
        deleteItem(){
          let data = this
          
           axios.delete( process.env.baseApi + '/categories/' + this.editCategory.id )
            .then(res => {
               data.$store.dispatch('confirmDeleteDialog', false)
              })
            .catch(function(error){
              data.$store.dispatch('snackbarOptions', {
                  snackbarColor : 'error',
                  snackbarText : 'Unable to delete category. Integrity constraint',
                  snackbar: true
                })
              data.$store.dispatch('confirmDeleteDialog', false)
            })
        }
      }
    }
</script>