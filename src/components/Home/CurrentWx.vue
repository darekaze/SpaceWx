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
          <!-- SUGG: Separate to another component -->
          <v-card
            class="rounded-card"
            max-width="380px">
            <v-img
              :src="require(`@/assets/images/${item.image}`)"
              aspect-ratio="2">
            </v-img>
            <v-card-title primary-title class="p-relative">
              <!-- Adjust btn text and color for active warning -->
              <!-- When btn was click activate dialog for legend -->
              <v-btn
                absolute depressed round
                color="success"
                class="white--text alert-btn">
                <v-icon dark class="pr-1">check_circle</v-icon>
                No Alert
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
  name: 'current-wx',
  data() {
    return {
      subjects,
    };
  },
  computed: {
    ...mapState([
      'conditions',
    ]),
    dateTime() {
      const { DateStamp, TimeStamp } = this.conditions[0];
      return `${DateStamp}, ${TimeStamp} UTC`;
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
