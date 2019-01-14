<template>
  <v-toolbar
    flat dark fixed
    height="56px"
    color="#000000a8">
    <v-toolbar-title class="headline">
      <span>Space Weather</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <!-- FIXME: Use vfor -->
      <v-btn flat class="text-capitalize">Topics</v-btn>
      <v-btn flat class="text-capitalize">Impacts</v-btn>
      <v-btn flat class="text-capitalize">Events</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

};
</script>
