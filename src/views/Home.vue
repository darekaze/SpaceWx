<template>
  <div>
    <banner/>
    <phenomena-slider/>
    <impacts-panel/>
    <space-wx-panel/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    interval: null,
  }),
  components: {
    Banner: () => import('@/components/Home/Banner.vue'),
    PhenomenaSlider: () => import('@/components/Home/PhenomenaSlider.vue'),
    ImpactsPanel: () => import('@/components/Home/ImpactsPanel.vue'),
    SpaceWxPanel: () => import('@/components/Home/SpaceWxPanel.vue'),
  },
  mounted() {
    this.$store.dispatch('loadConditions');
    this.interval = setInterval(() => {
      this.$store.dispatch('loadConditions');
    }, 30 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
