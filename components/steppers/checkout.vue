<template>
  <v-stepper v-model="stepper">
    <v-stepper-header>
      <v-stepper-step :complete="stepper > 1" step="1">Login</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="stepper > 2" step="2">Delivery Information</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="stepper > 3" step="3">Receiver's Map</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Payments</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">

        <v-alert
          :value="true"
          color="error"
          icon="warning"
          outline
        >
          Please login to continue...
        </v-alert>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          flat
          height="300px"
        >
          <v-text-field
            v-model="receiver"
            :rules="[() => !!receiver || 'This field is required']"
            label="Full Name"
            placeholder="Receiver's Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="contactNumber"
            :rules="[() => !!contactNumber || 'This field is required']"
            :mask="'(###) ### - #####'"
            label="Contact Number"
            placeholder="Receiver's Phone number"
            required
          ></v-text-field>
          <v-combobox
          v-model="selectedProvince"
          :items="provinces"
          item-text="provDesc"
          item-value="provCode"
          label="Province"
        ></v-combobox>
        <v-combobox
          v-model="selectedCity"
          :items="cities"
          item-text="citymunDesc"
          item-value="citymunCode"
          label="City"
        ></v-combobox>
                <v-combobox
          v-model="selecteBrgy"
          :items="brgys"
          item-text="brgyDesc"
          item-value="brgyCode"
          label="Barangay"
        ></v-combobox>
        </v-card>

        <v-btn
          color="primary"
          @click="changeStepper(3)"
        >
          Continue
        </v-btn>


       
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="changeStepper(4)"
        >
          Continue
        </v-btn >

        <v-btn flat @click="changeStepper(2)">Back</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="changeStepper(2)"
        >
          Continue
        </v-btn>

        <v-btn flat @click="changeStepper(3)">Back</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  import axios from 'axios'
  export default {
    middleware: ['auth'],
    data () {
      return {
        selecteBrgy: '',
        selectedCity: '',
        selectedProvince: '',
        receiver: '',
        contactNumber: '',
        emailLogin: '',
        passwordLogin: '',
        pass1: false,
        valid: false,
        alertText: '',
        alertLogin: false,
         passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 8 || 'Password must be at least 8 characters'
          ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          ],
      }
    },
    created(){
      this.getProvince()
       this.$store.dispatch('stepper', 2);
    },
    computed: {
      userLogin(){
        return this.$store.getters.userLogin
      },
      stepper: {
        get(){
          return this.$store.getters.stepper
        },
        set(val){
          this.$store.dispatch('stepper', val);
        }
        
      },
      provinces(){
        return this.$store.getters.provinces
      },
      cities(){
        return this.$store.getters.cities
      },
      brgys(){
        return this.$store.getters.brgys
      }
    },
    methods: {
      changeStepper(val){
        this.$store.dispatch('stepper', val);
      },
      getProvince(){
        let data = this
        axios.get( process.env.baseApi + '/get-provinces')
            .then(res => {
                data.$store.dispatch('provinces', res.data.provinces);
              })
      }
    },
    watch: {
      selectedProvince(val){
        let data = this
        axios.get( process.env.baseApi + '/get-cities/' + val.provCode)
            .then(res => {
                data.$store.dispatch('cities', res.data.cities);
              })
      },
      selectedCity(val){
         let data = this
        axios.get( process.env.baseApi + '/get-brgys/' + val.citymunCode)
            .then(res => {
                data.$store.dispatch('brgys', res.data.brgys);
              })
      }
    }
  }
</script>