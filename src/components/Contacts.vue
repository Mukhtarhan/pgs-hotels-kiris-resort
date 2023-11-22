<template>
  <div class="contacts">
    <div class="contacts-address">
        <h2>Контакты</h2>
        <div class="contacts-nomer">
            <span>+7 (837) 452 34 23</span>
            <span>+7 (837) 452 34 23</span>
        </div>
        <span class="contacts-address-dom">г. Москва, 45412, Мариупольский район улица Культуры, д. 15</span>
        <div class="contacts-body">
            <div style="position:relative;overflow:hidden;">
                <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a>
                <a href="https://yandex.ru/maps/geo/moskva/53166393/?ll=37.618973%2C55.755454&utm_medium=mapframe&utm_source=maps&z=17" style="color:#eee;font-size:12px;position:absolute;top:14px;">Москва — Яндекс Карты</a>
                <iframe src="https://yandex.ru/map-widget/v1/?ll=37.618973%2C55.755454&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjM5MxIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg14eBZCFfUFX0I%2C&z=17" width="744" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
            </div>
            <CardContact />
        </div>
    </div>
  </div>
</template>

<script setup>
import CardContact from './ui/CardContact.vue';


</script>

<style lang="scss" scoped>
.contacts {
    margin-bottom: 156px;
    &-address{
        & h2 {
            font-family: Ubuntu;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
        }
        &-dom {
            display: block;
            margin-top: 16px;
            font-family: Open Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
        }
    }
    &-nomer {
        margin-top: 28px;
        display: flex;
        gap: 62px;
        & span {
            color: #5047D7;
            font-family: Ubuntu;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 126%;
        }
    }
    &-body {
        margin-top: 28px;
        display: flex;
        gap: 24px;
    }
}

</style>