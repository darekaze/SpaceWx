<template>
  <v-container grid-list-md pt-3>
    <!-- TODO: Change to no grid padding and no round card -->
    <v-layout row wrap justify-center>
      <v-flex xs6 sm4 lg3
        v-for="item in list" :key="item.code">
        <topic-card :topic="item" :ratio="0.94"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'grid-list',
  props: { list: Array },
  components: {
    TopicCard: () => import('@/components/Parts/Topic.vue'),
  },
};
</script>
