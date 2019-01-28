<template>
  <v-container grid-list-md pt-4>
    <v-layout column>
      <!-- Current Status Title -->
      <v-flex xs12>
        <div class="mb-2">
          <h2 class="headline font-weight-bold">Space Weather Conditions</h2>
          <div v-if="conditions" class="subheading">Updated at {{ dateTime }}</div>
        </div>
      </v-flex>
      <!-- Tiles -->
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4 xl3
          v-for="item in subjects" :key="item.code">
          <!-- TODO: Separate card to another component (Optional) -->
          <v-card
            class="rounded-card"
            max-width="380px">
            <v-img
              :src="require(`@/assets/images/${item.image}`)"
              aspect-ratio="2">
            </v-img>
            <v-card-title class="p-relative">
              <!-- TODO: When btn was clicked activate dialog for legend -->
              <v-btn
                v-if="conditions"
                absolute depressed round
                :color="getIndicatorColor(item.code)"
                class="alert-btn white--text text-capitalize">
                <v-icon dark class="pr-1">{{ getIcon(item.code) }}</v-icon>
                {{ alertMessage(item.code) }}
              </v-btn>

              <div>
                <h2 class="title indigo--text font-weight-bold">{{ item.name }}</h2>
                <div class="pt-1">{{ item.description }}</div>
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
    getConditionInfo() {
      return code => this.conditions[0][code];
    },
    getIcon() {
      return code => (
        // Backup alert icon: notification_important
        parseInt(this.getConditionInfo(code).Scale, 10)
          ? 'error'
          : 'check_circle'
      );
    },
    getIndicatorColor() {
      return (code) => {
        const { Scale } = this.getConditionInfo(code);
        return this.indicators[Scale];
      };
    },
    alertMessage() {
      return (code) => {
        const { Scale, Text } = this.getConditionInfo(code);
        return parseInt(Scale, 10)
          ? `${code}${Scale} / ${Text}`
          : 'No Alert';
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.p-relative {
  position: relative;
  padding-top: 18px;

  .alert-btn {
    text-transform: none;
    top: -14px;
    right: 8px;
    height: 30px;
    padding: 0 10px 0 4px;
  }
}
</style>
