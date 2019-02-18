<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Historical Events</template>
      <p>
        Learn history...
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>

  </div>
</template>

<script>
export default {
  name: 'Historical-events',
  components: {
    SubBanner: () => import('@/components/Panels/SubBanner.vue'),

  },
};
</script>
