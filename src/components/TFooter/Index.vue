<template>
  <v-footer
    dark height="auto"
    class="mt-3 white--text">
    <v-container py-0>
      <links-panel v-if="atHome"/>
      <v-card flat tile color="transparent">
        <v-divider/>
        <v-card-title class="pl-0 py-2">
          <v-btn dark flat
            class="subheading mx-0 text-capitalize"
            to="#">
            <v-icon class="pr-2">stars</v-icon>{{ $t('acknowledgement') }}
          </v-btn>
          <v-spacer/>
          <div v-if="atHome" class="body-1 text-xs-right">{{ $t('tips') }}</div>
          <div v-else class="text-xs-right">
            &copy;{{ new Date().getFullYear() }} — <strong>{{ $t('hko') }}</strong>
          </div>
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
    "tips": " ",
    "hko": "Hong Kong Observatory",
    "acknowledgement": "Acknowledgement"
  },
  "zh_hk": {
    "tips": "(* 為英文網站)",
    "hko": "香港天文台",
    "acknowledgement": "鳴謝"
  }
}
</i18n>
