<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>All Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-combobox
          v-model="search"
          :items="items"
          class="mt-3"
          prepend-icon="search"
          label="Search user..."
        ></v-combobox>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit User</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="users"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.firstname }} {{ props.item.lastname }}</td>
        <td>{{ props.item.email }}</td>
        <td></td>
        <td></td>
        <td class="justify-center layout px-0">
         <v-tooltip bottom >
          <v-btn slot="activator" icon class="ma-0 pa-0 mt-1" @click="edit(props.item.id)">
            <v-icon color="success">edit</v-icon>
          </v-btn>
          <span>Edit User</span>
        </v-tooltip>

          <v-tooltip bottom>
          <v-btn slot="activator" icon class="ma-0 pa-0 mt-1">
            <v-icon color="orange" >block</v-icon>
          </v-btn>
          <span>Block User</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" icon class="ma-0 pa-0 mt-1">
            <v-icon color="error">delete</v-icon>
          </v-btn>
          <span>Delete User</span>
        </v-tooltip>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="getUsers()">Reload</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    data: () => ({
      search: '',
      dialog: false,
      items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify'
        ],
      headers: [
        {
          text: 'Name',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Email',
          sortable: false,
          value: 'email'
        },
        {
          text: 'Company',
          sortable: false,
          value: 'contact'
        },
        {
          text: 'Contact #',
          sortable: false,
          value: 'contact'
        },
        { 
          text: 'Actions',
          value: 'name', 
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

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      users(){
        return this.$store.getters.users
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.getUsers()
    },

    methods: {
      getUsers(){
        let data = this
        axios.get( process.env.baseApi + '/user')
            .then(res => {
                data.$store.dispatch('users', res.data.users)
              })
      },

      edit(userId) {
       let data = this
       this.dialog = true
        axios.get( process.env.baseApi + '/user/' + userId)
            .then(res => {
               
              })
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>