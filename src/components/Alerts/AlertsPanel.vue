<template>
  <v-container grid-list-sm pt-2>
    <div class="mb-2">
      <h2 class="headline font-weight-bold">Space Weather Conditions</h2>
      <v-layout
        row justify-space-between
        v-if="isInit">
        <div class="subheading">Updated at {{ dateTime }}</div>
        <div class="font-italic" v-if="$vuetify.breakpoint.smAndUp">
          (Source: Space Weather Prediction Center)
        </div>
      </v-layout>
    </div>
    <v-layout
      row wrap justify-center
      v-if="isInit">
      <!-- Alert cards -->
      <v-flex xs6 sm4 xl3
        v-for="item in subjects" :key="item.code">
        <alert-card
          :info="item"
          :condition="getConditionInfo(item.code)"/>
      </v-flex>
    </v-layout>
    <!-- Links to NSMC -->
    <external-card :link="chinaLink"/>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import subjects from '@/assets/contexts/subjects.json';

export default {
  name: 'alerts-panel',
  components: {
    AlertCard: () => import('@/components/Alerts/AlertCard.vue'),
    ExternalCard: () => import('@/components/Alerts/ExternalLink.vue'),
  },
  data() {
    return {
      subjects,
      chinaLink: {
        title: '3-day Space Weather Forecast by National Satellite Meteorological Center',
        image: 'satellite.jpg',
        url: 'http://www.nsmc.org.cn/NSMC/Channels/SpaceWeather.html',
      },
    };
  },
  computed: {
    ...mapGetters([
      'isInit',
      'getCurrentDataByCode',
      'getDate',
    ]),
    dateTime() {
      const { DateStamp, TimeStamp } = this.getDate(0);
      return `
        ${DateStamp}, ${TimeStamp.substr(0, TimeStamp.length - 3)} (UTC)
      `;
    },
  },
  methods: {
    getConditionInfo(code) {
      const { Scale, Text } = this.getCurrentDataByCode(code);
      const sc = parseInt(Scale, 10);
      return {
        scale: sc,
        message: sc ? `${code}${sc} / ${Text}` : 'No Alert',
      };
    },
  },
};
</script>
