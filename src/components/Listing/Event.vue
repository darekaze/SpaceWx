<template>
  <v-container grid-list-md pt-3>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 lg4
        v-for="item in list" :key="item.code">
        <event-card :topic="item"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'tile-list',
  props: { list: Array },
  components: {
    EventCard: () => import('@/components/Parts/EventCard.vue'),
  },
};
</script>
