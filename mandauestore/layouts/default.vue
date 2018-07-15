<template>
  <v-app id="inspire">
    <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app
    >
    <v-list>
      <v-list-tile :to="'/'">
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-group
      v-for="(category, x) in categories"
      :key="x"
      >
      <v-list-tile slot="activator" :to="'/' + slug(category.name) +`/${category.id}`">
        <v-list-tile-title>{{ category.name }}</v-list-tile-title>
      </v-list-tile>
      
      <v-list-group
      no-action
      sub-group
      v-for="(subcategory, i) in category.subcategories"
      :key="i"
      >
      <v-list-tile slot="activator" :to="'/' + slug(category.name) + '/'+ slug(subcategory.name) + `/${subcategory.id}`">
        <v-list-tile-title>{{ subcategory.name }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile
      v-for="(furtherCat, i) in subcategory.further_categories"
      :key="i"
      :to="'/' + slug(category.name) + '/'+ slug(subcategory.name) + '/' + slug(furtherCat.name) +`/${furtherCat.id}`"
      >
      <v-list-tile-title>{{ furtherCat.name }}</v-list-tile-title>
    </v-list-tile>
  </v-list-group>

</v-list-group>
</v-list>
</v-navigation-drawer>
<v-toolbar
:clipped-left="$vuetify.breakpoint.lgAndUp"
color="blue darken-3"
dark
app
fixed
>
<v-toolbar-title style="width: 300px" class="ml-0 pl-3">
  <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  <span class="hidden-sm-and-down">Juan Merkado</span>
  <span class="hidden-md-and-up">
  <v-btn icon>
  <v-icon>place</v-icon>
  </v-btn>
  <v-btn icon>
    <v-icon>lock_outline</v-icon>
  </v-btn>
  </span>
</v-toolbar-title>
<span class="hidden-sm-and-down">
  <v-btn icon>
  <v-icon>place</v-icon>
  </v-btn>
  <v-btn icon @click="loginDialog=true">
    <v-icon>lock_outline</v-icon>
  </v-btn>
  </span>

<v-spacer></v-spacer>
<v-autocomplete
      prepend-icon="search"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      v-model="select"
      cache-items
      class="mx-3"
      flat
      hide-no-data
      hide-details
      label="Search Product..."
      solo-inverted
    ></v-autocomplete>
</v-toolbar>
<v-content>
  <nuxt/>
</v-content>
<v-btn
fab
bottom
right
color="pink"
dark
fixed
@click.stop="dialog = !dialog"
>
<v-icon>account_circle</v-icon>
</v-btn>
<v-dialog v-model="dialog" width="800px">
  <v-card>
    <v-card-title
    class="grey lighten-4 py-4 title"
    >
    Create contact
  </v-card-title>
  <v-container grid-list-sm class="pa-4">
    <v-layout row wrap>
      <v-flex xs12 align-center justify-space-between>
        <v-layout align-center>
          <v-avatar size="40px" class="mr-3">
            <img
            src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
            alt=""
            >
          </v-avatar>
          <v-text-field
          placeholder="Name"
          ></v-text-field>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <v-text-field
        prepend-icon="business"
        placeholder="Company"
        ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field
        placeholder="Job title"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
        prepend-icon="mail"
        placeholder="Email"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
        type="tel"
        prepend-icon="phone"
        placeholder="(000) 000 - 0000"
        mask="phone"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
        prepend-icon="notes"
        placeholder="Notes"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
  <v-card-actions>
    <v-btn flat color="primary">More</v-btn>
    <v-spacer></v-spacer>
    <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
    <v-btn flat @click="dialog = false">Save</v-btn>
  </v-card-actions>
</v-card>
</v-dialog>
<v-dialog v-model="loginDialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Sign-in
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
        <v-form v-model="valid" ref="login" lazy-validation>
           <v-alert :value="alertLogin" outline color="error" icon="warning" dismissible @click="alertLogin = false">
            {{ alertText }}
          </v-alert>
          <v-layout row wrap>
                <v-flex xs12 lg12 sm12 md 12 lx12>
                  <v-text-field
                    append-icon="mail"
                    placeholder="Email"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 lg12 sm12 md 12 lx12>

                  <v-text-field
                  v-model="password"
                  :append-icon="e1 ? 'visibility_off' : 'visibility'"
                  :rules="passwordRules"
                  :type="e1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  @click:append="e1 = !e1"
                ></v-text-field>
                </v-flex>
          </v-layout>
         </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="loginDialog = false">Cancel</v-btn>
          <v-btn flat @click="signin">Sign-in</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <login-loader></login-loader>
    <main-snackbar></main-snackbar>
</v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  import loginLoader from '~/components/loader/login-loader.vue'
  import mainSnackbar from '~/components/snackbar/main-snackbar.vue'
  import axios from 'axios'
  export default {
   data(){
    return {
      password: '',
      valid: false,
      alertText: '',
      alertLogin: false,

      e1: false,
      email: '',
       passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be at least 8 characters'
        ],
      emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      loginDialog: false,
      dialog: false,
      drawer: true,
      loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming'
        ]
    }
  }, 
  props: {
    source: String
  },
  components: {
    loginLoader, mainSnackbar
  },
  computed: {
     ...mapGetters([
      'categories',
      'loader',
      'loginLoader',
      'snackbar'
    ]),
  },
  methods: {
    slug(text){
      return this.$slug(text)
    },
    querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    signin(){
       var data = this
          if(this.$refs.login.validate()){
              this.$store.dispatch('loaderMessage', 'Logging in...')
              this.$store.dispatch('loader', true) 
              axios.post(process.env.baseApi + 'login',{
                email: this.email,
                password: this.password
              }).then((res)=>{

                  localStorage.setItem('tokenKey', res.data.token)
                  data.$store.dispatch('authUser', res.data.user)
                  data.$store.dispatch('userLogin', true)
                  window.localStorage.setItem('userLogin', true)
                  window.localStorage.setItem('roles', res.data.roles)
                  data.dialog = false

                  data.$store.dispatch('snackbarText', 'You have successfully sign-in!')
                  data.$store.dispatch('snackbarColor', 'success')
                  data.$store.dispatch('snackbar', true)
                  data.$store.dispatch('loader', false) 

              })
              .catch(function(error){
                data.alertText = error.response.data
                data.alertLogin = true
                data.$store.dispatch('loader', false) 
              })
          }
    }
     
  },
   watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      }
    }
}
</script>