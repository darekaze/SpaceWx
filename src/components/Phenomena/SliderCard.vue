<template>
  <v-card
    :to="topic.link"
    class="round">
    <v-img
      :src="require(`@/assets/images/${topic.image}`)"
      :aspect-ratio="ratio">
      <div class="fill-height gradient-effect">
        <v-layout
          fill-height px-3
          align-center justify-center>
          <span class="headline font-weight-light white--text text-xs-center">
            {{ topic.title }}
          </span>
        </v-layout>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    topic: Object,
    ratio: Number,
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
