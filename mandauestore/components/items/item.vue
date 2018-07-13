<template>

    <v-flex xs12 sm6 md3 lg3 xl3>
      <v-card 
        hover
        class="ma-1"
        :height="300"
      >
        <v-card-title primary-title>
          <div>
            <div class="title">{{ item.name }}</div>
             
          </div>
        </v-card-title>
        <v-card-text wrap style='text-align: left;  word-wrap: break-word;'>
          <p>asfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfasdfasfa</p>
          <p color="purple" class="text-lg-center">{{ item.amount|currency('₱ ') }}</p>
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

      productHover(){
        this.cardME = "elevation-6"
      },
      productLeave(){
        this.cardME = "elevation-1"
      }
    }

    
  }
</script>