<template>
  <v-container class="ma-1 pa-1">
      <v-layout class="ma-0 pa-0">
        <v-flex>
          <h1>Items</h1>
        </v-flex>
      </v-layout>
      <v-layout wrap class="ma-0 pa-0" justify-center align-center>
           <items v-bind:item="item" v-bind:index="i" v-for="(item, i) in items.data" :key="i"></items>
      </v-layout>
      <v-layout>
        <v-flex>
          <div class="text-xs-center pt-2">
          <v-pagination v-model="page" :length="items.last_page" total-visible="9"></v-pagination>
          </div>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import items from '~/components/items/item'
  function myFetchMethod(store, params){
    return axios.get( process.env.baseApi + '/get-items?page=' + store.getters.page)
        .then(res => {
             store.commit('items', res.data.items)
          })
  }
  export default {
    data(){
        return {
          
        }
    },
    created(){
      this.$store.dispatch('page', 1);
    },
    fetch ({ store, params }) {
      return myFetchMethod(store, params)
    },
    components: {
      items
    },
    computed: {
      categories(){
        return this.$store.getters.categories
      },
      page: {
        get(){
          return this.$store.getters.page
        },
        set(val){
          this.$store.dispatch('page', val)
        }
        
      },
      items(){
        return this.$store.getters.items
      }
    },
    watch: {
       page(){
          myFetchMethod(this.$store, this.$params)
       }
    }
}
</script>
