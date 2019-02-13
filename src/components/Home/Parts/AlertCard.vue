<template>
  <v-card flat
    max-width="380px"
    color="#FAFAFA"
    class="round">
    <v-img
      :src="require(`@/assets/images/${image}`)"
      :aspect-ratio="1.9"
      class="round">
    </v-img>
    <v-card-title class="p-relative pl-1">
      <!-- TODO: When btn was clicked activate alert dialog -->
      <v-btn
        v-if="condition"
        @click.stop="showDialog()"
        absolute icon dark
        :large="isDesktop"
        :color="condition.color"
        class="alert-btn">
        <v-icon dark :medium="isDesktop">{{ condition.icon }}</v-icon>
      </v-btn>
      <div>
        <h3 class="subheading indigo--text font-weight-bold">
          {{ title }}
        </h3>
        <div>
          <status-indicator
            pulse positive
            :intermediary="isMinor"
            :negative="isMajor"/>
          <span class="pl-2">{{ condition.message }}</span>
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'alert-card',
  components: {},
  props: {
    title: String,
    image: String,
    condition: Object,
  },
  methods: {
    showDialog() {
      console.log('display dialog');
    },
  },
  computed: {
    isDesktop() { return this.$vuetify.breakpoint.mdAndUp; },
    isMinor() { return this.condition.scale > 0; },
    isMajor() { return this.condition.scale > 2; },
  },
};
</script>

<style lang="scss" scoped>
.p-relative {
  position: relative;
  padding: 6px 4px 8px 4px;

  .alert-btn {
    top: -26px;
    right: 8px;
  }
}
</style>
