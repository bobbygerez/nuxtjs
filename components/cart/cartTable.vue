<template>
<v-card flat>
 <v-card-text class="hidden-xs-only ma-0 pa-0">
      <v-container class="ma-0 pa-0">
       <v-layout class="text-xs-left ">
        <v-data-table
        v-bind:headers="headers"
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
          <v-btn icon small class="red--text mt-3" @click.native="remove(props.index)">
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
    
</v-layout>
</v-container>
</v-card-text>

<v-card-actions>
<v-spacer></v-spacer>
          <v-btn flat color="orange" @click="$emit('closeCartMenu')">Cancel</v-btn>
          <v-btn flat color="success">Check out</v-btn>
        </v-card-actions>
</v-card>
</v-card>
</template>

<script type="text/javascript">
  export default{
    props: ['item'],
    data: () => ({
      headers: [
      {
        text: 'Image',
        align: 'left',
        sortable: false,
        value: 'img'
      },
      { 
        text: 'Qty', 
        value: 'qty',
        align: 'left',
        sortable: false,
      },
      { 
        text: 'Price', 
        value: 'price',
        align: 'left',
        sortable: false, 
      },
      { 
        text: 'Remove', 
        value: 'remove',
        align: 'left',
        sortable: false, 
      }
      ],
    }),
    computed: {
      cart(){
        return this.$store.getters.cart
      },
      cartTotal(){
        var x = this.cart.map(function(item){
          return item.quantity * parseFloat(item.item.amount)
        })
        if(x.length > 0){
          return x.reduce((a, b)=> a + b)
        }
      }
    },
    methods: {
      remove(key){
        this.$store.dispatch('removeCart', key);
      },
    }
  }
</script>