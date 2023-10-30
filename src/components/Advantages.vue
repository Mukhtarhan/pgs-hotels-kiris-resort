<template>
    <div class="advantages">
        <h2>Преимущества отеля</h2>
        <div class="advantages-content">
            <div class="advantages-element" v-for="item in advantages" :key="item.img">
                <img :src="item.img" alt="">
                <span>{{ item.description }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

const advantages = [
    {
        img: 'icon01.png',
        description: 'Для граждан РФ виза не требуется'
    },
    {
        img: 'icon02.png',
        description: 'Аэропорт	Antalya — 65 км'
    },
    {
        img: 'icon03.png',
        description: 'Путь к пляжу: через территорию отеля'
    },
    {
        img: 'icon04.png',
        description: 'Различные развлечения на любой вкус'
    },
    {
        img: 'icon05.png',
        description: 'Бесплатный Wi-Fi в номере'
    },
    {
        img: 'icon06.png',
        description: 'Питание в отеле'
    },
    {
        img: 'icon07.png',
        description: 'Уютный первокласный трансфер'
    },
    {
        img: 'icon08.png',
        description: 'Бассейн'
    },
]

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
            color: #3C3E44;
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