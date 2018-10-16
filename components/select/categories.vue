<template>
	<v-select
	:items="categories"
	v-model="selectedCategory"
	label="Select Category"
	item-text="name"
	item-value="id"
	attach
	chips
	clearable
	>
</v-select>
</template>
<script type="text/javascript">
	
	export default {
		computed: {
			selectedCategory: {
				get(){
					return this.$store.getters.selectedCategory
				},
				set(val){
					this.$store.dispatch('selectedCategory', val)
				}
			},
			categories: {
				get(){
					return this.$store.getters.categories
				}
			}  
		}
	}
</script>