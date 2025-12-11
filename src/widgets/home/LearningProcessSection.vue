<script setup>
import LearningCard from "@/entities/LearningCard.vue";
import {LearningCards} from "@/shared/const/learningCards.ts";
import {ClassModifier} from "@/shared/const/enams.ts";
</script>

<template>
  <section class="section-learning">
    <div class="container">
      <div class="learning">
        <div class="learning__title-wrapper">
          <h2 class="learning__title">Как проходит обучение</h2>
          <svg class="learning__title-icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </div>
        <LearningCard v-for="(card, index) in LearningCards"
                      :key="index"
                      :title="card.title"
                      :description="card.description"
                      :image="card.image"
                      :reversed="card.reversed"
        >
          <template #top v-if="card.classModifiers && card.classModifiers === ClassModifier.Time">
            <div class="learning__additional-top">
              <span class="learning__additional-top-text">6-8 часов <b>в неделю</b></span>
              <span class="learning__additional-top-svg">
                это реально не много
                <svg class="learning__additional-top-icon" width="15" height="16" aria-hidden="true">
                  <use href="@/app/assets/icons/sprite.svg#blot-icon"></use>
                </svg>
              </span>
            </div>
          </template>
          <template #bottom v-else-if="card.classModifiers && card.classModifiers === ClassModifier.Course">
            <div class="learning__additional-bottom">
              <span class="learning__additional-bottom-svg">
                Доступ ко всем материалам останется у тебя и после курса
                <svg width="47" height="45" aria-hidden="true">
                  <use href="@/app/assets/icons/sprite.svg#paperclip-icon"></use>
                </svg>
              </span>
              <span class="learning__additional-bottom-text">на 6 месяцев</span>
            </div>
          </template>
        </LearningCard>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-learning {
  padding: 40px 17px;
}
.learning {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @include tablet {
    gap: 28px;
  }
  @include desktop {
    gap: 61px;
  }
  &__title-wrapper {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 11px;
    @include tablet-desktop {
      gap: 16px;
    }
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    max-width: 228px;
    @include tablet {
      font-size: 2.5rem;
      max-width: 476px;
    }
    @include desktop {
      font-size: 3rem;
      max-width: 571px;
    }
  }
  &__title-icon {
    @include tablet {
      width: 60px;
      height: 60px;
    }
    @include desktop {
      width: 68px;
      height: 68px;
    }
  }
  &__additional-top {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    margin-top: -8px;
    @include desktop {
      flex-direction: row;
      gap: 8px;
      margin-top: -2px;
    }
  }
  &__additional-top-text {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 1.25rem;
      line-height: 25px;
    }
  }
  &__additional-top-svg {
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 2px 10px 2px 10px;
    border-radius: 300px;
    background: rgba(230, 248, 252, 1);
    transform: rotate(-2.47deg);
    margin-left: 36px;
    @include desktop {
      margin-left: 0;
    }
  }
  &__additional-top-svg svg {
    position: absolute;
    top: -6px;
    right: -6px;
  }
  &__additional-bottom {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    @include tablet {
      position: absolute;
      bottom: -50px;
    }
    @include desktop {
      position: relative;
      align-self: flex-end;
      bottom: 0;
    }
  }
  &__additional-bottom-svg {
    display: flex;
    position: relative;
    z-index: 1;
    border-radius: 6.56px;
    background: rgba(230, 248, 252, 1);
    transform: rotate(2.43deg);
    padding: 12px 16px;
    max-width: 285px;
  }
  &__additional-bottom-svg svg {
    position: absolute;
    top: -20px;
    right: -5px;
  }
  &__additional-bottom-text {
    position: absolute;
    bottom: -15px;
    right: 43px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 2px 10px 2px 10px;
    border-radius: 300px;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    background: $background-color;
    transform: rotate(-1.40deg);
    max-width: 128px;
    z-index: 2;
  }
}
</style>