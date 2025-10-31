<script setup lang="ts">
const props = defineProps({
  name: String,
  period: String,
  minPrice: String,
  maxPrice: String
})
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
      <p class="perspectives-card__price-max">{{maxPrice}}</p>
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
  }
  &__desc-period {
    color: $text-secondary-color;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
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
    position: relative;
    z-index: 1;
    width: 100%;
  }
  &__price-middle,
  &__price-senior {
    padding: 19px 25px;
  }
  &__price-min {
    font-size: 1.125rem;
  }
}
.perspectives-card--junior {
  justify-content: space-between;
}
.perspectives-card--middle {
  gap: 54px;
}
.perspectives-card--senior {
  gap: 14px;
}
</style>