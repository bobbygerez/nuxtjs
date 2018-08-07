<template>
  
    <v-flex xs12 sm6 md3 lg3 xl3>
      <v-card 
        hover
        class="ma-1"
        :height="500"
        :to="'/Category/' + slug(item.category.name) + '/'+ slug(item.sub_category.name) + '/' + slug(item.further_category.name) + '/' + slug(item.name) +`/${item.id}`" 
      >
        <v-card-title primary-title>
          <div>
            <div class="title">{{ item.name }}</div>
          </div>
        </v-card-title>
        <v-card-text wrap style='text-align: left;  word-wrap: break-word;'>
          <span v-for="img in item.images">
            <img :src="img.path" class='responsive'/>
          </span>
          <p class="caption"><v-icon>place</v-icon>{{ item.province.provDesc }}, {{ item.city.citymunDesc }}</p>
          <p>{{ item.short_desc| truncate(100) }}</p>
          <h3 class="text-lg-center red--text">{{ item.amount|currency('₱ ') }}</h3>
        </v-card-text>
      </v-card>
    </v-flex>
   
    
</template>

<script>
  export default {
    props: ['item', 'index'],
    data: () => ({
      show: false,
      cardME: "elevation-1"
    }),
    methods: {
      slug(text){
        return this.$slug(text)
      }
    }

    
  }
</script>

<style type="text/css">
  .responsive {
    width: 100%;
    height: auto;
}
</style>