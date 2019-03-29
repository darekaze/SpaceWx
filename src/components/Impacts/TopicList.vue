<template>
  <v-container grid-list-md pt-3>
    <v-layout row wrap justify-center>
      <v-flex xs6 sm4
        v-for="(item, index) in list" :key="index">
        <topic-card :topic="item" :ratio="0.94"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'topic-list',
  props: { list: Array },
  components: {
    TopicCard: () => import('@/components/Impacts/TopicCard.vue'),
  },
};
</script>
