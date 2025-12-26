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
        <div class="questions__cards">
          <AppDropdown v-for="question in QUESTIONS" :label="question.question" class="questions__list">
            <template #dropdown-text>
              <p class="questions__answer">{{question.answer}}</p>
            </template>
          </AppDropdown>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.questions-section {
  padding: 40px 4px;
  @include tablet {
    padding: 10px 60px 60px;
  }
}
.questions {
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: flex-start;
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
      padding-left: 41px;
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
      width: 60px;
      height: 60px;
    }
    @include desktop {
      width: 66px;
      height: 66px;
      right: -30px;
    }
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    @include desktop {
      flex-direction: row;
    }
  }
  &__list {
    flex: 0 0 48%;
  }
  &__answer {
    margin-left: -30px;
  }
}
</style>