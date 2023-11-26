<template>
  <div class="card-contact">
    <div class="card">
      <p class="card-num">24</p>
      <br />
      <span class="card-desc"
        >ресторана<br /><br />
        поблизости</span
      >
    </div>
    <div class="card">
      <p class="card-num">12</p>
      <br />
      <span class="card-desc"
        >видов <br /><br />
        развлечений</span
      >
    </div>
    <div class="card">
      <p class="card-num">500<span class="card-desc-meter">м</span></p>
      <br />
      <span class="card-desc">до пляжа</span>
    </div>
    <div class="card">
      <p class="card-num">34</p>
      <br />
      <span class="card-desc">баров поблизости</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.card {
  padding-right: 20px;
  &-num {
    font-family: Ubuntu;
    font-size: 76px;
    font-style: normal;
    font-weight: 400;
    // line-height: 184%; /* 139.84px */
    letter-spacing: -1.5px;
  }
  &-contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
  }
  &-desc {
    &-meter {
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>