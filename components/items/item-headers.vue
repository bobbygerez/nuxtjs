<template>
  <v-layout class="ma-0 pa-0">
        <v-flex xs12 sm12 md9 lg9 xl9>
          <div class="subheading pl-2 pt-3 text-xs-center">
            <p>Displaying <span class="gray--text">{{ items.from }}</span > to <span class="gray--text">{{ items.to }}</span > out of <span class="gray--text">{{ items.total }}</span> {{ suffix }} </p>
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
</template>
<script type="text/javascript">
  
  export default {
    props: ['suffix'],
    computed: {
      items(){
        return this.$store.getters.items
      },
      perPage(){
        return this.$store.getters.perPage
      },
      selectedPage: {
        get(){
          return this.$store.getters.selectedPage
        },
        set(val){
          this.$store.dispatch('selectedPage',val)
        }
        
      }
    }
  }
</script>