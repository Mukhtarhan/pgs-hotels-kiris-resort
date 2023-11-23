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
    <div class="comments-tabs">
        <span 
        v-for="tab in commentTabs"
        :key="tab"
        @click="tab.isTabActive =! tab.isTabActive"
        :class="`${tab.isTabActive ? 'comments-tabs-active' : 'comments-tabs-passive'}`"
        >{{ tab.name }}</span>
    </div>
    <CommentList />
</div>    
</template>

<script setup>
import CommentList from '@/components/CommentList.vue'
import { ref } from "vue";

const isOpened = ref(false)
const sortValue = ref('сначала высокие оценки')
const sortValueList = ['сначала высокие оценки', 'сначала низкие оценки']
const commentTabs = ref([
    {
        name: 'кухня',
        isTabActive: false
    },
    {
        name: 'персонал',
        isTabActive: false
    },
    {
        name: 'расположение',
        isTabActive: false
    },
    {
        name: 'развлечения',
        isTabActive: false
    },
    {
        name: 'бассейн',
        isTabActive: false
    },
    {
        name: 'завтрак',
        isTabActive: false
    },
    {
        name: 'номер',
        isTabActive: false
    },
])

const changeSortValue = (temp) => {
    sortValue.value = temp
    isOpened.value = false
}

</script>

<style lang="scss" scoped>
.comments {
    h2 {
        margin-bottom: 29px;
        font-family: Ubuntu;
        font-size: 32px;
    }
    &-tabs {
        margin-bottom: 28px;
        &-active {
            background: #fff;
            border: 1px solid #DEE6EC;
        }
        &-passive {
            background: #f0f6fa;
        }
        span {
            margin-right: 8px;
            padding: 1px 8px 3px 8px;
            gap: 10px;
            border-radius: 4px;
            font-family: Open Sans;
            font-size: 16px;
            cursor: pointer;
            display: inline-block;
        }
    }
    &-sort {
        max-width: max-content;
        font-family: Open Sans;
        font-size: 16px;
        margin-bottom: 12px;
        &-list {
            padding-top: 10px;
            background: #f0f6fa;
            display: grid;
            &-item {
                padding: 1px 8px 3px 8px;
                cursor: pointer;
                font-size: 14px;
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