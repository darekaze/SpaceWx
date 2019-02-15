<template>
  <sub-layout>

    <template v-slot:header>
      <h1>Impacts</h1>
    </template>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, fugit
      perferendis iusto repellendus ipsa facilis nesciunt aliquid pariatur
      laboriosam maxime incidunt accusantium ad praesentium quae inventore
      optio ullam dolorem amet!
    </p>

  </sub-layout>
</template>

<script>
export default {
  name: 'impacts',
  components: {
    SubLayout: () => import('@/components/SubLayout.vue'),
  },
  data: () => ({
    heading: {
      title: 'Impacts',
      icon: '',
      description: '',
    },
    content: '', // sub-component to load
  })
};
</script>
