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
      <v-card-title class="pt-2">
        <v-layout column fill-height wrap px-3>
          <v-flex xs12 class="pt-1">
            <div class="subheading">
              {{ info.description }}
            </div>
          </v-flex>

          <v-flex xs12>
            <!-- TODO: apply alert content and separate as component -->
            <v-alert
              :value="false"
              icon="priority_high"
              :color="getColor(condition.scale)"
              class="border-lint mt-3">
              {{ condition.message }}
            </v-alert>
          </v-flex>

        <!-- TODO: Add modified forecast panel here -->
        <forecast-panel :code="info.code"/>

        </v-layout>
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          flat="flat"
          to="#">
          Learn more
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
import getColor from '@/helpers/indicatorColor';

export default {
  components: {
    Indicator: () => import('@/components/Parts/Indicator.vue'),
    ForecastPanel: () => import('@/components/Listing/Forcast.vue'),
  },
  props: {
    info: Object,
    condition: Object,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    getColor,
    display() {
      this.dialog = !this.dialog;
    },
  },
  computed: {
    isMobile() { return this.$vuetify.breakpoint.xsOnly; },
  },
};
</script>

<style lang="scss" scoped>
.border-lint {
  // HACK: Workaround
  border-color: rgba(0,0,0,0.18) !important;
}
</style>
