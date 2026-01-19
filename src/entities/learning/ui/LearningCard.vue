<script setup lang="ts">
import type {Learning} from "@/entities/learning/model/types/Learning";

const props = defineProps<Learning>()
</script>

<template>
  <div class="learning-card" :class="[{'learning-card--reverse': reversed}, `learning-card--${classModifiers}`]">
    <div class="learning-card__content">
      <h3 class="learning-card__title" :class="{'learning-card__title--big': bigTitle}" v-html="title"></h3>
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
  width: 313px;
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
    width: 228px;
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
    object-position: top;
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
.learning-card--time .learning-card__img{
  width: 313px;
  height: 260px;
  padding-top: 15px;
  padding-left: 12px;
}
.learning-card--format {
  padding-bottom: 6px;
}
.learning-card--format .learning-card__img{
  width: 276px;
  height: 244px;
  padding-top: 10px;
}
.learning-card--format .learning-card__list-item {
  width: 273px;
}
.learning-card--course .learning-card__content{
  padding-bottom: 0;
}
.learning-card--course .learning-card__list {
  gap: 12px;
}
.learning-card--course .learning-card__list-item {
  font-size: 18px;
  line-height: 23px;
  width: 100%;
}
.learning-card--course .learning-card__img {
  width: 257px;
  height: 236px;
  padding-bottom: 8px;
}
.learning-card--tools {
  padding-bottom: 23px;
}
.learning-card--tools .learning-card__list-item{
  width: 263px;
}
.learning-card--tools .learning-card__img-wrapper {
  padding-top: 40px;
  padding-left: 20px;
}
.learning-card--tools .learning-card__img {
  width: 284px;
  height: 216px;
}
.learning-card--feedback {
  padding-bottom: 6px;
}
.learning-card--feedback .learning-card__list-item {
  width: 270px;
  font-size: 18px;
  line-height: 23px;
}
.learning-card--feedback .learning-card__img-wrapper {
  padding-top: 16px;
}
.learning-card--feedback .learning-card__img {
  width: 278px;
  height: 260px;
}
</style>