<template>
  <v-container grid-list-lg pt-3>
    <div class="mb-2">
      <h2 class="headline font-weight-bold">Impacts</h2>
      <div class="subheading">Discover how space weather affects our lives</div>
    </div>
    <v-layout row wrap justify-start>
      <v-flex xs12 sm6
        v-for="(item, index) in topics" :key="index">
        <topic-card :topic="item" :ratio="17/9"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'impact-panel',
  components: {
    TopicCard: () => import('@/components/Home/Parts/Topic.vue'),
  },
  data() {
    return {
      topics: [
        {
          title: 'Effects on People and System',
          image: 'impact_effect.jpg',
          link: '/',
        },
        {
          title: 'Historical Events',
          image: 'historical_event.jpg',
          link: '/',
        },
      ],
    };
  },
};
</script>
