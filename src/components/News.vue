<template>
  <div class="content">
    <h2>Вам может быть интересно</h2>
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
      <swiper-slide v-for="blog in news" :key="blog" class="hotels-list">
        <CardNewsDetails :news="blog" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup>
import CardNewsDetails from './ui/CardNewsDetails.vue';
import ImageNews1 from '../assets/img/news-1.png';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';

const news = ref([
  {
    image: ImageNews1,
    content: 'Лучший отдых на море в «золотой сезон» в полном разгаре',
    tag: null,
  },
  {
    image: ImageNews1,
    content: 'Лучший отдых на море в «золотой сезон» в полном разгаре',
    tag: 'реклама',
  },
  {
    image: ImageNews1,
    content: 'Лучший отдых на море в «золотой сезон» в полном разгаре',
    tag: 'реклама',
  },
  {
    image: ImageNews1,
    content: 'Лучший отдых на море в «золотой сезон» в полном разгаре',
    tag: 'реклама',
  },
  {
    image: ImageNews1,
    content: 'Лучший отдых на море в «золотой сезон» в полном разгаре',
    tag: 'реклама',
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