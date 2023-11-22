<template>
<div class="comments">
    <h2>Отзывы посетителей</h2>
    <div class="comments-sort">
        <button @click="isOpened =! isOpened">
            <span>{{ sortValue }}</span>
            <img src="../assets/img/arrow_down.svg" alt="arrow" v-if="!isOpened">
            <img src="../assets/img/arrow_up.svg" alt="arrow" v-else>
        </button>
        <div class="comments-sort-list" v-if="isOpened">
            <div 
            v-for="value in sortValueList"
            :key="value"
            @click="changeSortValue(value)"
            class="comments-sort-list-item">
            {{ value }}
            </div>
        </div>
    </div>
</div>    
</template>

<script setup>
import { ref } from "vue";


const sortValueList = ['сначала высокие оценки', 'сначала низкие оценки']
const isOpened = ref(false)
const sortValue = ref('сначала высокие оценки')
const changeSortValue = (temp) => {
    sortValue.value = temp
    isOpened.value = false
}

</script>

<style lang="scss" scoped>
.comments {
    &-sort {
        max-width: max-content;
        font-family: Open Sans;
        font-size: 16px;
        &-list {
            padding-top: 15px;
            background: #f0f6fa;
            display: grid;
            &-item {
                padding: 1px 8px 3px 8px;
                cursor: pointer;
            }
        }
        button {
            padding: 1px 8px 3px 8px;
            display: inline-flex;            
            align-items: center;
            gap: 10px;
            border: none;
            border-radius: 4px;
            font-family: Open Sans;
            font-size: 16px;
            background: #f0f6fa;
        }
       
    }
}
</style>