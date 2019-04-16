<template>
  <v-layout row wrap justify-center>
    <v-flex xs6 sm4 md3
      v-for="item in list" :key="item.link">
      <slider-card :topic="item" :ratio="1.06"/>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'phenomena-panel-gridlist',
  components: {
    SliderCard: () => import('@/components/Phenomena/SliderCard.vue'),
  },
  props: {
    list: Array,
  },
};
</script>
