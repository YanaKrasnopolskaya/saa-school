<script setup lang="ts">
import type {Grade} from "@/entities/grade";

const props = defineProps<Grade>()
</script>

<template>
  <div class="perspectives-card" :class="`perspectives-card--${name?.toLowerCase()}`">
    <div class="perspectives-card__desc">
      <p class="perspectives-card__desc-name">{{name}}</p>
      <p class="perspectives-card__desc-period">{{period}}</p>
    </div>
    <div class="perspectives-card__line"></div>
    <div class="perspectives-card__price" :class="`perspectives-card__price-${name?.toLowerCase()}`">
      <span class="perspectives-card__price-min">
        <slot  name="min-price"></slot>
      </span>
      <span class="perspectives-card__price-max">{{maxPrice}}</span>
      <span class="perspectives-card__more-info">
        <slot name="more-info"></slot>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.perspectives-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  &__desc {
    display: flex;
    gap: 8px;
    align-items: center;
    position: relative;
  }
  &__desc-name {
    border-radius: 17.27px;
    background: $primary-background-color;
    color: $text-color;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
    padding: 4px 8px;
    @include tablet-desktop{
      font-size: 1.375rem;
    }
  }
  &__desc-period {
    color: $text-secondary-color;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop{
      font-size: 1.375rem;
    }
  }
  &__line {
    position: absolute;
    top: 42px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: calc(100% - 42px);
    border: 1px dashed rgba(210, 218, 221, 1);
  }
  &__price {
    padding: 30px 25px;
    background: $primary-background-color;
    border-radius: 9.73px;
    color: $text-color;
    font-size: 2rem;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    @include tablet{
      font-size: 2.5rem;
      padding: 42px 30px 32px;
    }
    @include desktop{
      padding: 33px 67px;
      font-size: 3rem;
    }
  }
  &__price-middle,
  &__price-senior {
    padding: 12px 25px;
  }
  &__price-middle {
    @include tablet{
      padding: 20px 30px 19px;
    }
    @include desktop{
      padding: 6px 67px;
    }
  }
  &__price-senior {
    @include tablet{
      padding: 20px 18px 20px;
    }
    @include desktop{
      padding: 6px 53px;
    }
  }
  &__price-min {
    font-size: 1.125rem;
    @include tablet{
      font-size: 1.25rem;
    }
    @include desktop{
      font-size: 1.5rem;
    }
  }
  &__more-info {
    position: absolute;
    bottom: -18px;
    left: 50%;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
    text-align: center;
    transform: translateX(-50%) rotate(-2.47deg);
    border-radius: 300px;
    background: $background-color;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    padding: 2px 10px;
    @include tablet {
      bottom: -6px;
    }
    @include desktop {
      left: auto;
      right: 26px;
      transform: rotate(-2.47deg);
    }
  }
}
.perspectives-card--junior {
  justify-content: space-between;
}
.perspectives-card--middle {
  gap: 44px;
  @include tablet {
    gap: 54px;
  }
  @include desktop {
    gap: 59px;
  }
}
.perspectives-card--senior {
  gap: 10px;
  @include tablet {
    gap: 14px;
  }
  @include desktop {
    gap: 19px;
  }
}
</style>