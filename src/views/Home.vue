<template>
  <div>
    <info-carousel/>
    <current-wx/>
    <forecast/>
  </div>
</template>

<script>
export default {
  components: {
    InfoCarousel: () => import('@/components/Home/InfoCar.vue'),
    CurrentWx: () => import('@/components/Home/CurrentWx.vue'),
    Forecast: () => import('@/components/Home/Forecast.vue'),
  },
  data() {
    return {
      //
    };
  },
};
</script>
