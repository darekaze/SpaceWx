<template>
  <div>
    <sub-banner image="hero.jpg">
      <template v-slot:title>Impacts</template>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, fugit
        perferendis iusto repellendus ipsa facilis nesciunt aliquid pariatur
        laboriosam maxime incidunt accusantium ad praese
      </p>
    </sub-banner>

  </div>
</template>

<script>
export default {
  name: 'impacts',
  components: {
    SubBanner: () => import('@/components/Category/SubBanner.vue'),
  },
};
</script>
