<template>
  <v-container pt-4 grid-list-md justify-start>
    <v-layout column>
      <!-- Current Status Title -->
      <v-flex>
        <div class="mb-2">
        <h2 class="headline font-weight-bold">Current Status</h2>
        <div class="subheading">Updated at XXX</div>
        <!-- TODO: Add api function to update time -->
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
              :src="item.imageURL"
              aspect-ratio="1.9">
              <v-layout
                row fill-height pr-2
                align-end justify-end>
                <!-- Adjust chip text and color for active warning -->
                <!-- When chip was click activate dialog for legend -->
                <v-chip dark
                  color="success lighten-1"
                  text-color="white"
                  class="pop-out">
                  <v-avatar class="mr-1">
                    <v-icon>check_circle</v-icon>
                  </v-avatar>
                  No Alert
                </v-chip>
              </v-layout>
            </v-img>
            <v-card-title>
              <div>
                <h2 class="title indigo--text font-weight-bold">{{ item.name }}</h2>
                <div>{{ item.description }}</div>
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
// https://services.swpc.noaa.gov/products/noaa-scales.json
// TODO: Add axios
import subjects from '@/assets/context/subjects.json';

export default {
  data() {
    return {
      subjects,
    };
  },
};
</script>

<style lang="scss" scoped>
.rounded-card{
  border-radius: 4px;
  margin: 0px auto;
}

.pop-out {
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
}
</style>
