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
        <h3 class="course-card__title" v-html="name"></h3>
        <p class="course-card__description" v-html="description"></p>
      </div>
    </div>
    <div class="course-card__dropdown">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course-card {
  width: 339px;
  border-radius: 16px;
  box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
  background: $background-color;
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: flex-start;
  padding: 15px 12px 20px;
  @include tablet {
    width: 100%;
    gap: 51px;
    padding: 15px 16px 16px 20px;
  }
  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    gap: 17px;
    padding: 13px 16px 16px 10px;
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
      gap: 34px;
      padding: 0 10px;
    }
  }
  &__term-wrapper {
    position: relative;
    border-radius: 21.31px;
    background: $primary-background-color;
    padding: 6px 12px 6px 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    @include desktop {
      top: 3px;
    }
  }
  &__term {
    font-size: 1rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    white-space: nowrap;
    @include desktop {
      letter-spacing: -0.3px;
    }
  }
  &__about {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @include tablet {
      gap: 15px;

    }
  }
  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include desktop {
      letter-spacing: -0.4px;
    }
  }
  &__description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 113%;
    letter-spacing: 0;
    text-align: left;
    max-width: 490px;
    @include desktop {
      max-width: 370px;
      letter-spacing: -0.3px;
    }
  }
  &__dropdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include tablet {
      gap: 18px;
    }
    @include desktop {
      gap: 14px;
    }
  }
}
</style>