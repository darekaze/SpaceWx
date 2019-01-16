<template>
  <v-container pt-4 grid-list-md>
    <!-- Current Weather header -->
    <v-layout row wrap
      justify-center>
      <v-flex xs12 sm4 xl3
        v-for="i in 3" :key="i">

        <v-card
          class="rounded-card"
          max-width="340px">
          <!-- bind src -->
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="1.9">
            <v-layout
              row fill-height pr-2
              align-end justify-end>
              <!-- Adjust chip text and color for active warning -->
              <v-chip dark color="success" text-color="white">
                <v-avatar>
                  <v-icon>check_circle</v-icon>
                </v-avatar>
                No Alert
              </v-chip>
            </v-layout>
            </v-img>

          <v-card-title>
            <div>
              <!-- Dynamically load headline -->
              <h3 class="headline mb-0">Radiation Storm</h3>
              <div>Sample content here</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="purple">
              Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
// https://services.swpc.noaa.gov/products/noaa-scales.json

export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.rounded-card{
  border-radius: 4px;
  margin: 0px auto;
}
</style>
