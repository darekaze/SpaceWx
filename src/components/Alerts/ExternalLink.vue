<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      target="_blank"
      rel="noopener noreferrer"
      :href="link.url"
      :class="`elevation-${hover ? 4 : 0}`"
      class="round">
      <v-img
        :src="require(`@/assets/images/${link.image}`)"
        :aspect-ratio="6"
        gradient="to top, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.10)">
        <v-layout
          fill-height px-3 py-4
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center">
            {{ link.title }}
          </span>
        </v-layout>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    link: Object,
    ratio: Number,
  },
};
</script>
