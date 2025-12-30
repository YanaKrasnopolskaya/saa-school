<script setup lang="ts">
import type {Learning} from "@/entities/learning/model/types/Learning";

const props = defineProps<Learning>()
</script>

<template>
  <div class="learning-card" :class="{'learning-card--reverse': reversed}">
    <div class="learning-card__content">
      <h3 class="learning-card__title" :class="{'learning-card__title--big': bigTitle}">{{title}}</h3>
      <slot name="top"></slot>
      <ul class="learning-card__list">
        <li class="learning-card__list-item" v-for="item in description" v-html="item"></li>
      </ul>
      <slot name="bottom"></slot>
    </div>
    <div class="learning-card__img-wrapper">
      <img class="learning-card__img" :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learning-card {
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(240, 243, 244, 1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  @include tablet-desktop {
    flex-direction: row;
    padding-bottom: 0;
  }
  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 20px 20px 12px 20px;
    @include tablet {
      padding: 30px 30px 20px;
      gap: 24px;
    }
    @include desktop {
      gap: 20px;
      padding: 40px;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 24px;
      line-height: 30px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    @include tablet {
      gap: 10px;
    }
  }
  &__list li::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    border-radius: 50%;
    background: $secondary-color;
    width: 14px;
    height: 14px;
  }
  &__list-item {
    position: relative;
    padding-left: 27px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.125rem;
      line-height: 23px;
      padding: 0 16px 0 27px;
    }
    @include desktop {
      line-height: 25px;
    }
  }
  &__img-wrapper {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(50.00% 50.00% at 50% 50%, rgba(244, 249, 250, 1), rgba(244, 249, 250, 0.51) 100%);
    @include tablet {
      width: 351px;
      padding: 20px 30px;
    }
    @include desktop {
      width: 513px;
      padding: 20px 30px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-position: center;
    display: block;
    object-fit: contain;
  }
}
.learning-card--reverse {
  @include tablet-desktop {
    flex-direction: row-reverse;
  }
}
.learning-card__title--big {
  font-size: 24px;
  line-height: 30px;
}
</style>