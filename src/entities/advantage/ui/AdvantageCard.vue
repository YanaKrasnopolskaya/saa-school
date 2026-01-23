<script setup lang="ts">
import type {Advantages} from "@/entities/advantage/model/types/Advantages";

defineProps<Advantages>();
</script>

<template>
  <div class="advantage-card" :class="[`advantage-card--${uniqueClass}`, {'advantage-card--reversed' : reversed, 'advantage-card--horizontal' : horizontal, 'advantage-card--bg' : differentBg}]">
    <div class="advantage-card__img-wrapper">
      <img class="advantage-card__img" :src="image.src" :alt="image.alt" />
    </div>
    <div class="advantage-card__content">
      <h3 class="advantage-card__title" v-html="title"></h3>
      <slot name="more"></slot>
      <p class="advantage-card__description" v-html="description"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advantage-card {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 8.64px 14.398340225219727px 0 rgba(12, 57, 75, 0.12);
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 6.19px 21px 7.19px;
  @include tablet {
    padding: 14px 10px 8px 10px;
    grid-column: span 2;
  }
  @include desktop {
    padding: 20px 30px 20px;
    height: 310px;
  }
  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 87.25px;
    @include tablet {
      width: 166px;
      height: 121px;
    }
    @include desktop {
      width: 201px;
      height: 140px;
    }
  }
  &__img {
    position: relative;
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    @include tablet {
      gap: 11px;
    }
    @include desktop {

    }
  }
  &__title {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
    @include tablet {
      font-size: 1.25rem;
      line-height: 25px;
    }
    @include desktop {
      font-size: 1.5rem;
      line-height: 30px;
      width: 240px;
    }
  }
  &__description {
    position: relative;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0;
    text-align: center;
    color: $text-secondary-color;
    @include tablet-desktop {
      font-size: 1rem;
      line-height: 112%;
    }
  }
}
.advantage-card--horizontal {
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 14px 24px 10px 34px;
  grid-column: span 2;
  height: 100px;
  @include tablet {
    flex-direction: column;
    height: auto;
    padding: 0 24px 15px 24px;
    grid-column: span 3;
    align-items: center;
  }
  @include desktop {
    flex-direction: row;
    padding: 0 24px 30px 24px;
  }
}
.advantage-card--horizontal .advantage-card__img-wrapper {
  height: auto;
  flex: 1;
}
.advantage-card--horizontal .advantage-card__content {
  width: 218px;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 10px;
  flex-shrink: 0;
  @include tablet {
    width: 292px;
    padding-top: 0;
    gap: 10px;
  }
}
.advantage-card--reversed {
  flex-direction: row-reverse;
  padding: 13px 24px 12.73px 24px;
  gap: 10px;
  @include tablet {
    flex-direction: column;
    align-items: center;
    padding: 13px 24px 15px 24px;
  }
  @include desktop {
    flex-direction: row-reverse;
  }
}
.advantage-card--reversed .advantage-card__content {
  padding-top: 8px;
  @include tablet {
    padding-top: 0;
  }
  @include desktop {
    left: 13px;
  }
}
.advantage-card--reversed .advantage-card__description {
  top: 2px;
  left: 1px;
  letter-spacing: 0.1px;
}
.advantage-card--group .advantage-card__img{
  width: 120px;
  height: 79px;
  top: -3px;
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
  width: 104px;
  height: 61px;
  top: -3px;
  @include tablet {
    width: 144px;
    height: 84px;
  }
  @include desktop {
    width: 175px;
    height: 102px;
  }
}
.advantage-card--ai .advantage-card__description {
  @include tablet {
    top: 2px;
  }
}
.advantage-card--project .advantage-card__img {
  width: 100px;
  height: 90px;
  left: 6px;
  @include tablet {
    top: 8px;
    width: 155px;
    height: 123px;
  }
  @include desktop {
    width: 183px;
    height: 144px;
    top: 4px;
    left: 0;
  }
}
.advantage-card--project {
  @include tablet {
    grid-column: span 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 10px 34px 10px;
    & .advantage-card__content {
      gap: 12px;
      width: 218px;
    }
  }
  @include desktop {
    padding: 20px 30px 36px;
    height: 310px;
    & .advantage-card__content {
      gap: 10px;
      width: 300px;
    }
  }
}
.advantage-card--help .advantage-card__img {
  width: 78px;
  height: 78px;
  @include tablet {
    width: 97px;
    height: 97px;
  }
  @include desktop {
    top: 3px;
    left: 20px;
    width: 117px;
    height: 117px;
  }
}
.advantage-card--certificate .advantage-card__img {
  width: 96px;
  height: 81px;
  left: -3px;
  @include tablet {
    top: 6px;
    left: 3px;
    width: 140px;
    height: 114px;
  }
  @include desktop {
    top: 20px;
    left: -3px;
    width: 183px;
    height: 150px;
  }
}
.advantage-card--certificate .advantage-card__content {
  gap: 12px;
  left: -8px;
  @include tablet {
    top: 2px;
    left: 0;
    gap: 14px;
  }
  @include desktop {
    top: 15px;
    left: -13px;
  }
}
.advantage-card--bg {
  background: $primary-background-color;
}
</style>