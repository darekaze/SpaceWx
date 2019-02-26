<template>
  <v-toolbar
    flat dark absolute
    height="54px"
    :color="headerColor">
    <v-toolbar-title
      v-if="!atHome"
      @click="goHome()"
      class="headline font-weight-light hover-pt">
      Space Weather
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
    atHome() {
      return this.$route.path === '/';
    },
    headerColor() {
      return this.atHome ? 'transparent' : '#000000a8';
    },
  },
  methods: {
    goHome() { this.$router.push('/'); },
  },
};
</script>

<style lang="scss" scoped>
.hover-pt {
  cursor: pointer;
}
</style>
