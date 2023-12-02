<template>
  <div class="card">
    <img :src="hotel.image" alt="" width="360" height="212" />
    <div class="card-body">
      <div class="card-title">
        <h3>{{ hotel.name }}</h3>
        <p>
          {{ hotel.description }}
        </p>
      </div>
      <div class="card-bottom">
        <div>
          <img
            v-for="index in 5"
            :key="index"
            :src="Star"
            alt="star"
            width="18"
          />
        </div>
        <div class="card-button">{{ sign }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from '../../assets/img/Star.svg';
const sign = '>';

const props = defineProps({
  hotel: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.card {
  max-width: 360px;
  border-radius: 12px;
  background: #fff;
  margin-right: 24px;
  box-shadow: 0px 50px 50px 0px rgba(184, 184, 184, 0.25);
  &-button {
    width: 28px;
    height: 28px;
    background-color: rgba(235, 240, 243, 0.5);
    border-radius: 12px;
    color: #3c3e44;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
    img {
      margin-right: 8px;
    }
  }
  &-title {
    margin-bottom: 28px;
  }
  &-body {
    padding: 24px 24px 30px 24px;
    h3 {
      font-family: Ubuntu;
      font-size: 24px;
      margin-bottom: 12px;
    }
    p {
      color: #333;
      font-family: Open Sans;
      font-size: 16px;
      opacity: 0.5;
    }
  }
}
</style>