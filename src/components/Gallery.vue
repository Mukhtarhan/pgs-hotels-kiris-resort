<template>
  <div class="gallery">
    <div class="gallery-main">
      <img
        :src="album[0]"
        alt=""
        width="744"
        height="412"
        class="gallery-main-img"
      />
      <span class="gallery-main-right" @click="toRight"> > </span>
      <span class="gallery-main-left" @click="toLeft"> {{ sign }} </span>
    </div>
    <div class="gallery-sub">
      <img
        v-for="index in (1, 4)"
        :key="index"
        :src="album[index]"
        alt="room"
        width="168"
        height="92"
        @click="pickUpImage(index)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Image_1 from '@/assets/img/img-1.webp';
import Image_2 from '@/assets/img/img-2.jpg';
import Image_3 from '@/assets/img/img-3.avif';
import Image_4 from '@/assets/img/img-4.jpg';
import Image_5 from '@/assets/img/img-5.jpg';

const album = ref([Image_1, Image_2, Image_3, Image_4, Image_5]);
const sign = '<';

const toRight = () => {
  const img_1 = album.value[0];
  for (let i = 0; i < album.value.length - 1; i++) {
    album.value[i] = album.value[i + 1];
  }
  album.value[4] = img_1;
};

const toLeft = () => {
  const img_1 = album.value[album.value.length - 1];
  for (let i = album.value.length - 1; i > 0; i--) {
    album.value[i] = album.value[i - 1];
  }
  album.value[0] = img_1;
};
const pickUpImage = ind => {
  const temp = album.value[ind];
  album.value[ind] = album.value[0];
  album.value[0] = temp;
};
</script>

<style lang="scss" scoped>
.gallery {
  &-sub {
    display: flex;
    gap: 24px;
    margin-top: 24px;
    & img {
      cursor: pointer;
      border-radius: 8px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  &-main {
    position: relative;
    transition: 0.5s easy in out;
    &-img {
      border-radius: 12px;
    }
    span {
      position: absolute;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: 300;
      display: flex;
      font-size: 28px;
      justify-content: center;
      align-items: center;
      color: white;
      top: 44%;
      background: rgba(0, 0, 0, 0.4);
      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }

    &-left {
      left: 24px;
    }
    &-right {
      right: 24px;
    }
  }
}
</style> 