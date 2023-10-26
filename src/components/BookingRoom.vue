<template>
  <form class="booking">
    <div class="booking-body">
      <span class="booking-price">{{ booking.price }}  ₽</span>
      <br /><br />

      <label>Даты въезда и выезда</label>
      <input type="date" class="booking-date booking-input-1"/>

      <label>Отдыхающие</label>
      <select class="booking-input-1 booking-select">
        <option value="1">1 взрослых</option>
        <option value="2">2 взрослых</option>
        <option value="3">3 взрослых</option>
        <option value="4">4 взрослых</option>
      </select>
      <div class="booking-room">
        <select 
        class="booking-input-2"
        v-model="booking.numChild">
          <option value="0">без детей</option>
          <option value="1">1 детей</option>
          <option value="2">2 детей</option>
          <option value="3">3 детей</option>
          <option value="4">4 детей</option>
        </select>
        <select 
        class="booking-input-2"
        v-model="booking.numRooms">
          <option value="1">1 номер</option>
          <option value="2">2 номер</option>
        </select>
      </div>
      <div @click="addBooking">
        <button>Забронировать</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const booking = ref(
        {
            price: 0,
            numAdult: 0,
            numChild: 0,
            startDate: '',
            endDate: '',
            numRooms: 0
        }
)

const addBooking = () => {
    booking.value.price = ((booking.value.numAdult * 1290) + (booking.value.numChild * 892)) 
}



</script>

<style lang="scss" scoped>
.booking {
  margin: 162px 0 0 24px;
  padding-bottom: 7px;
  max-width: 360px;
  max-height: 528px;
  border-radius: 12px;
  background: #f0f6fa;
  box-shadow: 0px 2px 12px 0px rgba(51, 51, 51, 0.2);
  &-date {
    width: 284px;
  }
  &-select {
    width: 100%;
  }
  &-room{
    display: flex;
    margin-top: 20px;
    gap: 20px;
  }
  &-input-2 {
    padding: 16px 18px;
    border-radius: 8px;
    width: 50%;
    border: none;
    background: #FFF;
    &:focus {
        outline: none;
    }
  }
  &-input-1 {
    margin-top: 12px;
    padding: 16px 18px;
    border-radius: 8px;
    display: inline-block;
    
    border: none;
    background: #FFF;
    &:focus {
        outline: none;
    }
  }
  button {
    margin: 28px 0 32px 0;
    width: 100%;
    display: inline-block;
    padding: 19px 40px 21px 40px;
    border-radius: 12px;
    background: #5047D7;
    border: none;
    color: white;
    font-family: Ubuntu;
    font-size: 24px;
    cursor: pointer;
    font-weight: 700;
  }
  label {
    margin-top: 24px;
    display: inline-block;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150.5%; 
    letter-spacing: -0.5px;
  }
  span {
    margin-top: 32px;
    display: inline-block;
    font-family: Ubuntu;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 137%; 
    letter-spacing: -1px;
  }
  
  &-body{
    margin: 32px 20px;
  }
}
</style>
