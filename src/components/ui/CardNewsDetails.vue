<template>
  <div class="card">
    <img :src="news.image" alt="" width="360" height="200" />
    <div class="card-content">
      <h4 class="card-tag" v-show="news.tag != ''">{{ news.tag }}</h4>
      <h4 class="card-text">
        {{ news.content }}
      </h4>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

defineProps({
  news: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.card {
  max-width: 360px;
  position: relative;
  height: 200px;
  border-radius: 12px;
  margin-right: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &-tag {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.9);
    width: max-content;
    color: #333333;
    font-size: 16px;
  }
  &-text {
    color: #fff;
  }
  img {
    z-index: 2;
    border-radius: 12px;
  }
  &-content {
    position: absolute;
    top: 24px;
    left: 20px;
    bottom: 24px;
    right: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }
}
</style>