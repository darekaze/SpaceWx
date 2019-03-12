<template>
  <v-container grid-list-sm pt-2>
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
      <v-flex xs6 sm4 xl3
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
      const { Scale, Text } = this.getCurrentDataByCode(code);
      const sc = parseInt(Scale, 10);
      // ENHANCE: customize message and return scale only if possible
      return {
        scale: sc,
        message: sc ? `${code}${sc} / ${Text}` : 'No Alert',
      };
    },
  },
};
// ENHANCE: Split alert info to json
</script>

<i18n>
{
  "en": {
    "space-wx-conditions": "Space Weather Conditions",
    "updated": "Updated at",
    "source": "Source: Space Weather Prediction Center",
    "china-source": "3-day Space Weather Forecast by National Satellite Meteorological Center",
    "alertsInfo": {
      "R": {
        "name": "Radio Blackout",
        "description": "X-ray and Extreme Ultra Violet radiation from the sun would ionize the sunlit side of Earth, leading to large amount of energy lost as radio waves pass through this region,and cause radio blackout. ",
        "image": "radio_blackout.jpg",
        "code": "R",
        "link": "radio-blackouts"
      },
      "S": {
        "name": "Solar Radiation Storm",
        "description": "When the influx of radiation particle is so intense that it overwhelms the magnetosphere, the charged particles are able to reach deeper down into the atmosphere at the poles, posing threats to astronauts in space, passengers and crews on polar flights and damage electronics on satellites and spacecrafts on the way.",
        "image": "solar_radiation_storm.jpg",
        "code": "S",
        "link": "solar-radiation-storm"
      },
      "G": {
        "name": "Geomagnetic Storm",
        "description": "Coronal mass ejections deposit energy and result in intense currents in the Earth’s magnetosphere. The density of the atmosphere would be inceased. It could cause extra drag on satellites in low-earth orbit, modify the radio signals path or affect the performance of GPS systems.",
        "image": "geomagnetic_storm.jpg",
        "code": "G",
        "link": "geomagnetic-storms"
      }
    }
  },
  "zh_hk": {
    "space-wx-conditions": "太空天氣狀況",
    "updated": "更新時間：",
    "source": "資料來源：美國太空天氣預報中心",
    "china-source": "國家衛星氣象中心未來三天空間天氣預報",
    "alertsInfo": {
      "R": {
        "name": "無線電通信中斷",
        "description": "太陽釋放出來的紫外線輻射和X-射線會把地球上被陽光照射的一面離子化，以至當無線電波通過該區域時，產生大量的能量損失並擾亂地球的電離層，導致無線電通信中斷。",
        "image": "radio_blackout.jpg",
        "code": "R",
        "link": "radio-blackout"
      },
      "S": {
        "name": "太陽輻射風暴",
        "description": "當大量來自太陽的高能量質子輻射流入磁力圈，到磁力圈不能承受時，圈內帶電荷粒子便能進入大氣兩極，途中對衛星、太空人、極地航班的乘客和機組人員或太空船的電子組件等造成影響。",
        "image": "solar_radiation_storm.jpg",
        "code": "S",
        "link": "solar-radiation-storm"
      },
      "G": {
        "name": "地磁風暴",
        "description": "日冕物質拋射的等離子體在地球磁層中產生強烈的電流，扭曲地球磁場，令大氣的密度會增加，影響低地球軌道上的衛星軌道、無線電信號路徑或GPS系統的性能。",
        "image": "geomagnetic_storm.jpg",
        "code": "G",
        "link": "geomagnetic-storm"
      }
    }
  }
}
</i18n>
