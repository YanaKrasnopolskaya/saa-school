<script setup lang="ts">
import AdvantageCard from "../../../../entities/advantage/ui/AdvantageCard.vue";
import {ADVANTAGES} from "@/entities/advantage/model/const/ADVANTAGES";
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-content__title">Стань тестировщиком <span class="hero-content__title-accent">за&nbsp;3&nbsp;месяца</span></h1>
        <p class="hero-content__description">Путь в&nbsp;профессию с&nbsp;аккредитованной IT-компанией</p>
      </div>
      <div class="hero-features">
        <AdvantageCard v-for="(card, index) in ADVANTAGES"
                        :key="index"
                        class="hero-features__item"
                        :class="{'hero-features__item-horizontal': card.horizontal, 'hero-features__item--different-bg': card.differentBg}"
                        :title="card.title"
                        :description="card.description"
                        :reversed="card.reversed"
                        :horizontal="card.horizontal"
        >
          <template #image>
            <img class="hero-features__img" :src="card.image.src" :alt="card.image.alt" :width="card.image.width" :height="card.image.height"/>
          </template>
          <template #more v-if="card.more">
            <span class="hero-features__more">{{card.more}}</span>
          </template>
        </AdvantageCard>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  background-image: url("/images/hero-mobile-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 89px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  @include tablet {
    background-image: url("/images/hero-tablet-bg.png");
  }
  @include desktop {
    background-image: url("/images/hero-desktop-bg.png");
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }
  @include tablet-desktop {
    padding-top: 140px;
  }
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 2.25em;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
    @include tablet {
      font-size: 4.25em;
    }
    @include desktop {
      font-size: 4.875em;
    }
    @include tablet-desktop {
      font-weight: 800;
      margin-bottom: 24px;
    }
  }
  &__title-accent {
    background: $primary-button-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__description {
    color: rgba(255, 255, 255, 1);
    font-size: 0.875em;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
    border-radius: 39px;
    padding: 6px 20px;
    margin-bottom: 36px;
    max-width: 286px;
    background: rgba(230, 248, 252, 0.08);
    background-image: url("/images/hero-description-mobile-bg.svg");
    background-size: cover;
    @include tablet-desktop {
      background-image: url("/images/hero-description-tablet-bg.svg");
      padding: 12px 24px;
      font-size: 1.25em;
      line-height: 25px;
      max-width: 560px;
      margin-bottom: 46px;
    }
  }
}
.hero-features {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  margin-bottom: -36px;
  @include tablet {
    margin-bottom: -30px;
  }
  @include desktop {
    margin-bottom: -94px;
  }
  @include tablet-desktop {
    grid-template-columns: repeat(6, 1fr);
    &__item {
      grid-column: span 2;
    }
    &__item-horizontal:nth-child(3) {
      grid-column: span 2;
      flex-direction: column !important;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__item-horizontal {
    grid-column: span 2;
    @include tablet-desktop {
      grid-column: span 3;
    }
  }
  &__item--different-bg {
    background: $primary-background-color !important;
  }
  &__more {
    position: relative;
    display: block;
    padding: 3px 4px 3px 17px;
    border-radius: 8.64px;
    background: rgba(51, 196, 233, 0.12);
    color: rgba(31, 130, 155, 1);
    font-size: 0.75em;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
    @include tablet-desktop {
      font-size: 1em;
    }
  }
  &__more:after {
    content: "";
    position: absolute;
    width: 8.63px;
    height: 8.65px;
    background: rgba(17, 127, 155, 1);
    border-radius: 50%;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
  }
}
</style>