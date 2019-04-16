<template>
  <v-layout row wrap py-4 justify-start>
    <v-flex py-3 xs12>
      <div class="title">{{ $t('related-links') }}</div>
    </v-flex>
    <v-flex py-2 xs12 sm6
      class="t-hov"
      v-for="(item, index) in $t('links')" :key="index">
      <!-- <v-icon small>navigate_next</v-icon> -->
      <a
        class="c-link"
        target="_blank"
        rel="noopener noreferrer"
        :href="item.url">
        &gt; {{ item.name }}
      </a>
    </v-flex>
  </v-layout>
</template>

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

<i18n src="@/data/contexts/links.json"/>
