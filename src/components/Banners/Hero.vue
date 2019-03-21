<template>
  <v-container fluid px-0 pt-0>
    <!-- desire height is 80vh, then 580 -->
    <v-img
      class="grey darken-1 round"
      height="360"
      :src="require('@/assets/images/hero.jpg')">
      <v-layout
        mt-5 fill-height
        align-center :justify-center="isMobile">
        <v-flex
          xs12 offset-sm1
          class="white--text boxxing"
          :class="{'text-xs-center': isMobile}">
          <h2 :class="`display-${isMobile ? 2:3} font-weight-light`">
            {{ $t('space-weather') }}
          </h2>
          <div class="subheading mt-2">
            {{ $t('hero-subtitle') }}
          </div>
          <!-- <v-btn dark outline depressed
            color="cyan lighten-3"
            @click.stop="$vuetify.goTo('#phenomena')">
            {{ $t('discover-more') }}
          </v-btn> -->
        </v-flex>
      </v-layout>
    </v-img>
  </v-container>
</template>

<script> /* eslint-disable max-len */
export default {
  computed: {
    isMobile() { return this.$vuetify.breakpoint.xsOnly; },
  },
};
</script>

<style lang="scss" scoped>
.boxxing {
  max-width: 450px !important;
}
</style>

<i18n>
{
  "en": {
    "space-weather": "Space Weather",
    "hero-subtitle": "Changing electromagnetic conditions in near-Earth space caused mainly by the Sun",
    "discover-more": "Discover More"
  },
  "zh_hk": {
    "space-weather": "太空天氣",
    "hero-subtitle": "主要由太陽引起近地太空的電磁狀況",
    "discover-more": "探索更多"
  },
  "zh_cn": {
    "space-weather": "太空天氣",
    "hero-subtitle": "主要由太陽引起近地太空的電磁狀況",
    "discover-more": "探索更多"
  }
}
</i18n>
