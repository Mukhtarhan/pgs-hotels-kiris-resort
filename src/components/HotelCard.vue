<template>
  <div class="content">
    <h2>Похожие отели</h2>
    <Swiper
      class="hotels"
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <swiper-slide v-for="hotel in hotels" :key="hotel" class="hotels-list">
        <CardHotelDetails :hotel="hotel" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardHotelDetails from './ui/CardHotelDetails.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import ImageHotel from '../assets/img/card-hotel-1.png';
import ImageHotel_2 from '../assets/img/card-hotel-2.jpg';
import ImageHotel_3 from '../assets/img/card-hotel-3.jpg';

const sign = '>';
const hotels = ref([
  {
    name: 'Limak limbra hotel',
    image: ImageHotel,
    description:
      'На песчаном побережье Средиземного моря, у подножия могущественной горы «Олимп»',
  },
  {
    name: 'Limak park hotel',
    image: ImageHotel_2,
    description:
      'Детишки смогут поплавать в открытом бассейне с водными горками, поиграть на площадке',
  },
  {
    name: 'Viking park',
    image: ImageHotel_3,
    description:
      'Детишки смогут поплавать в открытом бассейне с водными горками, поиграть на площадке',
  },
  {
    name: 'Limak limbra hotel',
    image: ImageHotel,
    description:
      'На песчаном побережье Средиземного моря, у подножия могущественной горы «Олимп»',
  },
]);
</script>

<style lang="scss" scoped>
h2 {
  font-family: Ubuntu;
  font-size: 32px;
  margin-bottom: 28px;
}
.hotels {
  padding-bottom: 120px;
  cursor: grab;
  &-list {
    max-width: max-content;
  }
}
</style>