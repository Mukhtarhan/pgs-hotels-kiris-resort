<template>
  <div class="comment-list">
    <CommentDetails
      v-for="comment in displayedComments"
      :key="comment"
      :comment="comment"
      :advantages="comment.advantages"
      :disadvantages="comment.disadvantages"
      :description="comment.description"
      :img="comment.img"
      :score="comment.score"
      :date="comment.date"
      :score-comment="comment.scoreComment"
    />
    <button v-if="comments.length > 3" @click="toggle" class="btn">
      {{ showMore ? 'Посмотреть все отзывы' : 'Cкрыть отзывы' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CommentDetails from './ui/CommentDetails.vue';

const props = defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
});

const showMore = ref(true);
const displayedComments = computed(() => {
  const comments = [...props.comments];
  if (showMore.value) return comments.slice(0, 3);
  return comments;
});

function toggle() {
  showMore.value = !showMore.value;
  console.log('toggle', showMore.value);
}
</script>

<style lang="scss" scoped>
.comment-list {
  gap: 16px;
  margin-bottom: 162px;
}
</style>
