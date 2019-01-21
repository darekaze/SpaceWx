<template>
  <v-footer
    dark height="auto"
    class="mt-3 white--text">
    <v-layout
      justify-start
      row wrap>

      <v-flex
        px-5 pt-4 pb-3 xs12>
        <div class="title">Related Links</div>
      </v-flex>

      <v-flex
        px-5 py-2 xs12 sm6
        v-for="(item, index) in links" :key="index">
        <v-icon small>navigate_next</v-icon>
        {{ item }}
      </v-flex>

      <v-flex
        py-3 xs12
        text-xs-center>
        &copy;2019 — <strong>Hong Kong Observatory</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        'Solar Activity Prediction Center',
        'European Space Weather Portal',
        'UK Met Office',
        'Space Environment Prediction Center',
        'Space Weather Prediction Center (SWPC)',
        'Space Weather Action Center (NASA)',
        'Hong Kong Space Museum',
      ],
    };
  },
};
</script>
