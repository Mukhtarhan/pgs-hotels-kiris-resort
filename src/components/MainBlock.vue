<template>
    <div class="main-block">
  <div class="main">
    <div class="main-top">
      <h1>Pgs hotels kiris resort</h1>
      <div class="main-top-img">
        <img src="Star.svg" alt="star" />
        <img src="Star.svg" alt="star" />
        <img src="Star.svg" alt="star" />
        <img src="Star.svg" alt="star" />
      </div>
      <div class="main-top-signs">
        <img src="heart.svg" alt="heart" />
        <img src="upSign.svg" alt="sign" />
      </div>
    </div>
    <p class="main-address">
      г. Москва, 45412, Мариупольский район улица Культуры, д. 15
    </p>
    <div class="main-services">
      <span 
      v-for="service in services" 
      :key="service">{{ service }}</span>
    </div>
    <Gallery />
  </div>
  <div class="main-block-data">
    <div class="main-block-data-search">
        <input type="text" placeholder="фен, завтрак, пляж">
        <img src="Search.png" alt="search">
    </div>
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
  margin-bottom: 160px;
  &-block {
    max-width: 744px;
    display: flex;
    margin-top: 48px;
    &-data {
        &-search {
            margin: 24px 0 0 120px;
            width: 232px;
            padding: 8px 16px;
            height: max-content;
            display: flex;
            justify-content: center;
            border-radius: 8px;
            background: #F5F5F5;
            input {
                &:focus {
                    outline: none;
                }
                font-family: Open Sans;
                background: #F5F5F5;
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
    :nth-child(6), :nth-child(7){
        margin-top: 12px;
    }
    span {
        margin-right: 8px;
        padding: 1px 8px 3px 8px;
        gap: 10px;
        border-radius: 4px;
        background: #F0F6FA;
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
