<template>
  <v-container grid-list-md pt-4>
    <v-layout column>
      <!-- Current Status Title -->
      <v-flex>
        <div class="mb-2">
          <h2 class="headline font-weight-bold">Space Weather Conditions</h2>
          <div class="subheading">Updated at {{ dateTime }}</div>
        </div>
      </v-flex>
      <!-- Tiles -->
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4 xl3
          v-for="item in subjects" :key="item.name">
          <!-- TODO: Separate card to another component -->
          <v-card
            class="rounded-card"
            max-width="380px">
            <v-img
              :src="require(`@/assets/images/${item.image}`)"
              aspect-ratio="2">
            </v-img>
            <v-card-title primary-title class="p-relative">
              <!-- Adjust btn text and color for active warning -->
              <!-- TODO: When btn was clicked activate dialog for legend -->
              <v-btn
                absolute depressed round
                :color="getIndicatorColor(item.code)"
                class="alert-btn white--text">
                <v-icon
                  v-if="getScale(item.code)"
                  dark class="pr-1">
                  error <!-- Backup: notification_important -->
                </v-icon>
                <v-icon
                  v-else
                  dark class="pr-1">
                  check_circle
                </v-icon>
                No Alert <!-- TODO: Customize text for different alert -->
              </v-btn>

              <div>
                <h2 class="title indigo--text font-weight-bold">{{ item.name }}</h2>
                <div class="pt-2">{{ item.description }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="deep-purple">
                Explore
              </v-btn>
              <v-spacer/>
              <v-btn icon @click="item.show = !(item.show)">
                <v-icon class="temp-fix">info_outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import subjects from '@/assets/context/subjects.json';

export default {
  name: 'space-wx-panel',
  data() {
    return {
      subjects,
      indicators: [
        'green darken-1', 'amber darken-1', 'amber darken-2',
        'orange darken-2', 'deep-orange darken-2', 'deep-orange darken-3',
      ],
    };
  },
  computed: {
    ...mapState([
      'conditions',
    ]),
    dateTime() {
      const { DateStamp, TimeStamp } = this.conditions[0];
      return `
        ${DateStamp}, ${TimeStamp.substr(0, TimeStamp.length - 3)} (UTC)
      `;
    },
    getScale() {
      return code => parseInt(this.conditions[0][code].Scale, 10);
    },
    getIndicatorColor() {
      return code => this.indicators[this.getScale(code)];
    },
  },
};
</script>

<style lang="scss" scoped>
.p-relative {
  position: relative;

  .alert-btn {
    text-transform: none;
    top: -14px;
    right: 8px;
    height: 30px;
    padding: 0 10px 0 4px;
  }
}
</style>
