<template>
  <v-container>
      <h1>{{ sample }}</h1>
       <p>{{ post }}</p>
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
      post(){
        return this.$store.getters.post
      }
    }
}
</script>
