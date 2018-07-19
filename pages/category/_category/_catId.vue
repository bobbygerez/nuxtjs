<template>
  <v-container class="ma-1 pa-1">
      <item-headers v-bind:suffix="categoryName"/>
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
	 import items from '~/components/items/item'
  	import itemHeaders from '~/components/items/item-headers'
	export default {

		middleware: 'category',
		components: {
			items, itemHeaders
		},
		computed: {

			items(){
				return this.$store.getters.items
			},
			page: {
				get(){
					return this.$store.getters.page
				},
				set(val){
					this.$store.dispatch('page', val)
				}
				
			},
			categoryName(){
				return this.$store.getters.categoryName
			}

		}
	}
</script>