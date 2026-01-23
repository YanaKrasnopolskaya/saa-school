<script setup lang="ts">
import {AdvantageCard, ADVANTAGES} from "@/entities/advantage";
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-content__title"><span class="hero-content__title-top">Стань</span> тестировщиком <span class="hero-content__title-accent">за&nbsp;3&nbsp;месяца</span></h1>
        <p class="hero-content__description">Путь в&nbsp;профессию с&nbsp;аккредитованной IT-компанией</p>
      </div>
      <div class="hero-features">
        <AdvantageCard v-for="(card, index) in ADVANTAGES"
                       :title="card.title"
                       :description="card.description"
                       :image="card.image"
                       :differentBg="card.differentBg"
                       :unique-class="card.uniqueClass"
                       :key="index"
                       :horizontal="card.horizontal"
                       :reversed="card.reversed"
                       :class="['hero-features__card', {'hero-features__horizontal': card.horizontal, 'hero-features__reversed': card.reversed}]"
        >
          <template #more v-if="card.uniqueClass == 'group'">
            <span class="hero-features__more"><span class="hero-features__more-point"></span>до 10 человек</span>
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
    padding-top: 140px;
  }
  @include desktop {
    background-image: url("/images/hero-desktop-bg.png");
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    padding-top: 130px;
  }
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include tablet {
    gap: 10px;
  }
  @include desktop {
    gap: 0;
  }
  &__title {
    font-size: 2.25em;
    font-weight: 800;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
    @include tablet {
      font-size: 4.25em;
      margin-bottom: 15px;
    }
    @include desktop {
      font-size: 4.7em;
      line-height: 100%;
      width: 768px;
      margin-bottom: 24px;
    }
  }
  &__title-accent {
    background: $primary-button-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__title-top,
  &__title-accent {
    position: relative;
    left: -7px;
    @include tablet-desktop {
      left: -10px;
    }
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
    background: rgba(230, 248, 252, 0.08) url("/images/hero-description-mobile-bg.svg") no-repeat;
    background-size: 286px;
    @include tablet {
      background-image: url("/images/hero-description-tablet-bg.svg");
      padding: 12px 24px;
      font-size: 1.25em;
      line-height: 25px;
      margin-bottom: 46px;
      max-width: 557px;
    }
    @include desktop {
      width: 545px;
      letter-spacing: -0.5px;
      background-size: 545px;
      margin-bottom: 42px;
    }
  }
}
.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  margin-bottom: -24px;
  @include tablet {
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    margin-bottom: -60px;
  }
  &__more {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding: 2.88px 3.6px;
    border-radius: 8.64px;
    background: rgba(51, 196, 233, 0.12);
    font-size: 12px;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
    color: rgba(31, 130, 155, 1);
    white-space: nowrap;
    @include tablet {
      font-size: 1rem;
      padding: 4px 5px;
    }
  }
  &__more-point {
    display: block;
    width: 8.63px;
    height: 8.65px;
    background: rgba(17, 127, 155, 1);
    border-radius: 50%;
    @include tablet {
      width: 12px;
      height: 12px;
    }
  }
}
</style>