<template>
  <v-toolbar
    flat dark fixed
    height="54px"
    color="#000000a8">
    <v-toolbar-title class="headline font-weight-light">
      <span>Space Weather</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items
      class="hidden-xs-only"
      v-for="(item, index) in toolbarItems" :key="index">
      <v-btn
        class="text-capitalize"
        :to="`/${item}`" flat>
        {{ item }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      class="hidden-sm-and-up">
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar-items>
    <!-- TODO: add hamburger for mobile screen -->
  </v-toolbar>
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
      toolbarItems: ['topics', 'impacts', 'events'],
    };
  },
};
</script>
