<template>
  <header class="header">
    <div class="header-content container">
      <img :src="Logo" alt="logo" />
      <div class="header-menu">
        <router-link
          class="header-menu-link"
          v-for="item in menu"
          :key="item.name"
          :to="item.path"
        >
          {{ item.name }}
        </router-link>
      </div>
      <router-link class="header-sign" to="">Войти</router-link>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/assets/img/logo.png'
const menu = [
  {
    name: "Туры",
    path: "#tour",
  },
  {
    name: "Идеи",
    path: "#idea",
  },
  {
    name: "О нас",
    path: "#about",
  },
  {
    name: "Помощь",
    path: "#help",
  },
];
</script>

<style lang="scss">

.header {
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  height: 80px;

  &-content{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-menu {
    &-link {
      text-decoration: none;
      color: var(--black, #333);
      margin-left: 56px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  &-sign {
    text-decoration: none;
    color: var(--8-purple-5047-d-7, #5047d7);
    cursor: pointer;
  }
}
</style>
