<template>
  <v-toolbar
    flat dark absolute
    height="54px"
    :color="headerColor">
    <v-toolbar-title
      v-if="!atHome"
      @click="goHome()"
      class="headline font-weight-light hover-pt">
      {{ $t('space-weather') }}
    </v-toolbar-title>
    <v-spacer/>

    <v-menu offset-y nudge-left="160">
      <v-toolbar-side-icon slot="activator"/>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.name"
          :to="$i18nRoute({ name: item.name })">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            {{ $t(item.name) }}
          </v-list-tile-title>
        </v-list-tile>
        <v-divider class="my-2"/>
        <v-list-tile :to="$i18nRoute({ name: 'home' })">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            {{ $t('home') }}
          </v-list-tile-title>
        </v-list-tile>
        <!-- To kids version -->
        <v-list-tile
          target="_black"
          href="https://kids.weather.gov.hk/V2/education/spacewx4kids/index.html"
          rel="noopener noreferrer">
          <v-list-tile-action>
            <v-icon>child_care</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            {{ $t('kids-version') }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'main-header',
  data: () => ({
    menuItems: [
      {
        name: 'phenomena',
        icon: 'track_changes',
      },
      {
        name: 'impacts',
        icon: 'multiline_chart',
      },
      {
        name: 'historical-events',
        icon: 'timeline',
      },
    ],
  }),
  computed: {
    atHome() {
      return /^\/\w+\/?$/.test(this.$route.path); // match locale route
    },
    headerColor() {
      return this.atHome ? 'transparent' : '#000000a8';
    },
  },
  methods: {
    goHome() { this.$router.push(this.$i18nRoute({ name: 'home' })); },
  },
};
</script>

<style lang="scss" scoped>
.hover-pt {
  cursor: pointer;
}
</style>

<i18n>
{
  "en": {
    "space-weather": "SpaceWeather",
    "home": "Home",
    "phenomena": "Phenomena",
    "impacts": "Impacts",
    "historical-events": "Historical Events",
    "kids-version": "Kids Version"
  },
  "zh_hk": {
    "space-weather": "太空天氣",
    "home": "首頁",
    "phenomena": "現象",
    "impacts": "影響",
    "historical-events": "歷史事件",
    "kids-version": "小童版"
  },
  "zh_cn": {
    "space-weather": "太空天氣",
    "home": "首頁",
    "phenomena": "現象",
    "impacts": "影響",
    "historical-events": "歷史事件",
    "kids-version": "儿童版"
  }
}
</i18n>
