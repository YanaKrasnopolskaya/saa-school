<script setup lang="ts">
const props = defineProps({
  term: String,
  name: String,
  description: String,
})
</script>

<template>
  <div class="course-card">
    <div class="course-card__content">
      <div class="course-card__term-wrapper">
        <svg class="term-icon" width="24" height="24" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#term-icon"></use>
        </svg>
        <span class="course-card__term">{{term}}</span>
      </div>
      <div class="course-card__about">
        <h3 class="course-card__title">{{name}}</h3>
        <p class="course-card__description">{{description}}</p>
      </div>
    </div>
    <div class="course-card__dropdown">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-card {
  border-radius: 16px;
  box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
  background: $background-color;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: flex-start;
  padding: 16px 12px;
  @include desktop {
    flex-direction: row;
    justify-content: space-between;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    @include tablet {
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 36px;
    }
    @include desktop {
      flex-direction: column-reverse;
      max-width: 420px;
      gap: 12px;
      padding: 0 10px;
    }
  }
  &__term-wrapper {
    border-radius: 21.31px;
    background: $primary-background-color;
    padding: 6px 12px 6px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  &__term {
    font-size: 1rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    white-space: nowrap;
  }
  &__about {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 12px 0 0;
    @include tablet {
      gap: 20px;
      margin-bottom: 18px;
    }
  }
  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
  }
  &__description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    max-width: 490px;
    @include desktop {
      max-width: 384px;
    }
  }
  &__dropdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>