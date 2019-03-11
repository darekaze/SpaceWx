<template>
  <div>
    <sub-banner image="sub_impacts.jpg">
      <template v-slot:title>{{ $t('impacts-epos') }}</template>
      <p>{{ $t('impacts-epos-info') }}</p>
    </sub-banner>
    <topic-list :list="impacts" />
  </div>
</template>

<script>
import impacts from '@/data/contexts/impacts.json';

export default {
  name: 'Impacts',
  components: {
    SubBanner: () => import('@/components/Banners/Sub.vue'),
    TopicList: () => import('@/components/Impacts/TopicList.vue'),
  },
  data: () => ({
    impacts,
  }),
};
</script>

<i18n>
{
  "en": {
    "impacts-epos": "Impacts: Effects on People and System",
    "impacts-epos-info": "Discover how space weather affects our lives"
  },
  "zh_hk": {
    "impacts-epos": "對人與電子系統的影響",
    "impacts-epos-info": "瞭解太空天氣如何影響我們的生活"
  }
}
</i18n>
