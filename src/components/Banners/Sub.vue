<template>
  <v-container fluid px-0 pt-0>
    <v-img
      class="grey darken-1 round"
      height="350"
      :src="require(`@/assets/images/${image}`)">
      <v-layout
        :justify-center="isMobile"
        fill-height align-center
        pa-1 mt-5>
        <v-flex
          xs12 offset-sm1
          class="white--text boxxing"
          :class="{'text-xs-center': isMobile}">
          <h2 class="display-1 font-weight-medium">
            <slot name="title"/>
          </h2>
          <div class="subheading mt-3">
            <slot/>
          </div>
        </v-flex>
      </v-layout>
    </v-img>
  </v-container>
</template>

<script>
export default {
  props: { image: String },
  computed: {
    isMobile() { return this.$vuetify.breakpoint.xsOnly; },
  },
};
</script>

<style lang="scss" scoped>
.boxxing {
  max-width: 420px !important;
}
</style>
