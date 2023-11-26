<template>
  <div class="advantages" id="idea">
    <h2>Преимущества отеля</h2>
    <div class="advantages-content">
      <div
        class="advantages-element"
        v-for="item in advantages"
        :key="item.img"
      >
        <img :src="item.img" alt="" />
        <span>{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon1 from '@/assets/img/icon01.png';
import Icon2 from '@/assets/img/icon02.png';
import Icon3 from '@/assets/img/icon03.png';
import Icon4 from '@/assets/img/icon04.png';
import Icon5 from '@/assets/img/icon05.png';
import Icon6 from '@/assets/img/icon06.png';
import Icon7 from '@/assets/img/icon07.png';
import Icon8 from '@/assets/img/icon08.png';

const advantages = [
  {
    img: Icon1,
    description: 'Для граждан РФ виза не требуется',
  },
  {
    img: Icon2,
    description: 'Аэропорт	Antalya — 65 км',
  },
  {
    img: Icon3,
    description: 'Путь к пляжу: через территорию отеля',
  },
  {
    img: Icon4,
    description: 'Различные развлечения на любой вкус',
  },
  {
    img: Icon5,
    description: 'Бесплатный Wi-Fi в номере',
  },
  {
    img: Icon6,
    description: 'Питание в отеле',
  },
  {
    img: Icon7,
    description: 'Уютный первокласный трансфер',
  },
  {
    img: Icon8,
    description: 'Бассейн',
  },
];
</script>

<style lang="scss" scoped>
.advantages {
  padding-bottom: 160px;
  & h2 {
    margin-bottom: 28px;
    font-family: Ubuntu;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
  }
  &-content {
    display: grid;
    grid-template-columns: repeat(4, 282px);
    row-gap: 56px;
  }
  &-element {
    display: flex;
    gap: 20px;
    span {
      color: #3c3e44;
      max-width: 196px;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150.5%; /* 24.08px */
      letter-spacing: -0.5px;
    }
  }
}
</style>