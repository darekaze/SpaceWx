<template>
  <v-container fluid px-0 pt-0>
    <!-- desire height is 80vh, then 580 -->
    <v-img
      class="grey lighten-2 round"
      height="550"
      :src="require('@/assets/images/hero.jpg')">
      <v-layout fill-height align-center pa-3>
        <v-flex
          xs10 offset-xs1
          class="white--text">
          <h2 class="display-3 font-weight-light">
            Space Weather
          </h2>
          <div class="subheading pl-2 mb-2">
            Conditions in space that can impact our technological systems
          </div>
          <v-btn dark outline depressed
            color="cyan lighten-3"
            @click.stop="$vuetify.goTo('#phenomena')">
            Discover More
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </v-container>
</template>
