<template>
  <v-layout row wrap py-4 justify-start>
    <v-flex py-3 xs12>
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
</template>

<script>
import links from '@/data/contexts/links.json';

export default {
  data: () => ({ links }),
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
