<template>
  <v-dialog
    v-model="dialog"
    transition="slide-x-reverse-transition"
    max-width="540">
    <v-card>
      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item small
            v-for="(value, key) in scales[code]" :key="key"
            :color="getColor(value.scale)"
            class="pb-0">
            <v-layout pt-3>
              <v-flex xs4 sm3>
                <!-- <div class="subheading font-weight-bold">{{ key }}</div> -->
                <strong>{{ key }}</strong>
              </v-flex>
              <v-flex>
                <strong>{{ value.intensity }}</strong>
                <div class="body-1" v-html="value.definition"/>
              </v-flex>
            </v-layout>
          </v-timeline-item>

        </v-timeline>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
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
import scales from '@/assets/contexts/scales.json';

export default {
  props: { code: String },
  data: () => ({
    scales,
    dialog: false,
  }),
  methods: {
    getColor,
    display() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
