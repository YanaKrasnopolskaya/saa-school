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
    <div class="perspectives-card__price">
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
  height: 203px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  @include tablet {
    height: 250px;
  }
  @include desktop {
    height: 254px;
  }
  &__desc {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-left: -8px;
    @include tablet {
      gap: 10.65px;
    }
    @include desktop {
      gap: 8px;
    }
  }
  &__desc-name {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 4.32px 8.63px;
    border-radius: 17.27px;
    background: rgba(230, 248, 252, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 22px;
      padding: 5.33px 10.65px;
    }
  }
  &__desc-period {
    color: rgba(90, 118, 130, 1);
    font-size: 18px;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 22px;
    }
  }
  &__line {
    width: 161.3px;
    height: 0;
    transform: rotate(-90.00deg);
    border: 0.8px dashed rgba(210, 218, 221, 1);
    position: relative;
    top: 50px;
    @include tablet {
      width: 199px;
      top: 64px;
    }
    @include desktop {
      width: 194px;
    }
  }
  &__price {
    position: relative;
    width: 100%;
    height: 97px;
    border-radius: 9.73px;
    background: $primary-background-color;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    font-size: 32px;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      top: 3px;
      height: 119px;
      font-size: 40px;
    }
    @include desktop {
      top: -6px;
      height: 115px;
      font-size: 48px;
      letter-spacing: -0.8px;
    }
  }
  &__price-min {
    font-size: 18px;
    @include tablet {
      font-size: 20px;
    }
    @include desktop {
      font-size: 24px;
    }
  }
  &__price-max {
    position: relative;
  }
  &__more-info {
    position: absolute;
    bottom: -20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 2px 10px 2px 10px;
    transform: rotate(-2.47deg);
    border-radius: 300px;
    background: $background-color;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.16);
    @include tablet {
      bottom: -12px;
    }
    @include desktop {
      bottom: -20px;
      right: 14px;
    }
  }
}
.perspectives-card--junior {
  .perspectives-card__desc {
    @include desktop {
      left: 4px;
    }
  }
}
.perspectives-card--middle {
  .perspectives-card__price {
    bottom: 32px;
    @include tablet {
      top: auto;
      bottom: 39px;
    }
    @include desktop {
      bottom: 48px;
      left: -3px;
    }
  }
  .perspectives-card__price-max {
    bottom: 5px;
  }
  .perspectives-card__desc {
    @include desktop {
      left: -3px;
    }
  }
}
.perspectives-card--senior {
  .perspectives-card__price {
    bottom: 70px;
    @include tablet {
      top: auto;
      bottom: 80px;
    }
    @include desktop {
      bottom: 87px;
      left: -4px;
    }
  }
  .perspectives-card__price-max {
    bottom: 5px;
  }
}
</style>