<template>
  <v-card flat
    max-width="380px"
    color="#FAFAFA"
    class="round">
    <v-img
      :src="require(`@/assets/images/${item.image}`)"
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
          {{ item.name }}
        </h3>
        <!-- TODO: Add status indicator -->
        <!-- NOTE: Move swiper and indicator to global plugins -->
        <div>{{ condition.message }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'alert-card',
  components: {},
  props: {
    item: Object,
    condition: Object,
  },
  methods: {
    showDialog() {
      this.item.show = !(this.item.show);
      console.log(this.item.show);
    },
  },
  computed: {
    isDesktop() { return this.$vuetify.breakpoint.mdAndUp; },
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
