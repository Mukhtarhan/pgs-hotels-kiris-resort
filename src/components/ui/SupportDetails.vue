<template>
  <div class="support-details">
    <div class="support-details-question">
      <p>{{ question.content }}</p>
      <img
        src="../../assets/img/circle-plus.svg"
        alt="plus"
        v-if="!isOpened"
        @click="toggle"
      />
      <img
        src="../../assets/img/circle-minus.svg"
        alt="minus"
        v-else
        @click="toggle"
      />
    </div>
    <div class="support-details-answer" v-if="isOpened">
      {{ question.answer }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  question: {
    type: Object,
    default: () => {},
  },
});

const isOpened = ref(false);
function toggle() {
  isOpened.value = !isOpened.value;
}
</script>

<style lang="scss" scoped>
.support-details {
  max-width: 744px;
  border-radius: 12px;
  margin-bottom: 16px;
  color: #252346;
  background: #fff;
  font-family: Open Sans;
  font-size: 18px;
  box-shadow: 0px 0px 28px 0px rgba(34, 30, 94, 0.12);
  padding: 16px 24px 16px 28px;
  &-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
      &:focus {
        opacity: 0.7;
      }
    }
  }
  &-answer {
    margin-top: 10px;
    padding-top: 16px;
    border-top: 1px solid #eee;
    font-size: 15px;
  }
}
</style>