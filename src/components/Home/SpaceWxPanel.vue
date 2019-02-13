<template>
  <v-container grid-list-sm pt-2>
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
        <v-flex xs6 sm4 xl3
          v-for="item in subjects" :key="item.code">
          <alert-card :item="item" :condition="getConditionInfo(item.code)" />
        </v-flex>
      </v-layout>

      <v-flex xs12>
        <external-card :link="chinaLink"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import subjects from '@/assets/context/subjects.json';

export default {
  name: 'space-wx-panel',
  components: {
    AlertCard: () => import('@/components/Home/Parts/AlertCard.vue'),
    ExternalCard: () => import('@/components/Home/Parts/ExternalLink.vue'),
  },
  data() {
    return {
      subjects,
      indicators: [
        'green', 'amber darken-1', 'amber darken-2',
        'orange darken-2', 'deep-orange darken-2', 'deep-orange darken-3',
      ],
      chinaLink: {
        title: '3-day Space Weather Forecast by National Satellite Meteorological Center',
        image: 'satellite.jpg',
        url: 'http://www.nsmc.org.cn/NSMC/Channels/SpaceWeather.html',
      },
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
        icon: sl ? 'notifications_active' : 'notifications',
        color: this.indicators[sl],
        message: sl ? `${code}${sl} / ${Text}` : 'No Alert',
      };
    },
  },
};
</script>
