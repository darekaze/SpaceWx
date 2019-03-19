<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :to="$i18nRoute(topic.link)"
      :class="`elevation-${hover ? 8 : 0}`"
      class="round">
      <v-img
        class="grey darken-1 round"
        :src="require(`@/assets/images/${topic.image}`)"
        :aspect-ratio="ratio">
        <div class="fill-height gradient-effect">
          <v-container fluid fill-height>
            <v-layout fill-height align-center justify-center>
              <span class="headline font-weight-light
                white--text text-xs-center word-break">
                {{ topic.title[lang] || topic.title }}
              </span>
            </v-layout>
          </v-container>
        </div>
      </v-img>
    </v-card>
  </v-hover>
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
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.18));
  transition: 0.2s;

  &:hover {
    background-color: rgba(251, 147, 28, 0.1);
  }
}
.word-break {
  word-break: break-word;
  hyphens: auto;
}
</style>
