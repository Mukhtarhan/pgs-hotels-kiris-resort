<template>
  <div class="info">
    <div class="info-top">
        <span class="info-top-head">8.4</span>
        <div class="info-top-content">
            <span class="info-top-value">
                Очень хорошо
            </span>
            <span class="info-top-num">
                4 256 оценок
            </span>
        </div>
    </div>
    <hr class="info-top-hr">
    <div class="info-bottom">
        <div
        v-for="inf in info"
        :key="inf" 
        class="info-bottom-item">
            <span>{{ inf.name }}</span>
            <span>{{ inf.value }}</span>
        </div>
    </div>
  </div>
</template>

<script setup>
const info = [
    {
        name: 'Персонал',
        value: 9.3,
    },
    {
        name: 'Расположение',
        value: 9.5,
    },
    {
        name: 'Комфорт',
        value: 8.3,
    },
    {
        name: 'Wi-fi',
        value: 7.6,
    },
    {
        name: 'Кухня',
        value: 8.1,
    },
    {
        name: 'Номер',
        value: 8.9,
    },
    {
        name: 'Удобства',
        value: 9.4,
    },
    {
        name: 'Чистота',
        value: 8.4,
    },
    {
        name: 'Цена/качество',
        value: 7.2,
    },
]
</script>

<style lang="scss" scoped>
.info {
    width: 360px;
    padding: 24px 24px 28px 24px;
    border-radius: 12px;
    background: rgba(235, 240, 243, 0.50);
    height: max-content;
    &-bottom {
        padding-top: 20px;
        font-size: 18px;
        :nth-last-child(1){
            margin-bottom: 0;
        }
        &-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
        }
    }
    &-top {
        gap: 20px;
        display: flex;
        margin-bottom: 20px;
        &-hr {
            opacity: 0.1;
            background: #5047D7;
        }
        span {
            display: block;
        }
        &-head {
            font-family: Ubuntu;
            font-size: 76px;
        }
        &-content {
            display: flex;
            gap: 4px;
            justify-content: center;
            flex-direction: column;
        }
        &-num {
            opacity: 0.5;
        }
    }
}
</style>