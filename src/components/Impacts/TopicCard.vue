<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :to="topic.link"
      :class="`elevation-${hover ? 8 : 0}`"
      class="round">
      <v-img
        :src="require(`@/assets/images/${topic.image}`)"
        :aspect-ratio="ratio">
        <div class="fill-height gradient-effect">
          <v-container fluid fill-height>
            <v-layout fill-height align-center justify-center>
              <span class="headline font-weight-light white--text text-xs-center">
                {{ topic.title }}
              </span>
            </v-layout>
          </v-container>
        </div>
      </v-img>
    </v-card>
  </v-hover>
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
    background-color: rgba(251, 147, 28, 0.1);
  }
}
</style>
