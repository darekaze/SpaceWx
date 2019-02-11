<template>
  <v-toolbar
    flat dark fixed
    height="54px"
    color="#000000a8">
    <v-toolbar-title class="headline font-weight-light">
      <span>Space Weather</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- TODO: change to burger menu only -->
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        v-for="item in toolbarItems" :key="item.name"
        :to="`/${item.name}`" flat
        class="text-capitalize"> <!-- default px-3 -->
        <v-icon dark class="mr-2">{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      class="hidden-sm-and-up">
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
      toolbarItems: [
        { name: 'phenomenon', icon: 'track_changes' },
        { name: 'impacts', icon: 'multiline_chart' }, // Backup: new_releases
        { name: 'historical events', icon: 'timeline' },
      ],
    };
  },
};
</script>
