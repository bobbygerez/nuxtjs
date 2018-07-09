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
    created(){
      
    },
    computed: {
      post(){
        return this.$store.getters.post
      }
    },
    async fetch ({ store, params }) {
      console.log(store)
      let { data } = await axios.get("http://juanmerkado.it.nf/public/api/categories")
      store.commit('post', data)
    }
}
</script>
