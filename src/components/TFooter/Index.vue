<template>
  <v-footer
    dark height="auto"
    class="mt-3 white--text">
    <v-container py-0>
      <links-panel v-if="atHome"/>
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
export default {
  name: 'main-footer',
  components: {
    LinksPanel: () => import('@/components/TFooter/Links.vue'),
  },
  computed: {
    atHome() {
      return /^\/\w+\/?$/.test(this.$route.path); // match locale route
    },
  },
};
</script>
