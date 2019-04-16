<template>
  <v-container grid-list-xl pt-3>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6
        v-for="item in list" :key="item.code">
        <event-card :value="item"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'event-list',
  props: { list: Array },
  components: {
    EventCard: () => import('@/components/Impacts/EventCard.vue'),
  },
};
</script>
