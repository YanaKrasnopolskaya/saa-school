<script setup lang="ts">
import AppDropdown from "@/shared/ui/dropdown/ui/AppDropdown.vue";
import {QUESTIONS} from "@/entities/questions";
</script>

<template>
  <section class="questions-section">
    <div class="container">
      <div class="questions">
        <h2 class="questions__title">Отвечаем на&nbsp;вопросы
          <svg class="questions__title-icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </h2>
        <div class="questions__cards-wrapper">
          <div class="cards-top">
            <AppDropdown v-for="(question, index) in QUESTIONS.slice(0, 4)" :label="question.question" class="questions__list" :class="`item-${index}`">
              <template #dropdown-text>
                <p class="questions__answer">{{question.answer}}</p>
              </template>
            </AppDropdown>
          </div>
          <div class="cards-bottom">
            <AppDropdown v-for="(question, index) in QUESTIONS.slice(4)" :label="question.question" class="questions__list" :class="`item-${index}`">
              <template #dropdown-text>
                <p class="questions__answer">{{question.answer}}</p>
              </template>
            </AppDropdown>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.questions-section {
  padding: 55px 4px 40px;
  @include tablet {
    padding: 46px 56px 90px 50px;
  }
  @include desktop {
    padding: 0;
    margin: 78px 26px 66px;
  }
}
.questions {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: flex-start;
  @include desktop {
    gap: 70px;
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    padding-left: 12px;
    max-width: 192px;
    position: relative;
    @include tablet {
      max-width: 460px;
      font-size: 2.5rem;
      padding-left: 0;
    }
    @include desktop {
      font-size: 3rem;
      letter-spacing: -0.9px;
      padding-left: 38px;
      max-width: 630px;
    }
  }
  &__title-icon {
    position: absolute;
    width: 48px;
    height: 48px;
    bottom: 0;
    right: -70px;
    @include tablet {
      width: 68px;
      height: 68px;
      bottom: -12px;
    }
    @include desktop {
      width: 76px;
      height: 76px;
      right: -15px;
    }
  }
  &__cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12.5px;
    align-items: flex-start;
    @include tablet {
      margin-left: 8px;
      gap: 10px;
    }
    @include desktop {
      flex-direction: row;
      margin-left: 0;
    }
  }
  &__list {
    :deep(.dropdown__button span) {
      width: 600px;
    }
    @include desktop {
      :deep(.dropdown) {
        width: 548px;
      }

    }
  }
  &__answer {
    font-size: 1rem;
    font-weight: 500;
    line-height: 112%;
    width: 283px;
    margin-left: -30px;
    @include tablet {
      width: 480px;
    }
    @include desktop {
      letter-spacing: -0.3px;
    }
  }
}
.cards-top,
.cards-bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12.5px;
  @include desktop {
    flex: 1;
    width: 530px;
    :deep(.dropdown) {
      padding: 13px 14px 16px 15px;
    }
    :deep(.dropdown__content) {
      padding: 14px 0 0 30px;
    }
    :deep(.dropdown__icon-rotated) {
      top: 2px;
      left: -2px;
    }
  }
}
</style>