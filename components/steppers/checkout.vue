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
       <v-form v-model="validStep" ref="stepper" lazy-validation>
        <v-card
          class="mb-5"
          flat
          height="430px"
        >
          <v-text-field
            v-model="receiver"
            :rules="[() => !!receiver || 'Receiver is required']"
            label="Full Name"
            placeholder="Receiver's Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="contactNumber"
            :rules="[() => !!contactNumber || 'Contact Number is required']"
            :mask="'(###) ### - #####'"
            label="Contact Number"
            placeholder="Receiver's Phone number"
            required
          ></v-text-field>
          <v-combobox
          v-model="selectedProvince"
          :items="provinces"
          :rules="[() => !!selectedProvince || 'Province is required']"
          item-text="provDesc"
          item-value="provCode"
          label="Province"
        ></v-combobox>
        <v-combobox
          v-model="selectedCity"
          :items="cities"
          :rules="[() => !!selectedCity || 'City is required']"
          item-text="citymunDesc"
          item-value="citymunCode"
          label="City"
        ></v-combobox>
          <v-combobox
          v-model="selecteBrgy"
          :items="brgys"
          :rules="[() => !!selecteBrgy || 'Barangay is required']"
          item-text="brgyDesc"
          item-value="brgyCode"
          label="Barangay"
        ></v-combobox>
        <v-textarea
          box
          v-model="streetNo"
          label="Lot No., Street"
          :rules="[() => !!streetNo || 'Street is required']"
        ></v-textarea>
        </v-card>

        <v-btn
          color="primary"
          @click="checkRequired(3)"
        >
          Continue
        </v-btn>

       </v-form>
       
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-5"
          flat
          height="500px"
        >

        <GmapMap
        :center="{lat:12.879721, lng:121.774017}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 500px"
      >
        <GmapMarker
          :position="markersPosition"
          :clickable="true"
          :draggable="true"
          @dragend="dragend($event.latLng)"
          @click="infoWindow.open=true"
        />
        <gmap-info-window
          :position="markersPosition"
          :opened="infoWindow.open"
          @closeclick="infoWindow.open=false">
          <div><strong>{{receiver}}</strong> <br />
          <span>{{contactNumber}}</span><br />
          <span>{{ textBrgy }}</span><br />
          <span>{{ textCity }}, {{ textProvince}} </span>

          </div>
      </gmap-info-window>
      </GmapMap>

        </v-card>

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
          class="mb-1"
          flat
        >
          
           <v-data-table
              v-bind:headers="checkOutHeaders"
              :items="cart"
              hide-actions
              flat
              >
              <template slot="items" slot-scope="props">
                <td class="text-lg-center text-md-center text-sm-center text-xs-center">
                  <v-avatar
                  class="grey lighten-4 ma-1"
                  :size="'70px'"
                  :tile="true"
                  >

                  <img :src="props.item.item.images[0].path" alt="avatar">
                </v-avatar>
                <div >
                  <span  v-for="(color, key) in props.item.item.colors" v-if="color.id === props.item.colorId">
                    {{ color.name}} 
                  </span>
                  <!-- <span v-for="(size, key) in props.item.item.sizes" v-if="size.id === props.item.sizeId">
                    {{ ' - ' + size.name}} 
                  </span> -->
                </div>
              </td>

              <td>{{ props.item.quantity }}</td>
              <td>{{ props.item.item.amount|currency('₱ ') }}</td>
              <td>
                <v-btn icon small class="orange--text mt-3" @click.native="remove(props.index)">
                  <v-icon dark>remove_circle</v-icon>
                </v-btn>
              </td>
            </template>
           <template slot="footer">
            <td>
              &nbsp;
            </td>
            <td class="subheading">
              TOTAL: 
            </td>
            <td class="py-3 subheading">
              {{ cartTotal|currency('₱ ') }}
            </td>
            <td>
              &nbsp;
            </td>
          </template>
          </v-data-table>

        </v-card>

        <v-btn color="primary" @click="changeStepper(3)" >Back</v-btn>
        <span class="pa-3">
            <img :src="paypalImg" width="150" @click="payNow()" >
        </span>
        
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  import axios from 'axios'
  import vue2GoogleMaps from '~/components/google-maps/vue2-google-maps'
  export default {
    middleware: ['auth'],
    data () {
      return {
        paypalImg: '',
        validStep: false,
        infoWindow: {
          open: false,
        },
        markers: [{
            position: {lat: 12.879721, lng: 121.774017}
          }],
        markersPosition: {lat: 12.879721, lng: 121.774017},
        streetNo: '',
        selecteBrgy: '',
        selectedCity: '',
        selectedProvince: '',
        textProvince: '',
        textCity: '',
        textBrgy: '',
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
       this.$store.dispatch('stepper', 4);
       this.paypalImg = process.env.basePublic + '/images/PayPal.jpg'
    },
    components: {
      vue2GoogleMaps
    },
    computed: {

      cartTotal(){
        var x = this.cart.map(function(item){
          return item.quantity * parseFloat(item.item.amount)
        })
        if(x.length > 0){
          return x.reduce((a, b)=> a + b)
        }
      },
      cart(){
        return this.$store.getters.cart
      },
      checkOutHeaders(){
        return this.$store.getters.checkOutHeaders
      },
      merhcantInfo(){

            return "<div>Delivery Information</div>"

      },
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
      remove(key){
        this.$store.dispatch('removeCart', key);
      },
      checkRequired(stepper){
        if(this.$refs.stepper.validate()){
          this.changeStepper(stepper)
        }

      },
      gmapMakerClick(){
        this.infoWinOpen = true
      },
      dragend(latLng){
        this.markersPosition = { lat: latLng.lat(), lng: latLng.lng() };
      },
      changeStepper(val){
        this.$store.dispatch('stepper', val);
      },
      getProvince(){
        let data = this
        axios.get( process.env.baseApi + '/get-provinces')
            .then(res => {
                data.$store.dispatch('provinces', res.data.provinces);
              })
      },
      payNow(){
         let data = this
        axios.post( process.env.baseApi + '/pay-with-credit-card')
            .then(res => {
               
              })
      }
    },
    watch: {
      selectedProvince(val){
        let data = this
        if (val != null) {
          axios.get( process.env.baseApi + '/get-cities/' + val.provCode)
            .then(res => {
                data.$store.dispatch('cities', res.data.cities);
                data.textProvince = res.data.province;
              })
        }
        
      },
      selectedCity(val){
         let data = this
         if (val != null) {
          axios.get( process.env.baseApi + '/get-brgys/' + val.citymunCode)
            .then(res => {
                data.$store.dispatch('brgys', res.data.brgys);
                data.textCity = res.data.city;
              })
        }
        
      },
      selecteBrgy(val){
        let data = this
        if (val != null) {
          axios.get( process.env.baseApi + '/get-selected-brgy/' + val.brgyCode)
            .then(res => {
               data.textBrgy = res.data.brgy;
              })
        }
      }
    }
  }
</script>