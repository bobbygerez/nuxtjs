<template>
  <v-container class="ma-1 pa-1">
      <v-layout class="ma-0 pa-0">
        <v-flex xs12 sm12 md9 lg9 xl9>
          <div class="subheading pl-2 pt-3 text-xs-center">
            <p>Displaying <span class="gray--text">{{ items.from }}</span > out of <span class="gray--text">{{ items.total }}</span> items </p>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md3 lg3 xl3>
          <v-select
                max-height="100"
                label="Items per page"
                persistent-hint
                :items="perPage"
                v-model="selectedPage"
              ></v-select>
          
        </v-flex>
      </v-layout>
      
      <v-divider></v-divider>
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
    return axios.get( process.env.baseApi + '/get-items?page=' + store.getters.page + '&perPage=' + store.getters.selectedPage)
        .then(res => {
             store.commit('items', res.data.items)
          })
  }
  
  export default {
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
      perPage(){
        return this.$store.getters.perPage
      },
      selectedPage: {
        get(){
          return this.$store.getters.selectedPage
        },
        set(val){
          this.$store.dispatch('selectedPage', val);
        }
      },
      items(){
        return this.$store.getters.items
      }
    },
    watch: {
       page(){
          myFetchMethod(this.$store, this.$params)
       },
       selectedPage(){
          myFetchMethod(this.$store, this.$params)
       }
    }
}
</script>

<style type="text/css">
  .gray--text{
    color: gray;
  }
</style>
