<template>
  <v-card class="round"
    :to="$i18nRoute({
      name: 'section',
      params: {
        topic: topic.link,
        category: 'phenomena',
      }
    })">
    <v-img
      class="grey round"
      :src="require(`@/assets/images/${topic.image}`)"
      :aspect-ratio="ratio">
      <div class="fill-height gradient-effect">
        <v-layout
          fill-height px-3
          align-center justify-center>
          <span
            v-html="topic.title[lang]"
            class="headline font-weight-light white--text text-xs-center"/>
        </v-layout>
      </div>
    </v-img>
  </v-card>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  props: {
    topic: Object,
    ratio: Number,
  },
  computed: {
    lang() {
      return Trans.currentLanguage;
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient-effect {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05));
  transition: 0.2s;

  &:hover {
    background-color: rgba(28, 251, 195, 0.15);
  }
}
</style>
