<template>
  <v-layout class="ma-0 pa-0 pr-1">
        <v-flex xs12 sm12 md1 lg1 xl1>
            <v-btn icon @click="showStoreLocation" >
              <v-icon >place</v-icon>
            </v-btn>

        </v-flex>
        <v-flex xs12 sm12 md8 lg8 xl8>
          <div class="subheading pl-2 pt-3 text-xs-center">
            <p>Displaying <span class="gray--text">{{ items.from }}</span > to <span class="gray--text">{{ items.to }}</span > out of <span class="gray--text">{{ items.total }}</span> {{ suffix }} </p>
          </div>
        </v-flex>
        <!-- <v-combobox
          v-model="selectedProvince"
          prepend-icon="place"
          :items="provinces"
          item-text="provDesc"
          item-value="provCode"
          label="Select Province"
          chips
          deletable-chips
        ></v-combobox> -->
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
    middleware: ['provinces'],
    computed: {
      selectedProvince: {
        get(){
          return this.$store.getters.selectedProvince
        },
        set(val){
           this.$store.dispatch('selectedProvince',val)
        }
        
      },
      provinces(){
        return this.$store.getters.provinces
      },
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
    },
    methods: {
      showStoreLocation(){
        this.$store.dispatch('storeLocation', true);
      }
    }
  }
</script>