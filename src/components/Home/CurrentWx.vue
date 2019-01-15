<template>
  <div class="mt-4">
    <v-layout row>
      <v-flex
        xs12 sm6 md4 lg3
        offset-sm1>
        <v-card class="rounded-card">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              Kangaroo Valley Safari
            </h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

          <v-card-actions>
            <v-btn flat>
              Share
            </v-btn>
            <v-btn
              flat
              color="purple"
            >
              Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
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
}
</style>
