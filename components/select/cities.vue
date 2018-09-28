<template>
  <v-select
    v-model="selectedFruits"
    :items="cities"
    label="Cities"
    item-text="citymunDesc"
    item-value="citymunCode"
    multiple
  >

    <v-list-tile
      slot="prepend-item"
      ripple
      @click="toggle"
    >
      <v-list-tile-action>
        <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">delete</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Select All</v-list-tile-title>
    </v-list-tile>
    <v-divider
      slot="prepend-item"
      class="mt-2"
    ></v-divider>
    <v-divider
      slot="append-item"
      class="mb-2"
    ></v-divider>
    
    <template
      slot="selection"
      slot-scope="{ item, index }"
    >
      <v-chip v-if="index === 0">
        <span>{{ item }}</span>
      </v-chip>
      <span
        v-if="index === 1"
        class="grey--text caption"
      >(+{{ selectedFruits.length - 1 }} others)</span>
    </template>
  </v-select>
</template>
<script>
  export default {
    data: () => ({
      selectedFruits: []
    }),

    computed: {
      likesAllFruit () {
        return this.selectedFruits.length === this.cities.length
      },
      likesSomeFruit () {
        return this.selectedFruits.length > 0 && !this.likesAllFruit
      },
      icon () {
        if (this.likesAllFruit) return 'mdi-close-box'
        if (this.likesSomeFruit) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
      cities(){
        return this.$store.getters.cities
      }
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllFruit) {
            this.selectedFruits = []
          } else {
            this.selectedFruits = this.cities.slice()
          }
        })
      }
    }
  }
</script>