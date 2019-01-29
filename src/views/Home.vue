<template>
  <div>
    <info-carousel/>
    <space-wx-panel/>
    <forecast-panel/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    interval: null,
  }),
  components: {
    InfoCarousel: () => import('@/components/Home/InfoCarousel.vue'),
    SpaceWxPanel: () => import('@/components/Home/SpaceWxPanel.vue'),
    ForecastPanel: () => import('@/components/Home/ForecastPanel.vue'),
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
