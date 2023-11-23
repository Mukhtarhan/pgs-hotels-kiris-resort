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
    <CommentList :comments="computedComments" />
  </div>
</template>

<script setup>
import CommentList from '@/components/CommentList.vue';
import { ref, computed } from 'vue';
import ProfileImage from '@/assets/img/profile-1.svg';

const isOpened = ref(false);
const sortValue = ref('сначала высокие оценки');
const sortValueList = ['сначала высокие оценки', 'сначала низкие оценки'];
const tabs = ref([
  {
    value: 'kitchen',
    name: 'kitchen',
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
    value: 'rooom',
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
    img: ProfileImage,
    type: 'location',
    description: '2 стандартный 2-местных номер',
    score: 10,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
  {
    img: ProfileImage,
    type: 'location',
    description: '3 стандартный 2-местных номер',
    score: 10,
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
    score: 10,
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
    description: '5 стандартный 2-местных номер',
    score: 10,
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
    description: '6 стандартный 2-местных номер',
    score: 10,
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
    description: '7 стандартный 2-местных номер',
    score: 10,
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
    description: '8 стандартный 2-местных номер',
    score: 10,
    scoreComment: 'отлично',
    date: 'Ноябрь 2020г',
    advantages:
      'Дружелюбный и компетентный персонал. Хорошая организация заезда и выезда. Услуги такси и хранения багажа при позднем выезде. Хорошая кухня, приятная обстановка в ресторане. Большое спасибо.',
    disadvantages:
      'Такси от гостиницы очень дорого, пришлось брать другого перевозчика.',
  },
];

const computedComments = computed(() => {
  console.log(
    'computedComments',
    comments.filter(comment => comment.type === activeTab.value.value)
  );
  return comments.filter(comment => comment.type === activeTab.value.value);
});
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
