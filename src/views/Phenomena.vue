<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Phenomena</template>
      <p>
        Learn different Space weather phenomena...
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>
    <v-container fill-height pt-2>
      <slider-list :list="phenomena" />
    </v-container>
  </div>
</template>

<script>
import phenomena from '@/assets/contexts/phenomena.json';

export default {
  name: 'Phenomena',
  components: {
    SubBanner: () => import('@/components/Panels/SubBanner.vue'),
    SliderList: () => import('@/components/Listing/Slider.vue'),
  },
  data: () => ({
    phenomena,
  }),
};
</script>
