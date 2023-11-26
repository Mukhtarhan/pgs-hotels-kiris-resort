<template>
  <div class="comments">
    <h2>Отзывы посетителей</h2>
    <div class="comments-sort">
      <button @click="isOpened = !isOpened">
        <span>{{ sortValue }}</span>
        <img src="../assets/img/arrow_down.svg" alt="arrow" v-if="!isOpened" />
        <img src="../assets/img/arrow_up.svg" alt="arrow" v-else />
      </button>

      <div class="comments-sort-list" v-if="isOpened">
        <div
          v-for="value in sortValueList"
          :key="value"
          @click="changeSortValue(value)"
          class="comments-sort-list-item"
        >
          {{ value }}
        </div>
      </div>
    </div>

    <div class="comments-tabs">
      <span
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="`${
          activeTab.value === tab.value
            ? 'comments-tabs-active'
            : 'comments-tabs-passive'
        }`"
      >
        {{ tab.name }}
      </span>
    </div>
    <div class="comments-content">
      <CommentList :comments="computedComments" />
      <CommentInfoVue />
    </div>
  </div>
</template>

<script setup>
import CommentList from '@/components/CommentList.vue';
import { ref, computed } from 'vue';
import ProfileImage from '@/assets/img/profile-1.svg';
import ProfileImage2 from '@/assets/img/profile-2.svg';
import ProfileImage3 from '@/assets/img/profile-3.svg';
import CommentInfoVue from './CommentInfo.vue';

const isOpened = ref(false);
const sortValue = ref('сначала высокие оценки');
const sortValueList = ['сначала высокие оценки', 'сначала низкие оценки'];
const tabs = ref([
  {
    value: 'kitchen',
    name: 'кухня',
  },
  {
    value: 'personal',
    name: 'персонал',
  },
  {
    value: 'location',
    name: 'расположение',
  },
  {
    value: 'entertainment',
    name: 'развлечения',
  },
  {
    value: 'pool',
    name: 'бассейн',
  },
  {
    value: 'breakfast',
    name: 'завтрак',
  },
  {
    value: 'room',
    name: 'номер',
  },
]);
const activeTab = ref(tabs.value[0]);

const changeSortValue = temp => {
  sortValue.value = temp;
  isOpened.value = false;
};

const comments = [
  {
    img: ProfileImage,
    type: 'location',
    description: '1 стандартный 2-местных номер',
    score: 10,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage2,
    type: 'location',
    description: '2 стандартный 2-местных номер',
    score: 9,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage3,
    type: 'location',
    description: '3 стандартный 2-местных номер',
    score: 8,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage,
    type: 'kitchen',
    description: '4 стандартный 2-местных номер',
    score: 7,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage2,
    type: 'kitchen',
    description: '5 стандартный 2-местных номер',
    score: 6,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage3,
    type: 'kitchen',
    description: '6 стандартный 2-местных номер',
    score: 5,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage,
    type: 'breakfast',
    description: '7 стандартный 2-местных номер',
    score: 4,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage3,
    type: 'kitchen',
    description: '8 стандартный 2-местных номер',
    score: 3,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage,
    type: 'pool',
    description: '8 стандартный 2-местных номер',
    score: 3,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage2,
    type: 'room',
    description: '8 стандартный 2-местных номер',
    score: 3,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage2,
    type: 'entertainment',
    description: '8 стандартный 2-местных номер',
    score: 3,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage,
    type: 'personal',
    description: '8 стандартный 2-местных номер',
    score: 5,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
];

const computedComments = computed(() => {
  let tempComment = comments.filter(
    comment => comment.type === activeTab.value.value
  );
  tempComment =
    sortValue.value === 'сначала высокие оценки'
      ? tempComment.sort((a, b) => b.score - a.score)
      : tempComment.sort((a, b) => a.score - b.score);
  return tempComment;
});
</script>

<style lang="scss" scoped>
.comments {
  &-content {
    display: flex;
    gap: 24px;
  }
  h2 {
    margin-bottom: 29px;
    font-family: Ubuntu;
    font-size: 32px;
  }
  &-tabs {
    margin-bottom: 28px;
    &-active {
      background: #fff;
      border: 1px solid #dee6ec;
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
      overflow: hidden;
      transition: grid-template-rows 0.3s ease;
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
