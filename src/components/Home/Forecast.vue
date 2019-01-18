<template>
  <v-container grid-list-sm>
    <v-layout column>
      <!-- Forecast Title -->
      <v-flex>
        <div class="mb-1">
          <h2 class="headline font-weight-bold">3-Day Forecast</h2>
        </div>
      </v-flex>
      <!-- Tiles -->
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4 xl3
          v-for="i in 3" :key="i">
          <v-card class="rounded-card">
            <v-card-title>
              <div>
                <h2 class="subheading indigo--text font-weight-bold">Date</h2>
                <div>Status</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

    </v-layout>
  </v-container>
</template>

<script>
// https://services.swpc.noaa.gov/products/noaa-scales.json
// TODO: Add axios (Prefer to use vuex to do 1 api call)
export default {
  data() {
    return {
      //
    };
  },
};
</script>
