<template>
  <v-app>
    <THeader/>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-content>
    <t-footer/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    THeader: () => import('@/components/THeader.vue'),
    TFooter: () => import('@/components/TFooter/Index.vue'),
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s opacity ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
