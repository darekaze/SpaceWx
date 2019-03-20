<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>{{ $t('phenomena') }}</template>
      <p>{{ $t('ph-info') }}</p>
    </sub-banner>
    <v-container pt-2>
      <slider :list="phenomena" :column="2"/>
    </v-container>
  </div>
</template>

<script>
import phenomena from '@/data/contexts/phenomena.json';

export default {
  name: 'Phenomena',
  components: {
    SubBanner: () => import('@/components/Banners/Sub.vue'),
    Slider: () => import('@/components/Phenomena/Slider.vue'),
  },
  data: () => ({
    phenomena,
  }),
};
</script>

<i18n>
{
  "en": {
    "phenomena": "Phenomena",
    "ph-info": "Explore various space environments between the Sun and the Earth"
  },
  "zh_hk": {
    "phenomena": "現象",
    "ph-info": "探索太陽與地球之間的各種太空環境"
  },
  "zh_cn": {
    "phenomena": "現象",
    "ph-info": "探索太陽與地球之間的各種太空環境"
  }
}
</i18n>
