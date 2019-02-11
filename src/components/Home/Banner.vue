<template>
  <v-container>
    <v-img
      class="grey lighten-2"
      height="580"
      :src="require('@/assets/images/hero.jpg')">
      <v-layout fill-height align-center pa-3>
        <v-flex
          xs10 offset-xs1
          class="white--text">
          <h1 class="display-3 font-weight-light">
            Space Weather
          </h1>
          <div class="subheading pl-2 mb-2">
            Conditions in space that can impact our technological systems
          </div>
          <v-btn dark outline depressed
            color="cyan"
            to="/">
            Discover More
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </v-container>
</template>
