<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Phenomena</template>
      <p>
        Learn different Space weather phenomena...
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>
    <!-- TODO: Separate panel and phenomena -->
    <phenomena-slider/>
  </div>
</template>

<script>
export default {
  name: 'phenomena',
  components: {
    SubBanner: () => import('@/components/Panels/SubBanner.vue'),
    PhenomenaSlider: () => import('@/components/Panels/PhenomenaSlider.vue'),
  },
};
</script>
