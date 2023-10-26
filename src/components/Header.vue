<template>
  <header>
    <div class="header">
      <img src="logo.png" alt="logo" />
      <div class="header-menu">
        <router-link
          class="header-menu-link"
          :to="item.path"
          v-for="item in menu"
          :key="item.name"
          >{{ item.name }}
        </router-link>
      </div>
      <router-link class="header-sign" to="">Войти</router-link>
    </div>
  </header>
</template>

<script setup>
const menu = [
  {
    name: "Туры",
    path: "/tour",
  },
  {
    name: "Идеи",
    path: "/idea",
  },
  {
    name: "О нас",
    path: "/about",
  },
  {
    name: "Помощь",
    path: "/help",
  },
];
</script>

<style lang="scss">
header {
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
}
.header {
  max-width: 1128px;
  margin: auto;
  display: flex;
  height: 80px;
  align-items: center;
  background: #fff;
  justify-content: space-between;
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
