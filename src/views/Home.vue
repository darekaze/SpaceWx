<template>
  <div>
    <banner/>
    <phenomena-panel/>
    <impacts-panel/>
    <alerts-panel/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    interval: null,
  }),
  components: {
    Banner: () => import('@/components/Banners/Hero.vue'),
    PhenomenaPanel: () => import('@/components/Phenomena/PhenomenaPanel.vue'),
    ImpactsPanel: () => import('@/components/Impacts/ImpactsPanel.vue'),
    AlertsPanel: () => import('@/components/Alerts/AlertsPanel.vue'),
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
