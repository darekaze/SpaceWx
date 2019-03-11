<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :to="value.link"
      :class="`elevation-${hover ? 8 : 0}`"
      tile dark>
      <v-img
        class="grey darken-1"
        :src="require(`@/assets/images/${value.image}`)"
        :aspect-ratio="1.2">
        <div class="fill-height gradient-effect">
          <v-layout
            fill-height wrap
            text-xs-right ma-0>
            <v-flex xs12>
              <v-chip
                label
                class="mx-0 mb-2 body-2"
                color="blue-grey darken-2"
                text-color="white"
                small>
                {{ value.year }}
              </v-chip>
              <h3 class="title font-weight-bold mb-2 e-title">
                {{ value.title[lang] }}
              </h3>
              <div class="body-1 e-subheading">
                {{ value.subheading[lang] }}
              </div>
            </v-flex>
            <v-flex align-self-end>
              <v-chip
                class="ma-0 text-uppercase font-weight-medium"
                color="cyan darken-2"
                label small>
                {{ $t('read-more') }}
              </v-chip>
            </v-flex>
          </v-layout>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
import { Trans } from '@/plugins/i18n';

export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
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
    background-color: rgba(86, 255, 232, 0.1);
  }
}
.e-title {
  margin-left: auto;
  margin-right: 0;
  width: 70%;
}
.e-subheading {
  margin-left: auto;
  margin-right: 0;
  width: 66%;
}
</style>

<i18n>
{
  "en": {
    "read-more": "Read more"
  },
  "zh_hk": {
    "read-more": "瞭解更多"
  }
}
</i18n>
