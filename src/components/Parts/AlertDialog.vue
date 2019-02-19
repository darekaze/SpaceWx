<template>
  <v-dialog
    v-model="dialog"
    max-width="600">
    <v-card>
      <v-img
        :src="require(`@/assets/images/${info.image}`)"
        height="120"
        gradient="to top, rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.05)">
        <v-layout
          align-center justify-center
          fill-height pa-1 mt-3>
          <v-flex xs12 class="text-xs-center white--text">
            <h2 class="headline font-weight-medium">
              {{ info.name }}
            </h2>
            <indicator :scale="condition.scale" :msg="condition.message"/>
          </v-flex>
        </v-layout>
      </v-img>
      <v-card-title>
        <div class="subheading">
          {{ info.description }}
        </div>
        <!-- TODO: Add modified forecast panel here -->
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="null">
          <!-- TODO: Add legend dialog -->
          Legend
        </v-btn>
        <v-btn
          color="green darken-1"
          flat="flat"
          @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  components: {
    Indicator: () => import('@/components/Parts/Indicator.vue'),
  },
  props: {
    info: Object,
    condition: Object,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    display() {
      this.dialog = !this.dialog;
    },
  },
  computed: {
    isMobile() { return this.$vuetify.breakpoint.xsOnly; },
  },
};
</script>
