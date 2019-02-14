<template>
  <v-carousel
    hide-controls
    height="580"
    interval="8000">
    <v-carousel-item
      v-for="item in slides"
      :key="item.title"
      :src="require(`@/assets/images/${item.image}`)">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs10 sm8 offset-xs1 offset-md0 class="white--text">
            <h3 class="display-2 mb-2">{{ item.title }}</h3>
            <div class="subheading">{{ item.text }}</div>
            <v-btn outline class="mt-3">Discover more</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import slides from '@/assets/contexts/slides.json';

export default {
  data() {
    return {
      // TODO: Add slides and locale, and link to details in json
      slides,
    };
  },
};
</script>

<style lang="scss" scoped>
.t-justify {
  text-align: justify;
  text-justify: inter-word;
}
</style>
