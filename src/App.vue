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
import THeader from '@/components/THeader.vue';

export default {
  name: 'App',
  components: {
    THeader,
    TFooter: () => import('@/components/TFooter.vue'),
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.h-pad {
  padding-top: 56px;
}

.v-carousel__controls {
  background: transparent;
  justify-content: flex-end;
  > .v-item-group {
    margin-right: 8%;
  }
}

.rounded-card{
  border-radius: 4px;
  margin: 0px auto;
}
</style>
