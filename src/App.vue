<template>
  <v-app>
    <!-- <THeader/> -->
    <v-content>
      <transition
        name="fade" mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter">
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
    // THeader: () => import('@/components/THeader.vue'),
    TFooter: () => import('@/components/TFooter.vue'),
  },
  data: () => ({
    prevHeight: 0,
  }),
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      }, 240);
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.24s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.round {
  border-radius: 6px !important;
}
</style>
