<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Phenomena</template>
      <p>
        Learn different Space weather phenomena...
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>
    <v-container pt-2>
      <slider :list="phenomena" />
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
