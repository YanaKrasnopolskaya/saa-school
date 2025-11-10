<script setup lang="ts">
import {perspectivesCards} from "~/composables/constants/perspectivesCards";
</script>

<template>
  <section class="section-perspectives">
    <div class="container">
      <div class="perspectives">
        <div class="perspectives__content">
          <h2 class="perspectives__title">Какие перспективы?</h2>
          <div class="perspectives__hh-wrapper">
            <div class="perspectives__hh">
              <span class="perspectives__hh-num">+ 7000</span>
              <div class="perspectives__hh-desc">
                <svg class="perspectives__hh-icon" width="34" height="34" aria-hidden="true">
                  <use href="assets/images/sprite.svg#hh-icon"></use>
                </svg>
                <span class="perspectives__hh-text">активных<br>вакансий на&nbsp;hh.ru</span>
              </div>
              <svg class="perspectives__mark-icon" width="69" height="71" aria-hidden="true">
                <use href="assets/images/sprite.svg#excl-mark-icon"></use>
              </svg>
            </div>
            <svg class="perspectives__hh-desc-icon" width="34" height="34" aria-hidden="true">
              <use href="assets/images/sprite.svg#swiper-icon"></use>
            </svg>
          </div>
        </div>
        <div class="perspectives__card-wrapper">
          <UiPerspectivesCard class="perspectives__card" v-for="(card, index) in perspectivesCards"
                              :key="index"
                              :name="card.name"
                              :period="card.period"
                              :minPrice="card.minPrice"
                              :maxPrice="card.maxPrice"
          >
            <template #min-price v-if="card.minPrice">{{ card.minPrice }}</template>
            <template v-if="card.name.toLowerCase() === 'senior'" #more-info>и&nbsp;это не&nbsp;предел</template>
          </UiPerspectivesCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.perspectives {
  width: 100%;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @include tablet {
    padding: 40px 24px;
  }
  @include desktop {
    padding: 70px 64px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 23px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    @include tablet {
      justify-content: space-between;
      flex-direction: row;

    }
    @include desktop {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 2.5rem;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__hh-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @include tablet {
      width: auto;
    }
  }
  &__hh {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding: 8px 12px;
    border-radius: 12px;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    background: $background-color;
    @include tablet-desktop {
      flex-direction: row;
      padding: 16px 24px;
      align-items: center;
    }
  }
  &__hh-num {
    font-size: 2rem;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    white-space: nowrap;
    @include tablet {
      font-size: 2.25rem;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__hh-desc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    max-width: 207px;
    flex-direction: row;
    @include tablet-desktop {
      flex-direction: row-reverse;
    }
  }
  &__hh-text {
    color: $text-secondary-color;
    font-size: 1rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
  }
  &__mark-icon {
    position: absolute;
    top: -15px;
    right: 0;
    @include tablet {
      transform: rotate(-28.75deg);
      top: -20px;
      left: -34px;
    }
  }
  &__hh-desc-icon {
    @include tablet-desktop {
      display: none;
    }
  }
  &__card-wrapper {
    display: flex;
    gap: 8px;
    height: 204px;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    position: relative;
    left: 50%;
    right: 50%;
    padding: 0 30px;
    overflow-x: auto; // горизонтальный скролл
    scroll-behavior: smooth; // плавный скролл по пользовательскому свайпу
    &::-webkit-scrollbar {
      display: none; // скрываем скроллбар
    }
    @include tablet-desktop {
      overflow: visible;
      justify-content: center;
      height: 255px;
    }
  }
  &__card {
    flex: 0 0 60%; // ширина карточки относительно контейнера
    scroll-snap-align: start; // каждая карточка прилипает к началу
    @include tablet-desktop {
      flex: auto;
      max-width: 334px;
    }
  }
}
</style>