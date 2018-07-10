<template>
  <v-container>
      <h1>{{ sample }}</h1>
       <p>{{ categories }}</p>
  </v-container>
</template>

<script type="text/javascript">
  import axios from 'axios'
  export default {
    data(){
        return {
          sample: 'asdf',
        }
    },
    computed: {
      categories(){
        return this.$store.getters.categories
      }
    }
}
</script>
