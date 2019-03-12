<template>
  <div>
    <sub-banner image="sub_history.jpg">
      <template v-slot:title>{{ $t('historical-events') }}</template>
      <p>{{ $t('historical-events-info') }}</p>
    </sub-banner>
    <event-list :list="histories"/>
  </div>
</template>

<script>
import histories from '@/data/contexts/histories.json';

export default {
  name: 'Historical-events',
  components: {
    SubBanner: () => import('@/components/Banners/Sub.vue'),
    EventList: () => import('@/components/Impacts/EventList.vue'),
  },
  data: () => ({
    histories,
  }),
};
</script>

<i18n>
{
  "en": {
    "historical-events": "Historical Events",
    "historical-events-info": "Discover more about past interesting space weather historical events"
  },
  "zh_hk": {
    "historical-events": "重大的歷史事件",
    "historical-events-info": "瞭解有關過去重大的太空天氣歷史現象"
  }
}
</i18n>
