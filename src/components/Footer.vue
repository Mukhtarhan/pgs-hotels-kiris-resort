<template>
  <footer>
    <div class="footer">
      <div class="footer-contact">
        <img :src="Logo" alt="logo" width="205" height="48" />
        <div class="footer-contact-menu">
          <router-link to="">Акции отеля</router-link>
          <router-link to="">Блог</router-link>
          <router-link to="">Все новости</router-link>
        </div>
        <div class="footer-contact-menu">
          <router-link to="">Отзывы</router-link>
          <router-link to="">О нас</router-link>
          <router-link to="">Пирсы</router-link>
        </div>
        <div class="footer-contact-menu">
          <router-link to="#contacts">Контакты</router-link>
          <router-link to="">Расположение</router-link>
          <router-link to="">Фотогаллерея</router-link>
        </div>
        <form class="footer-contact-btn" @submit.prevent="submitEmail">
          <input
            type="email"
            placeholder="alisa_aleksandrova@gmail.com"
            required
          />
          <button>Подписаться</button>
        </form>
      </div>
      <div class="footer-info">
        <div class="footer-info-1">
          <h3>Тур ногами отель</h3>
          <p>
            Дизайнерский отель «Турногами» построен в 2015 году в первой
            береговой линии поселка Кучугуры. Комплекс отеля выполнен в стиле
            французского модерна и окружает вас ненавязчивым шармом Парижа, Сан
            Суси и творческого Монмартра и запахом лаванды, которая цветет
            вокруг. Это современное 3-х этажное здание с 12 номерами и открытым
            солярием на крыше с уникальным видом на море и песчаным пляжем в 30
            метрах. Оснащение, дизайн и комплектация номеров соответствуют
            категории 4 звезды.
          </p>
        </div>
        <div class="footer-info-2">
          <img src="../assets/img/Group.svg" alt="" width="12" />
          <p>
            Все права защищены<br />
            <br />
            Сайт использует файлы cookie для удобства пользователей. Вы можете
            запретить их сохранение в настройках вашего браузера. Если
            вы продолжаете использовать сайт, вы соглашаетесь на использование
            файлов cookie.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/assets/img/logo.png';
function submitEmail(value) {
  console.log('submitEmail', value);
}
</script>

<style lang="scss" scoped>
footer {
  background: #333;
  // height: 1028px;
}

.footer {
  max-width: 1188px;
  padding: 56px 0 32px 0px;

  margin: 0 auto;

  &-contact {
    padding: 16px 26px 38px 0px;
    display: flex;
    border-bottom: 1px solid #5047d7;
    justify-content: space-between;

    &-menu {
      display: flex;
      font-family: Open Sans;
      gap: 12px;
      line-height: 150.5%;
      flex-direction: column;
      color: #fff;

      a {
        cursor: pointer;
        color: #fff;
        text-decoration: none;
      }
    }

    &-btn {
      display: flex;
      gap: 12px;
      flex-direction: column;

      input {
        text-align: center;
        border-radius: 8px;
        background: #fff;
        width: 264px;
        border: none;
        height: 38px;
        flex-shrink: 0;

        &:focus {
          outline: none;
        }
      }

      button {
        border-radius: 8px;
        background: var(--8-purple-5047-d-7, #5047d7);
        padding: 8px 32px;
        border: none;
        color: white;
        cursor: pointer;
        align-items: flex-start;
        text-align: center;
        gap: 10px;
      }
    }
  }

  &-info {
    margin-top: 48px;
    color: white;
    display: flex;
    gap: 125px;

    &-1 {
      max-width: 457px;

      p {
        font-family: Open Sans;
        font-size: 14px;
      }
    }

    &-2 {
      margin-top: 32px;
      color: rgb(153, 148, 148);
      font-size: 14px;
      max-width: 473px;
    }
  }
}
</style>
