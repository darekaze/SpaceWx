<template>
  <div>
    <banner/>
    <phenomena-panel/>
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
    Banner: () => import('@/components/Panels/HeroBanner.vue'),
    PhenomenaPanel: () => import('@/components/Panels/PhenomenaPanel.vue'),
    ImpactsPanel: () => import('@/components/Panels/ImpactsPanel.vue'),
    SpaceWxPanel: () => import('@/components/Panels/SpaceWxPanel.vue'),
  },
  async beforeMount() {
    await this.$store.dispatch('loadConditions');
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$store.dispatch('loadConditions');
    }, 30 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
