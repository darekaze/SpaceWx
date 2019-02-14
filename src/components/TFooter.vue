<template>
  <v-footer
    dark height="auto"
    class="mt-3 white--text">
    <v-container pt-2>
      <v-layout justify-start row wrap>
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

        <v-flex
          py-3 mx-1 xs12
          text-xs-center>
          <v-divider/>
          <div class="pt-3">
            &copy;2019 — <strong>Hong Kong Observatory</strong>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import links from '@/assets/contexts/links.json';

export default {
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
