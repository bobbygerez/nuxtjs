<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title><v-btn class="success green--text" outline @click="openNewItem()">New Product</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
         <v-text-field
       v-model="search"
       append-icon="search"
       label="Search user..."
       single-line
       hide-details
       ></v-text-field>
      <v-dialog v-model="newProductDialog" max-width="600px">
        <v-form ref="form" v-model="valid" lazy-validation>
        <v-card class="mb-0 pb-0">
          <v-card-title class="mb-0 pb-0">
            <span class="headline mb-0 pb-0">New Product</span> 
            <v-spacer></v-spacer>
            <v-switch
              :label="'Status'"
              v-model="status"
              class="mb-0 pb-0"
            ></v-switch>
          </v-card-title>
          <v-card-text class="ma-0 pa-0">
            <v-container grid-list-md class="mt-0 pt-0">
              <v-layout wrap class="mt-0 pt-0">
                <v-flex xs12>
                    <search-store></search-store>
                </v-flex>
                <v-flex xs12>
                    <v-select
                      :items="branches"
                      v-model="selectedBranches"
                      label="Select Branch"
                      item-text="name"
                      item-value="id"
                      attach
                      multiple
                      chips
                    >
                      
                    </v-select>
                </v-flex>
                <v-flex xs12>
                  <provinces></provinces>
                </v-flex>
                <v-flex xs12>
                  <cities></cities>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="name" label="Product Name" ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <my-currency-input v-model="price" v-bind:label="'Price'"></my-currency-input>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="qty" label="Qty" type="number"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea v-model="short_desc" label="Short Description" class="ma-0 pa-0"></v-textarea>
                </v-flex>
                <v-flex xs12>
                  <dropzone id="myDropzone" ref="myVueDropzone" :options="options" :destroyDropzone="true"></dropzone>
                </v-flex>
              </v-layout>
            </v-container>
            
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="submit()">Submit</v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="productsData"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.item.name }} </td>
        <td>{{ props.item.item.amount|currency('₱') }}</td>
        <td>{{ props.item.store.name }}</td>
        <td>{{ props.item.branch.name }}</td>
        <td>
          <v-icon>check</v-icon>
        </td>
        <td>{{ props.item.created_at }}</td>
        <td class="justify-center layout px-0">
         <v-tooltip bottom >
          <v-btn slot="activator" icon class="ma-0 pa-0 mt-1" @click="edit(props.item.id)">
            <v-icon color="success">edit</v-icon>
          </v-btn>
          <span>Edit</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" icon class="ma-0 pa-0 mt-1">
            <v-icon color="error">delete</v-icon>
          </v-btn>
          <span>Delete</span>
        </v-tooltip>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="getUsers()">Reload</v-btn>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="page" :length="products.last_page" total-visible="9"></v-pagination>
    </div>
  </div>
</template>
<script>
import Dropzone from 'nuxt-dropzone'
import searchStore from '~/components/autocomplete/search-store'
import myCurrencyInput from '~/components/currency-format/my-currency-input'
import provinces from '~/components/combobox/provinces'
import cities from '~/components/select/cities'
import 'nuxt-dropzone/dropzone.css'
import axios from 'axios'
import _ from 'lodash'
  export default {
    components: {
      Dropzone, searchStore, myCurrencyInput, provinces, cities
    },
    data: () => ({
      
      price: 0,
      qty: '',
      valid: false,
      name: '',
      short_desc: '',
      status:false,
      options: {
        url: process.env.baseApi,
        acceptedFiles: 'image/jpeg, image/jpg, image/png', 
        addRemoveLinks: true,
        dictDefaultMessage: 'Upload Images...',
        maxFilesize: 2, // MB
        dictFileTooBig: 'Maximum file is {{maxFilesize}}.',
        autoProcessQueue: false
      },
      newProductDialog: false,
      userEdit: [],
      selectedUser: '',
      search: '',
      searchUser: [],
      headers: [
        {
          text: 'Name',
          sortable: false,
          value: 'name'
        },
        
        {
          text: 'Price',
          sortable: false,
          value: 'contact'
        },
        { 
          text: 'Store',
          value: 'store', 
          sortable: false 
        },
        {
          text: 'Branch',
          sortable: false,
          value: 'branch'
        },
        {
          text: 'Status',
          sortable: false,
          value: 'status'
        },
        {
          text: 'Created',
          sortable: false,
          value: 'date'
        },
        { 
          text: 'Action',
          value: 'action', 
          sortable: false 
        }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),
    mounted() {
      // Everything is mounted and you can access the dropzone instance
      const instance = this.$refs.myVueDropzone.dropzone
    },
    computed: {
      selectedBranches: {
        get(){
          return this.$store.getters.selectedBranches
        },
        set(val){
          this.$store.dispatch('selectedBranches', val)
        }
      },
      branches: {
        get(){
          return this.$store.getters.branches
        },
        set(val){

        }
      },  
        selectedPage(){
        return this.$store.getters.selectedPage
        },
        page: {
            get(){
              return this.$store.getters.page
            },
            set(val){
              this.$store.dispatch('page', val);
            }
        },
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      newProduct(){
        return this.$store.getters.newProduct
      },
      products(){
        return this.$store.getters.products
      },
      productsData(){
        let products = this.$store.getters.products.data
        return _.values(products)
      }
    },

    watch: {
      search: _.debounce(function(){
            this.searchNewUser()
          }, 500),
      dialog (val) {
        val || this.close()
      },
      'userEdit.firstname': function(val){
        this.userEdit.firstname = val
      },
      'userEdit.lastname': function(val){
        this.userEdit.lastname = val
      },
      'userEdit.email': function(val){
        this.userEdit.email = val
      },
      'userEdit.status': function(val){
        this.userEdit.status = val
      }
    },

    created () {
      this.getItems()
    },

    methods: {
      
      submit () {
        
        if (this.$refs.form.validate()) {
          axios.post( process.env.baseApi + '/items',{
            images: this.$refs.myVueDropzone.getQueuedFiles(),
            name: this.name,
            short_desc: short_desc,
            status:this.status
          })
            .then(res => {
               
              })
          
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      openNewItem(){
        this.newProductDialog = true
      },
      searchNewUser(){
          let data = this
          if (this.search !=null){
            axios.get( process.env.baseApi + '/search-user?search='+this.search)
            .then(res => {
               data.searchUser = res.data.arrayUser
               data.$store.dispatch('users', res.data.users)
              })
          }else{
            this.getUsers()
          }
           
      },
      getItems(){
        let data = this
        axios.get( process.env.baseApi + '/item_info?page='+this.page+'&perPage='+this.selectedPage)
            .then(res => {
                data.$store.dispatch('products', res.data.itemInfo)
              })
      },



      edit(userId) {
       let data = this
       this.dialog = true
        axios.get( process.env.baseApi + '/user/' + userId + '/edit')
            .then(res => {
                data.userEdit = res.data.user
              })
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.newProductDialog = false
      },
      update(userId) {
       let data = this
        axios.put( process.env.baseApi + '/user/' + userId,
          this.userEdit
        )
            .then(res => {
                 data.$store.dispatch('users', res.data.users)
                 data.$store.dispatch('snackbarOptions', {
                  snackbarColor : 'success',
                  snackbarText : 'User Updated Successfully',
                  snackbar: true
                })
              })
        this.dialog = false
      }
    },
    watch: {
      'newProduct.status': function(val){
        this.$store.dispatch('newProductField',{
          field: 'status',
          value: val
        });
      },
      page(){
        this.getItems()
      }
    }
  }
</script>

<style type="text/css">
  #myDropzone .dz-preview .dz-progress {
    opacity: 0;
}
</style>