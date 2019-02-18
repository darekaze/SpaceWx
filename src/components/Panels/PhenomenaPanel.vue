<template>
  <v-container pt-2 id="phenomena">
    <div class="mb-2">
      <h2 class="headline font-weight-bold">Phenomena</h2>
      <div class="subheading">
        Explore various space environments between the Sun and Earth
      </div>
    </div>
    <slider-list :list="phenomena"/>
  </v-container>
</template>

<script>
import phenomena from '@/assets/contexts/phenomena.json';

export default {
  name: 'phenomena-panel',
  components: {
    SliderList: () => import('@/components/Listing/Slider.vue'),
  },
  data: () => ({
    phenomena,
  }),
};
</script>
