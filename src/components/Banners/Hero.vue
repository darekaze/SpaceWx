<template>
  <v-container fluid px-0 pt-0> <!-- eslint-disable max-len -->
    <!-- desire height is 80vh, then 580 -->
    <v-img
      class="grey darken-1 round"
      height="520"
      :src="require('@/assets/images/hero.jpg')">
      <v-layout fill-height align-center pa-3>
        <v-flex
          xs10 offset-xs1
          class="white--text">
          <h2 class="display-3 font-weight-light">
            {{ $t('space-weather') }}
          </h2>
          <div class="subheading pl-2 mb-2">
            {{ $t('hero-subtitle') }}
          </div>
          <v-btn dark outline depressed
            color="cyan lighten-3"
            @click.stop="$vuetify.goTo('#phenomena')">
            {{ $t('discover-more') }}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </v-container>
</template>

<i18n>
{
  "en": {
    "space-weather": "Space Weather",
    "hero-subtitle": "Conditions in space that can impact our technological systems",
    "discover-more": "Discover More"
  },
  "zh_hk": {
    "space-weather": "太空天氣",
    "hero-subtitle": "太空中影響我們技術系統的氣候",
    "discover-more": "探索更多"
  }
}
</i18n>
