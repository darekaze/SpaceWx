<template>
  <swiper ref="mySwiper" :options="swiperOption"
    @mouseover.native="swiper.autoplay.stop();"
    @mouseout.native="swiper.autoplay.start();">
    <swiper-slide v-for="item in list" :key="item.link">
      <slider-card :topic="item" :ratio="0.96"/>
    </swiper-slide>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"/>
    <div class="swiper-button-next swiper-button-white" slot="button-next"/>
  </swiper>
</template>

<script>
import '@/assets/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'slider-list',
  components: {
    swiper,
    swiperSlide,
    SliderCard: () => import('@/components/Phenomena/SliderCard.vue'),
  },
  props: {
    list: Array,
    column: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        slidesPerColumn: this.column,
        slidesPerColumnFill: 'row',
        spaceBetween: 4,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        },
        breakpoints: {
          1259: { slidesPerView: 4 },
          759: { slidesPerView: 3 },
          599: { slidesPerView: 2 },
        },
      },
    };
  },
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
.swiper-container {
  max-width: 100%;
  width: 94vw;
  height: auto;
  margin: 0 auto;
}
.swiper-button {
  &-next, &-prev {
    transform: scale(0.8);
  }
  &-disabled { opacity: 0; }
}
</style>
