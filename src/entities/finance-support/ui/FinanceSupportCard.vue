<script setup lang="ts">
import type {FinanceSupportCardInterface} from "@/entities/finance-support/index.ts";

const props = defineProps<FinanceSupportCardInterface>();
</script>

<template>
  <div class="card">
    <img class="card__img" :src="image.src" :alt="image.alt" />
    <div class="card__info">
      <h3 class="card__info-title">{{title}}</h3>
      <p class="card__info-description">{{description}}</p>
    </div>
    <a class="card__link" href="#" v-if="moreInfo">{{moreInfo}}</a>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 76px 20px 20px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px 0 rgba(0, 44, 62, 0.12);
  background: $background-color;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  align-self: stretch;
  flex: 1;
  @include tablet {
    padding: 83px 30px 30px 30px;
  }
  @include desktop {
     padding: 30px 69px 40px 30px;
  }
  &__img {
    width: 100px;
    height: 98px;
    position: absolute;
    top: -28px;
    right: 0;
    @include tablet {
      width: 113px;
      height: 111px;
    }
    @include desktop {
      width: 128px;
      height: 126px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__info-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0;
    text-align: left;
    max-width: 255px;
  }
  &__info-description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    max-width: 270px;
    @include desktop {
      max-width: 407px;
    }
  }
  &__link {
    font-size: 1rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0;
    text-align: left;
    text-decoration-line: underline;
  }
}
</style>