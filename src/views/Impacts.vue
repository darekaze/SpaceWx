<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Impacts</template>
      <p>
        Learn how Space weather can affect our activities
        <br>(placeholder, more description to be added)
      </p>
    </sub-banner>

  </div>
</template>

<script>
export default {
  name: 'impacts',
  components: {
    SubBanner: () => import('@/components/Panels/SubBanner.vue'),

  },
};
</script>
