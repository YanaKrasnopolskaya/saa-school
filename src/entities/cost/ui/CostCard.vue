<script setup lang="ts">
import type {CostCardInterface} from "@/entities/cost";

const props = defineProps<CostCardInterface>();
</script>

<template>
  <div class="cost-card" :class="{'cost-card--unique' : unique}">
    <div class="cost-card__info">
      <h3 class="cost-card__info-title">{{name}}</h3>
      <p class="cost-card__text">{{description}}</p>
    </div>
    <div class="cost-card__price-wrapper">
      <span class="cost-card__price">{{price}}
        <span class="cost-card__text cost-card__text--price">{{priceDesc}}</span>
      </span>
      <span class="cost-card__text">{{discount}}<b>{{discountedPrice}}</b></span>
    </div>
    <slot name="cost-button"></slot>
    <ul class="cost-card__list">
      <li class="cost-card__list-item" v-for="item in about">{{item}}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.cost-card {
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid rgba(235, 235, 235, 1);
  border-radius: 12px;
  box-shadow: 0 8px 20px 0 rgba(0, 44, 62, 0.12);
  background: $background-color;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @include tablet {
    flex: 0 0 496px;
    padding: 40px;
    gap: 50px;
  }
  @include desktop {
    padding: 36px 36px;
    flex: 1;
    gap: 47px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @include tablet {
      gap: 12px;
    }
  }
  &__info-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0;
    text-align: left;
    @include desktop {
      letter-spacing: -0.6px;
    }
  }
  &__text {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    color: $text-secondary-color;
    @include desktop {
      letter-spacing: -0.25px;
    }
  }
  &__text--price {
    @include tablet {
      margin-top: 11px;
    }
    @include desktop {
      margin-top: 10px;
    }
  }
  &__text b {
    display: block;
    color: $text-color;
    @include tablet-desktop {
      display: inline-block;
    }
  }
  &__price-wrapper {
    display: flex;
    flex-direction: column;
    gap: 22px;
    @include tablet {
      gap: 23px;
    }
    @include desktop {
      gap: 21px;
    }
  }
  &__price {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 3rem;
    }
    @include desktop {
      letter-spacing: -0.8px;
    }
  }
  &__price span {
    display: block;
  }
  &__list {
    list-style-type: disc;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    @include desktop {
      gap: 7px;
    }
  }
  &__list-item {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    @include desktop {
      letter-spacing: -0.3px;
    }
  }
}
.cost-card--unique {
  background: linear-gradient(162.76deg, rgba(176, 224, 255, 0.5),rgba(176, 255, 245, 0.5) 100%);
}
</style>