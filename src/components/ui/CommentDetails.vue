<template>
  <div class="card-details">
    <div class="card-details-content">
      <div class="card-details-top">
        <img :src="comment.img" alt="" />
        <div class="card-details-top__desc">
          <h2 class="card-details-top-span_1">
            {{ comment.score + ' ' + comment.scoreComment }}
          </h2>
          <span class="card-details-top-span_2">{{
            comment.date + ', ' + comment.description
          }}</span>
        </div>
      </div>
      <hr />
      <div class="card-details-bottom">
        <div class="card-details-bottom-content">
          <img src="../../assets/img/plus.svg" alt="" width="24" height="24" />
          <p>{{ comment.advantages }}</p>
        </div>
        <div class="card-details-bottom-content">
          <img src="../../assets/img/minus.svg" alt="" />
          <p>{{ comment.disadvantages }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  comment: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.card-details {
  padding: 24px 24px 40px 24px;
  max-width: 744px;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0px 10px 20px 0px rgba(184, 184, 184, 0.25);
  hr {
    border: 1px solid #5047d7;
    opacity: 0.1;
  }
  &-top {
    display: flex;
    padding-bottom: 18px;
    gap: 19px;
    &-span_1 {
      color: #73d771;
      font-family: Ubuntu;
      font-size: 32px;
    }
    &-span_2 {
      font-family: Open Sans;
      font-size: 16px;
      color: #252346;
      opacity: 0.3;
    }
    &__desc {
      display: flex;
      flex-direction: column;
    }
  }
  &-bottom {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    &-content {
      display: flex;
      gap: 37px;
    }
  }
}
</style>