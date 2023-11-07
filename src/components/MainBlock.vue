<template>
  <div class="main-block">
    <div class="main-bottom">
      <div class="main-top">
        <h1>Pgs hotels kiris resort</h1>
        <div class="main-top-img">
          <img v-for="index in 5" :key="index" src="Star.svg " alt="star" />
        </div>
        <div class="main-top-signs">
          <img src="heart.svg" alt="heart" />
          <img src="upSign.svg" alt="sign" />
        </div>
        <search class="main-block-data-search">
          <input type="text" placeholder="фен, завтрак, пляж" />
          <button>
            <img src="Search.png" alt="search" />
          </button>
        </search>
      </div>
      <p class="main-address">
        г. Москва, 45412, Мариупольский район улица Культуры, д. 15
      </p>
      <div class="main-services">
        <span v-for="service in services" :key="service">{{ service }}</span>
      </div>
    </div>
    <div class="main-body">
      <Gallery />
      <BookingRoom />
    </div>
  </div>
</template>

<script setup>
import BookingRoom from "./BookingRoom.vue";
import Gallery from "./Gallery.vue";

const services = [
  "трансфер от/до аэропорта",
  "wi-fi",
  "завтрак включен",
  "первая линия",
  "хит продаж",
  "парковка",
  "хороший вариант для семьи",
];
</script>

<style lang="scss" scoped>
.main {
  &-body {
    display: flex;
    gap: 24px;
    margin: 31px 0 160px 0;
  }
  &-block {
    margin-top: 48px;
    &-data {
      &-search {
        margin: 24px 0 0 120px;
        width: 264px;
        height: 44px;;
        padding: 8px 16px;
        display: flex;
        justify-content: center;
        border-radius: 8px;
        background: #f5f5f5;
        button {
          border: none;
        }
        input {
          border: none;
          &:focus {
            outline: none;
            
          }
          font-family: Open Sans;
          background: #f5f5f5;
          font-size: 16px;
          border: none;
        }
        img {
          cursor: pointer;
        }
      }
    }
  }

  &-address {
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150.5%; /* 24.08px */
    letter-spacing: -0.5px;
  }
  &-services {
    margin-top: 17px;
    max-width: 744px;
    :nth-child(6),
    :nth-child(7) {
      margin-top: 12px;
    }
    span {
      margin-right: 8px;
      padding: 1px 8px 3px 8px;
      gap: 10px;
      border-radius: 4px;
      background: #f0f6fa;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150.5%; /* 24.08px */
      letter-spacing: -0.5px;
      display: inline-block;
    }
  }
  &-top {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-family: Ubuntu;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 151%;
      letter-spacing: -2.5px;
    }
    &-img {
      margin-right: 29px;
      display: flex;
      gap: 6px;
    }

    &-signs {
      display: flex;
      gap: 16px;
    }
  }
}
</style>
