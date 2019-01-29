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
      <!-- Cards -->
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4 xl3
          v-for="item in subjects" :key="item.code">
          <alert-card :item="item" :condition="getConditionInfo(item.code)" />
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
  components: {
    AlertCard: () => import('@/components/Home/AlertCard.vue'),
  },
  data() {
    return {
      subjects,
      indicators: [
        'green', 'amber darken-1', 'amber darken-2',
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
  },
  methods: {
    getConditionInfo(code) {
      const { Scale, Text } = this.conditions[0][code];
      const sl = parseInt(Scale, 10);
      return {
        icon: sl ? 'error' : 'check_circle',
        color: this.indicators[sl],
        message: sl ? `${code}${sl} / ${Text}` : 'No Alert',
      };
    },
  },
};
</script>
