<template>
  <div>
    <info-carousel/>
    <current-wx/>
    <forecast/>
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
    CurrentWx: () => import('@/components/Home/CurrentWx.vue'),
    Forecast: () => import('@/components/Home/Forecast.vue'),
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
