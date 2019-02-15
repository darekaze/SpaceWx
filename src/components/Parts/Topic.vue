<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :to="topic.link"
      :class="`elevation-${hover ? 4 : 0}`"
      class="round">
      <!-- TODO: Gradient hover effect -->
      <v-img
        :src="require(`@/assets/images/${topic.image}`)"
        :aspect-ratio="ratio"
        gradient="to top, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.10)">
        <v-layout
          fill-height pa-3
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center">
            {{ topic.title }}
          </span>
        </v-layout>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'topic-card',
  props: {
    topic: Object,
    ratio: Number,
  },
};
</script>
