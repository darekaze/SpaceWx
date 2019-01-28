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
          <v-card class="rounded-card">
            <v-card-title>
              <div>
                <h2 class="subheading indigo--text font-weight-bold">
                  {{ getDate(i) }}
                </h2>
                <!-- Forecast details -->
                <!-- TODO: Design Layout and Refactor -->
                <div>
                  <span>R1-R2 (minor)</span>
                  <v-spacer></v-spacer>
                  <div @click="maaa()" class="rate">
                    <status-indicator positive pulse></status-indicator>
                    {{ conditions[i]['R'].MinorProb }}%
                  </div>
                </div>
                <div>
                  <span>R3-R5 (major)</span>
                  <v-spacer></v-spacer>
                  <div @click="maaa()" class="rate">
                    <status-indicator positive pulse></status-indicator>
                    {{ conditions[i]['R'].MajorProb }}%
                  </div>
                </div>
                <div>
                  <span>S1 or above</span>
                  <v-spacer></v-spacer>
                  <div @click="maaa()" class="rate">
                    <status-indicator positive pulse></status-indicator>
                    {{ conditions[i]['S'].Prob }}%
                  </div>
                </div>
                <div>
                  <span>G Scale</span>
                  <v-spacer></v-spacer>
                  <div @click="maaa()" class="rate">
                    <status-indicator positive pulse></status-indicator>
                    {{ conditions[i]['G'].Scale }}
                  </div>
                </div>

              </div>
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
  name: 'three-day-forecast',
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
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
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
    maaa() {
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
