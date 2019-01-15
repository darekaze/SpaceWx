<template>
  <div>
    <info-carousel/>
    <current-wx/>
  </div>
</template>

<script>
export default {
  components: {
    InfoCarousel: () => import('@/components/Home/InfoCar.vue'),
    CurrentWx: () => import('@/components/Home/CurrentWx.vue'),
  },
  data() {
    return {
      //
    };
  },
};
</script>
