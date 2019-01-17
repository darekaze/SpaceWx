<template>
  <v-carousel
    hide-controls
    interval="8000">
    <v-carousel-item
      v-for="item in slides"
      :key="item.title"
      :src="item.src">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex offset-xs1 offset-md0 class="white--text">
            <h3 class="display-2 mb-2">{{ item.title }}</h3>
            <span class="subheading">{{ item.text }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import slides from '@/assets/context/slides.json';

export default {
  data() {
    return {
      // TODO: Add slides and locale, and link to details in json
      slides,
    };
  },
};
</script>
