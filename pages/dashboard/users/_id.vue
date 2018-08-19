<template>
	<v-container class="ma-1 pa-1">
      <v-layout wrap justify-center align-center>
        <v-flex xs12 sm12 md12 lg12 xl12 class="pr-2">
         	<v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
              v-model="user.firstname"
              :rules="nameRules"
              :counter="20"
              label="Firstname"
              required
              ></v-text-field>
              <v-text-field
              v-model="user.lastname"
              :rules="nameRules"
              :counter="20"
              label="Lastname"
              required
              ></v-text-field>
              <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="E-mail"
              required
              ></v-text-field>
              <roles></roles>

              
            </v-text-field>
            
            <v-btn color="info" @click="submit">Update</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script type="text/javascript">
	export default {
     data(){
        return {
          valid: false,
           nameRules: [
            v => !!v || 'Name is required',
            ],
            passwordRules: [
              (v) => !!v || 'Password is required',
              ],
            email: '',
            emailRules: [
            v => !!v || 'E-mail is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
             valid: true,
              e1: true,
        }
      },
		middleware: 'auth',
    computed: {
      user(){
        return this.$store.getters.user
      }
    },
    created(){
      this.$store.dispatch('dashboard', true);
    },
    method: {
      submit(){
        
      }
    }
	}
</script>