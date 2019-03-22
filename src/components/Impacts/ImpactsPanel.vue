<template>
  <v-container grid-list-lg pt-3>
    <div class="mb-2">
      <h2 class="headline font-weight-bold">{{ $t('impacts') }}</h2>
      <div class="subheading">{{ $t('impacts-info') }}</div>
    </div>
    <v-layout row wrap justify-start>
      <v-flex xs12 sm6
        v-for="(item, index) in topics" :key="index">
        <topic-card :topic="item" :ratio="17/9"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'impact-panel',
  components: {
    TopicCard: () => import('@/components/Impacts/TopicCard.vue'),
  },
  data() {
    return {
      topics: [
        {
          title: this.$t('epos'),
          image: 'impact_effect.jpg',
          link: { name: 'impacts' },
        },
        {
          title: this.$t('historical-events'),
          image: 'historical_event.jpg',
          link: { name: 'historical-events' },
        },
      ],
    };
  },
};
</script>

<i18n>
{
  "en": {
    "impacts-info": "Discover how space weather affects our lives",
    "epos": "Impacts on People and Systems"
  },
  "zh_hk": {
    "impacts-info": "了解太空天氣如何影響我們的生活",
    "epos": "對人與電子系統的影響"
  },
  "zh_cn": {
    "impacts-info": "了解太空天氣如何影響我們的生活",
    "epos": "對人與電子系統的影響"
  }
}
</i18n>
