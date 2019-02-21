<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Historical Events</template>
      <p>
        Learn history...
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>
    <event-list :list="histories" />
  </div>
</template>

<script>
import histories from '@/assets/contexts/histories.json'; // placeholder

export default {
  name: 'Historical-events',
  components: {
    SubBanner: () => import('@/components/Banners/Sub.vue'),
    EventList: () => import('@/components/Impacts/EventList.vue'),
  },
  data: () => ({
    histories,
  }),
};
</script>
