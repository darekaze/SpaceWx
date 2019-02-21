<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide v-for="item in list" :key="item.title">
      <slider-card  :topic="item" :ratio="0.85"/>
    </swiper-slide>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'; // eslint-disable-line import/no-extraneous-dependencies
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'slider-list',
  components: {
    swiper,
    swiperSlide,
    SliderCard: () => import('@/components/Phenomena/SliderCard.vue'),
  },
  props: { list: Array },
  data: () => ({
    swiperOption: {
      slidesPerView: 5,
      spaceBetween: 12,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
      },
      breakpoints: {
        1264: { slidesPerView: 4 },
        872: { slidesPerView: 3 },
        599: { slidesPerView: 2 },
      },
    },
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  beforeDestroy() {
    this.swiper.destroy(false, false);
  },
};
</script>

<style lang="scss" scoped>
.swiper-button {
  &-next, &-prev {
    transform: scale(0.7);
  }
  &-disabled { opacity: 0; }
}
</style>
