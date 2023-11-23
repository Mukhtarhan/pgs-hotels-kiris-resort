<template>
  <div class="comment-list">
    <CommentDetails
    v-for="comment in displayedComments"
    :key="comment"
    :advantages="comment.advantages"
    :disadvantages="comment.disadvantages"
    :img="comment.img"
    :score="comment.score"
    :date="comment.date"
    :score-comment="comment.scoreComment"
    />
    <button @click="showAllComments" class="btn" v-if="showCommentButton">Посмотреть все отзывы</button>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import CommentDetails from "./ui/CommentDetails.vue";
import ProfileImage from '@/assets/img/profile-1.svg'

const comments = [
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
    {
        img: ProfileImage,
        description: 'стандартный 2-местных номер',
        score: 10,
        scoreComment: 'отлично',
        date: 'Ноябрь 2020г',
        advantages: 'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
        disadvantages: 'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.'
    },
]

const showCommentButton = ref(true)
const displayedComments = ref(comments.slice(0, 3))

function showAllComments() {
    showCommentButton.value = false
    displayedComments.value = comments
}
</script>

<style lang="scss" scoped>
.comment-list {
    gap: 16px;
    margin-bottom: 162px;
}
</style>