<template>
  <v-footer
    dark height="auto"
    class="mt-3 white--text">
    <v-container pt-3 pb-0>
      <v-layout row wrap pb-4 justify-start>
        <v-flex pt-4 pb-3 xs12>
          <div class="title">Related Links</div>
        </v-flex>
        <v-flex py-2 xs12 sm6
          class="t-hov"
          v-for="(item, index) in links" :key="index">
          <v-icon small>navigate_next</v-icon>
          <a
            class="c-link"
            target="_blank"
            rel="noopener noreferrer"
            :href="item.url">
            {{ item.name }}
          </a>
        </v-flex>
      </v-layout>
      <!-- HACK: text should be center, need to optimize for mobile -->
      <v-card flat tile color="transparent">
        <v-divider/>
        <v-card-title class="pl-0 text-xs-center">
          <div>&copy;2019 — <strong>Hong Kong Observatory</strong></div>
          <v-spacer/>
          <v-btn small dark flat to="/acknowledgement">Acknowledgement</v-btn>
        </v-card-title>
    </v-card>

    </v-container>
  </v-footer>
</template>

<script>
import links from '@/data/contexts/links.json';

export default {
  name: 'main-footer',
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-link {
  text-decoration: none;
  color: #fff;
  transition:all 0.2s ease;

  &:hover {
    color: #b9b9b9;
  }
}
</style>
