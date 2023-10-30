<template>
  <div class="gallery">
    <div class="gallery-main">
        <img :src="album[0]" alt="" width="744" height="412">
        <span 
        class="gallery-main-right"
        @click="toRight" > > </span>
        <span 
        class="gallery-main-left"
        @click="toLeft" > {{ sign }} </span>
    </div>
    <div class="gallery-sub">
        <img :src="album[1]" alt="" width="168" height="92">
        <img :src="album[2]" alt="" width="168" height="92">
        <img :src="album[3]" alt="" width="168" height="92">
        <img :src="album[4]" alt="" width="168" height="92">
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
const album = ref(['gallery/img-1.png', 'gallery/img-2.png', 'gallery/img-3.png', 'gallery/img-4.png', 'gallery/img-5.png'])
const sign = '<'

const toRight = () => {
    const img_1 = album.value[0]
    for(let i = 0; i < album.value.length-1; i++) {
        album.value[i] = album.value[i+1]
    }
    album.value[4] = img_1
}

const toLeft = () => {
    const img_1 = album.value[album.value.length-1]
    for(let i = album.value.length-1; i > 0; i--) {
        album.value[i] = album.value[i-1]
    }
    album.value[0] = img_1
}


</script>

<style lang="scss" scoped>
.gallery {
    margin-top: 31px;
    &-sub {
        display: flex;
        gap: 24px;
        margin-top: 24px;
    }
    &-main {
        position: relative;
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
            background: rgba(0, 0 , 0, 0.4);
            &:hover {
                background: rgba(0, 0 , 0, 0.2);
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