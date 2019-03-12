<template>
  <v-footer
    dark height="auto"
    class="mt-3 white--text">
    <v-container py-0>
      <links-panel v-if="atHome"/>
      <v-card flat tile color="transparent">
        <v-divider/>
        <v-card-title class="pl-0 text-xs-center">
          <div>&copy;{{ new Date().getFullYear() }} — <strong>{{ $t('hko') }}</strong></div>
          <v-spacer/>
          <v-btn dark flat to="/acknowledgement">{{ $t('acknowledgement') }}</v-btn>
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

<i18n>
{
  "en": {
    "hko": "Hong Kong Observatory",
    "acknowledgement": "Acknowledgement"
  },
  "zh_hk": {
    "hko": "香港天文台",
    "acknowledgement": "鳴謝"
  }
}
</i18n>
