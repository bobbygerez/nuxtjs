<template>
  <span class="text-xs-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-x
    >
    

      <v-btn
        icon
        slot="activator"
        dark
      >
      <v-badge :color="'success'" left>
        <span slot="badge">{{ cart.length }}</span>
      </v-badge>

        <v-icon>shopping_cart</v-icon>
      </v-btn>

      <v-card>
        <v-list >
            <cart-table></cart-table>
        </v-list>

      </v-card>
    </v-menu>
  </span>
</template>

<script>
  import cartTable from '~/components/cart/cartTable'
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true
    }),
    components: { cartTable },
    computed: {
      cart(){
        return this.$store.getters.cart
      }
    }
  }
</script>