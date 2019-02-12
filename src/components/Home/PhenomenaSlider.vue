<template>
  <v-container pt-3>
    <div class="mb-2">
      <h2 class="headline font-weight-bold">Phenomena</h2>
      <div class="subheading">Temp subtitle holder</div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in phenomena" :key="item.title">
        <topic-card  :topic="item" :ratio="0.88"/>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </v-container>
</template>

<script>
import 'swiper/dist/css/swiper.css'; // eslint-disable-line import/no-extraneous-dependencies
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import phenomena from '@/assets/context/phenomena.json';

export default {
  components: {
    swiper,
    swiperSlide,
    TopicCard: () => import('@/components/Home/Parts/Topic.vue'),
  },
  data() {
    return {
      phenomena,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 12,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        },
        breakpoints: {
          1264: { slidesPerView: 4 },
          872: { slidesPerView: 3 },
          694: { slidesPerView: 2 },
        },
      },
    };
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
