<template>
  <v-carousel
    hide-controls>
    <v-carousel-item
      v-for="item in items"
      :key="item.title"
      :src="item.src">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex class="white--text">
            <h3 class="display-2 mb-2">{{ item.title }}</h3>
            <span class="subheading">{{ item.text }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      // TODO: Add items and locale
      items: [
        {
          title: 'Solar wind',
          src: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          text: 'Temp data here',
        },
        {
          src: 'https://images.unsplash.com/photo-1508402476522-c77c2fa4479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
      ],
    };
  },
};
</script>

<style>

</style>
