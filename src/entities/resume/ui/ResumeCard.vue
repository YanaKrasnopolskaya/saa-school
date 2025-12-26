<script setup lang="ts">
import type {Resume} from "@/entities/resume/index.ts";

const props = defineProps<Resume>();
</script>

<template>
    <div class="resume-wrapper">
      <div class="resume-wrapper__points">
        <svg class="learning__title-icon" width="47" height="12" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#points-icon"></use>
        </svg>
      </div>
      <div class="resume">
        <div class="resume__description">
          <div class="resume__about-wrapper">
            <img :src="avatar" alt="Фото соискателя">
            <div class="resume__about">
              <span class="resume__label">Должность:</span>
              <span class="resume__position-name">{{position}}</span>
            </div>
          </div>
          <div class="resume__salary-wrapper">
            <span class="resume__label">Зарплатные ожидания:</span>
            <span class="resume__text">{{salary}}</span>
          </div>
          <div class="resume__education-wrapper">
            <span class="resume__label">Образование:</span>
            <span class="resume__text resume__text--center">{{education}}</span>
          </div>
        </div>
        <div class="resume__info-wrapper">
          <div class="resume__experience-wrapper">
            <span class="resume__label">Опыт работы:</span>
            <ul class="resume__experience-list">
              <li v-for="exp in experience" class="resume__experience-item resume__text">{{exp}}</li>
            </ul>
          </div>
          <div class="resume__stack-wrapper">
            <span class="resume__label">Мой стек:</span>
            <ul class="resume__stack-list">
              <li v-for="stack in stacks" class="resume__stack-item">{{stack}}</li>
            </ul>
          </div>
        </div>
      </div>
      <svg class="resume__icon" width="120" height="120" aria-hidden="true">
        <use href="@/app/assets/icons/sprite.svg#spiral2-icon"></use>
      </svg>
    </div>
</template>

<style scoped lang="scss">
.resume-wrapper {
  border-radius: 12px;
  box-shadow: 0 8px 20px 0 rgba(0, 44, 62, 0.12);
  background: $background-color;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 0 6px;
  &__points {
    padding: 12px 14px;
    border-bottom: 1px solid rgba(210, 218, 221, 1);
  }
  &__points svg {
    width: 47px;
    height: 12px;
    @include tablet-desktop {
      width: 64px;
      height: 18px;
    }
  }
}
.resume {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @include tablet-desktop {
    flex-direction: row;
  }
  &__description {
    padding: 20px 12px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet {
      border-right: 1px solid rgba(217, 217, 217, 1);
      padding: 16px 16px 0;
    }
    @include desktop {
      padding: 32px 56px 108px;
    }
  }
  &__about-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-bottom: 6px;
    @include tablet-desktop {
      flex-direction: column;
    }
  }
  &__about-wrapper img {
    width: 94px;
    height: 94px;
    @include tablet-desktop {
      width: 230px;
      height: 230px;
    }
  }
  &__about {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
    @include tablet-desktop {
      align-items: center;
    }
  }
  &__label {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    color: $text-secondary-color;
  }
  &__position-name {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 12px 20px;
    @include tablet {
      padding: 17px 12px 15px 15px;
    }
    @include desktop {
      padding: 32px 59px;
      gap: 36px;
    }
  }
  &__salary-wrapper {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    @include tablet-desktop {
      flex-direction: column;
      align-items: center;
    }
  }
  &__text {
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
  &__text--center {
    @include tablet-desktop {
      text-align: center;
    }
  }
  &__education-wrapper {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    @include tablet-desktop {
      flex-direction: column;
      align-items: center;
    }
  }
  &__experience-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include desktop {
      gap: 26px;
    }
  }
  &__experience-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style-type: disc;
    padding-left: 24px;
  }
  &__stack-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    @include tablet {
      padding: 0 20px 0 0;
    }
    @include desktop {
      gap: 26px;
      width: 90%;
    }
  }
  &__stack-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    @include tablet {
      gap: 12px;
    }
  }
  &__stack-item {
    padding: 8px 18px;
    background: $primary-background-color;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 1rem;
      line-height: 20px;
    }
  }
  &__icon {
    position: absolute;
    bottom: -40px;
    right: -6px;
    @include tablet {
      bottom: -90px;
      right: -10px;
      width: 144px;
      height: 144px;
    }
    @include desktop {
      width: 187px;
      height: 187px;
      top: 10px;
      right: -50px;
      transform: rotate(90deg);
    }
  }
}
</style>