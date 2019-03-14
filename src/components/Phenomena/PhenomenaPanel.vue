<template>
  <v-container pt-2 id="phenomena">
    <div class="mb-2">
      <h2 class="headline font-weight-bold">{{ $t('phenomena') }}</h2>
      <div class="subheading">
        {{ $t('ph-info') }}
      </div>
    </div>
    <slider :list="phenomena"/>
  </v-container>
</template>

<script>
import phenomena from '@/data/contexts/phenomena.json';

export default {
  name: 'phenomena-panel',
  components: {
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
    "ph-info": "Explore various space environments between the Sun and the Earth"
  },
  "zh_hk": {
    "ph-info": "探索太陽與地球之間的各種空間環境"
  }
}
</i18n>
