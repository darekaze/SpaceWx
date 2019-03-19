<template>
  <v-container grid-list-md pt-2>
    <div class="mb-2">
      <h2 class="headline font-weight-bold">
        {{ $t('space-wx-conditions') }}
      </h2>
      <v-layout
        row justify-space-between
        v-if="isInit">
        <div class="subheading">
          {{ `${$t('updated')} ${dateTime}` }}
        </div>
        <div class="font-italic" v-if="$vuetify.breakpoint.smAndUp">
          ({{ $t('source') }})
        </div>
      </v-layout>
    </div>
    <!-- Alert cards -->
    <v-layout
      row wrap justify-center
      v-if="isInit">
      <v-flex xs6 sm4
        v-for="(value, key) in $t('alertsInfo')" :key="key">
        <alert-card
          :info="value"
          :condition="getConditionInfo(key)"/>
      </v-flex>
    </v-layout>
    <!-- Links to NSMC -->
    <external-card :link="chinaLink"/>
  </v-container>
</template>

<script> /* eslint-disable max-len */
import { mapGetters } from 'vuex';

export default {
  name: 'alerts-panel',
  components: {
    AlertCard: () => import('@/components/Alerts/AlertCard.vue'),
    ExternalCard: () => import('@/components/Alerts/ExternalLink.vue'),
  },
  data() {
    return {
      chinaLink: {
        title: this.$t('china-source'),
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
      const scale = parseInt(this.getCurrentDataByCode(code).Scale, 10);
      const message = scale
        ? `${code}${scale} ${this.$t('alert-msg')[code]}`
        : this.$t('no-alert');
      return { scale, message };
    },
  },
};
// ENHANCE: Split alert info to json
</script>

<i18n src="@/data/contexts/alerts.json"></i18n>
<i18n>
{
  "en": {
    "space-wx-conditions": "Space Weather Conditions",
    "updated": "Updated at",
    "source": "Source: Space Weather Prediction Center",
    "china-source": "3-day Space Weather Forecast by National Satellite Meteorological Center",
    "no-alert": "No Alert",
    "alert-msg": {
      "R": "Radio Blackout in force",
      "S": "Solar Radiation Storm in force",
      "G": "Geomagnetic Storm in force"
    }
  },
  "zh_hk": {
    "space-wx-conditions": "太空天氣狀況",
    "updated": "更新時間：",
    "source": "資料來源：美國太空天氣預報中心",
    "china-source": "國家衛星氣象中心未來三天空間天氣預報",
    "no-alert": "無警報",
    "alert-msg": {
      "R": "級別無綫電通訊中斷正在生效",
      "S": "級別太陽輻射風暴正在生效",
      "G": "級別地磁風暴正在生效"
    }
  }
}
</i18n>
