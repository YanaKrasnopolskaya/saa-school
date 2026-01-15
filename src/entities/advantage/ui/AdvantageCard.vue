<script setup lang="ts">
import type {Advantages} from "@/entities/advantage/model/types/Advantages";

defineProps<Advantages>();
</script>

<template>
  <div class="advantage-card" :class="[{'advantage-card--reversed': reversed, 'advantage-card--horizontal': horizontal}, `advantage-card--${uniqueClass}`]">
    <div class="advantage-card__img-wrapper">
      <img class="advantage-card__img" :src="image.src" :alt="image.alt" :width="image.sizes.mobile.width" :height="image.sizes.mobile.height"/>
    </div>
    <div class="advantage-card__content">
      <h4 class="advantage-card__content-title">{{title}}</h4>
      <slot name="more"></slot>
      <p class="advantage-card__content-description">{{description}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advantage-card {
  padding: 10px 6.19px 24px 7.19px;
  border-radius: 10px;
  box-shadow: 0 8.64px 14.398340225219727px 0 rgba(12, 57, 75, 0.12);
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 91px;
    gap: 8px;
  }
  &__content-title {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
  }
  &__content-description {
    color: rgba(90, 118, 130, 1);
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
  }
}
.advantage-card--horizontal {
  flex-direction: row;
  padding: 13px 24px 12.73px;
  gap: 2px;
}
.advantage-card--horizontal .advantage-card__content{
  width: 218px;
  height: auto;
}
.advantage-card--reversed {
  flex-direction: row-reverse;
}
.advantage-card--group .advantage-card__img {
  @include tablet {
    width: 166px;
    height: 109px;
  }
  @include desktop {
    width: 201px;
    height: 132px;
  }
}
.advantage-card--ai .advantage-card__img {
  @include tablet {
    width: 144px;
    height: 84px;
  }
  @include desktop {
    width: 175px;
    height: 102px;
  }
}
.advantage-card--project .advantage-card__img {
  @include tablet {
    width: 135px;
    height: 103px;
  }
  @include desktop {
    width: 163px;
    height: 124px;
  }
}
.advantage-card--help .advantage-card__img {
  @include tablet {
    width: 97px;
    height: 97px;
  }
  @include desktop {
    width: 117px;
    height: 117px;
  }
}
.advantage-card--certificate .advantage-card__img {
  @include tablet {
    width: 140px;
    height: 114px;
  }
  @include desktop {
    width: 183px;
    height: 150px;
  }
}
</style>