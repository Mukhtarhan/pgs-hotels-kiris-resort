<template>
<div class="card-service" v-if="contentPosition === 'left'">
    <div class="crad-serviece-content">
        <h3>{{ title }}</h3>
        <span>{{ content }}</span>
    </div>
    <img 
        :src="img" 
        :alt="title" 
        width="456" 
        height="340">
</div>
<div class="card-service" v-else>
    <img 
    :src="img" 
    :alt="title" 
    width="456" 
    height="340">
    <div class="crad-serviece-content">
        <h3>{{ title }}</h3>
        <span>{{ content }}</span>
    </div>
</div>   
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    contentPosition: {
        type: String,
        default: 'left'
    }
})

</script>

<style lang="scss" scoped>
.card-service {
    display: flex;
    gap: 120px;
    margin-bottom: 132px;
    &-content {
        & h3 {
            font-family: Ubuntu;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 134%; 
            letter-spacing: -1px;
        }
        & span {
            font-family: Open Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150.5%;
            letter-spacing: -0.5px;
        }
    }
}
</style>