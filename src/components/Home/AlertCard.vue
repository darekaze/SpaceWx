<template>
  <v-card
    class="rounded-card"
    max-width="380px">
    <v-img
      :src="require(`@/assets/images/${item.image}`)"
      aspect-ratio="2">
    </v-img>
    <v-card-title class="p-relative">
      <!-- TODO: When btn was clicked activate dialog for legend -->
      <v-btn
        v-if="condition"
        @click.stop="showDialog()"
        absolute depressed round
        :color="condition.color"
        class="alert-btn white--text text-capitalize">
        <v-icon dark class="pr-2">{{ condition.icon }}</v-icon>
        {{ condition.message }}
      </v-btn>
      <div>
        <h2 class="title indigo--text font-weight-bold">{{ item.name }}</h2>
        <div class="pt-1">{{ item.description }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="deep-purple">
        Explore
      </v-btn>
      <v-spacer/>
      <v-btn icon @click.stop="showDialog()">
        <v-icon class="temp-fix">info_outline</v-icon>
      </v-btn>
    </v-card-actions>
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
};
</script>

<style lang="scss" scoped>
.p-relative {
  position: relative;
  padding-top: 20px;
  padding-bottom: 12px;

  .alert-btn {
    text-transform: none;
    top: -14px;
    right: 8px;
    height: 30px;
    padding: 0 10px 0 4px;
  }
}
</style>
