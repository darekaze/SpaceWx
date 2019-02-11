<template>
  <v-card>
    <!-- TODO: Bind src -->
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      aspect-ratio="0.88">
      <v-layout fill-height align-center justify-center>
        <span class="headline white--text text-xs-center">
          {{ title }}
        </span>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'topic-card',
  props: {
    title: String,
    image: String,
  },
};
</script>
