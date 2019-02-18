<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Historical Events</template>
      <p>
        Learn history...
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>
    <event-list :list="impacts" />
  </div>
</template>

<script>
import impacts from '@/assets/contexts/impacts.json'; // placeholder

export default {
  name: 'Historical-events',
  components: {
    SubBanner: () => import('@/components/Panels/SubBanner.vue'),
    EventList: () => import('@/components/Listing/Event.vue'),
  },
  data: () => ({
    impacts,
  }),
};
</script>
