<template>
  <v-select
    v-model="selectedCities"
    :items="cities"
    label="Barangay"
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
        <v-icon :color="selectedCities.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
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
        <span>{{ item.citymunDesc }}</span>
      </v-chip>
      <span
        v-if="index === 1"
        class="grey--text caption"
      >(+{{ selectedCities.length - 1 }} others)</span>
    </template>
  </v-select>
</template>
<script>
  export default {
    data: () => ({
      selectedCities: []
    }),

    computed: {
      likesAllCities () {
        return this.selectedCities.length === this.cities.length
      },
      likesSomeCities () {
        return this.selectedCities.length > 0 && !this.likesAllCities
      },
      icon () {
        if (this.likesAllCities) return 'indeterminate_check_box'
        if (this.likesSomeCities) return 'check_box_outline_blank'
        return 'check_box_outline_blank'
      },
      cities(){
        return this.$store.getters.cities
      }
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllCities) {
            this.selectedCities = []
          } else {
            this.selectedCities = this.cities.slice()
          }
        })
      }
    }
  }
</script>