<template>
  <v-card
    dark height="auto"
    color="grey darken-4"
    class="mt-3 white--text">
    <v-container py-0>
      <links-panel v-if="atHome"/>
      <v-card flat tile color="transparent">
        <v-divider/>
        <v-card-title class="pl-0 py-2">
          <AckBtn/>
          <v-spacer/>
          <div v-if="atHome" class="body-1 text-xs-right">{{ $t('tips') }}</div>
        </v-card-title>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'main-footer',
  components: {
    LinksPanel: () => import('@/components/TFooter/Links.vue'),
    AckBtn: () => import('@/components/TFooter/AckBtn.vue'),
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
    "tips": " "
  },
  "zh_hk": {
    "tips": "(* 為英文網站)"
  }
}
</i18n>
