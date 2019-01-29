<template>
  <v-container grid-list-sm pt-2>
    <v-layout column>
      <!-- Forecast Title -->
      <v-flex xs12>
        <div class="mb-1">
          <h2 class="subheader">3-Day Forecast</h2>
        </div>
      </v-flex>
      <!-- Tiles -->
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4 xl3
          v-for="i in 3" :key="i">
          <!-- TODO: separate into single card component -->
          <v-card class="rounded-card">
            <v-card-title>
              <v-layout row wrap>
                <v-flex xs12 pb-0>
                  <h2 class="subheading indigo--text font-weight-bold">
                    {{ getDate(i) }}
                  </h2>
                  <span class="grey--text text--darken-1">Chance of Occurance</span>
                </v-flex>
                <!-- RB -->
                <v-flex
                  xs6 class="rate"
                  @click="showPopUp()">
                  <div class="text-xs-center">
                    <h4>
                      <status-indicator positive pulse/>
                      <span class="pl-2">R1-R2</span>
                    </h4>
                    <span class="subheading pl-4">
                      {{ conditions[i]['R'].MinorProb }}%
                    </span>
                  </div>
                </v-flex>
                <v-flex
                  xs6 class="rate"
                  @click="showPopUp()">
                  <div class="text-xs-center">
                    <h4>
                      <status-indicator positive pulse/>
                      <span class="pl-2">R3-R5</span>
                    </h4>
                    <span class="subheading pl-4">
                      {{ conditions[i]['R'].MajorProb }}%
                    </span>
                  </div>
                </v-flex>

                <!-- SRS -->
                <v-flex
                  offset-xs0 class="rate"
                  @click="showPopUp()">
                  <div class="text-xs-center">
                    <h4>
                      <status-indicator positive pulse/>
                      <span class="pl-2">S1 or greater</span>
                    </h4>
                    <span class="subheading pl-4">
                      {{ conditions[i]['S'].Prob }}%
                    </span>
                  </div>
                </v-flex>

                <!-- GS -->
                <v-flex
                  offset-xs0 class="rate"
                  @click="showPopUp()">
                  <div class="text-xs-center">
                    <h4>
                      <status-indicator positive pulse/>
                      <span class="pl-2">G-Scale</span>
                    </h4>
                    <span class="subheading pl-4">
                      {{ conditions[i]['G'].Scale }}
                    </span>
                  </div>
                </v-flex>

              </v-layout>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import 'vue-status-indicator/styles.css';
import { StatusIndicator } from 'vue-status-indicator';

export default {
  name: 'forecast-panel',
  components: {
    StatusIndicator,
  },
  computed: {
    ...mapState([
      'conditions',
    ]),
    getDate() {
      return (day) => {
        const date = new Date(this.conditions[day].DateStamp);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
    },
    getScale() {
      return code => parseInt(this.conditions[0][code].Scale, 10);
    },
    getIndicatorColor() {
      return code => this.indicators[this.getScale(code)];
    },
  },
  methods: {
    showPopUp() {
      console.log('asdsad');
    },
  },
};
</script>

<style lang="scss" scoped>
.rate {
  cursor: pointer;
}
</style>
