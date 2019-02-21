<template>
  <v-toolbar
    flat dark absolute
    height="54px"
    :color="headerColor">
    <v-toolbar-title class="headline font-weight-light">
      <!-- TODO: make link to home and hide link in home -->
      <!-- <span>Space Weather</span> -->
    </v-toolbar-title>
    <v-spacer/>
    <v-menu offset-y nudge-left="280">
      <v-toolbar-side-icon slot="activator"/>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.name"
          :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            {{ item.title }}
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
        title: 'Home',
        icon: 'home',
        to: '/',
      },
      {
        title: 'Phenomena',
        icon: 'track_changes',
        to: '/phenomena',
      },
      {
        title: 'Effects on People and System',
        icon: 'multiline_chart', // Backup: new_releases
        to: '/impacts',
      },
      {
        title: 'Historical Events',
        icon: 'timeline',
        to: '/historical-events',
      },
    ],
  }),
  computed: {
    headerColor() {
      return this.$route.path === '/' ? 'transparent' : '#000000a8';
    },
  },
};
</script>
