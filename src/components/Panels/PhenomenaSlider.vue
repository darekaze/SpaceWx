<template>
  <v-container pt-2 id="phenomena">
    <div class="mb-2">
      <h2 class="headline font-weight-bold">Phenomena</h2>
      <div class="subheading">
        Explore various space environments between the Sun and Earth
      </div>
    </div>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item in phenomena" :key="item.title">
        <topic-card  :topic="item" :ratio="0.85"/>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </v-container>
</template>

<script>
import 'swiper/dist/css/swiper.css'; // eslint-disable-line import/no-extraneous-dependencies
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import phenomena from '@/assets/contexts/phenomena.json';

export default {
  name: 'phenomena-slider',
  components: {
    swiper,
    swiperSlide,
    TopicCard: () => import('@/components/Parts/Topic.vue'),
  },
  data() {
    return {
      phenomena,
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
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.swiper.destroy(false, false);
    this.swiper.init();
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
