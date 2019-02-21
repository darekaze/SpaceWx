<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Impacts</template>
      <p>
        Learn how Space weather can affect our activities
        <br>(Placeholder: Content to be added, more description to be added)
      </p>
    </sub-banner>
    <topic-list :list="impacts" />
  </div>
</template>

<script>
import impacts from '@/assets/contexts/impacts.json';

export default {
  name: 'Impacts',
  components: {
    SubBanner: () => import('@/components/Banners/Sub.vue'),
    TopicList: () => import('@/components/Impacts/TopicList.vue'),
  },
  data: () => ({
    impacts,
  }),
};
</script>
