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
  @include tablet {
    margin: 0 4px;
  }
  @include desktop {
    margin: 0;
  }
  &__points {
    padding: 12px 14px;
    border-bottom: 1px solid rgba(210, 218, 221, 1);
    @include tablet {
      padding: 8px 14px 10px;
    }
    @include desktop {
      padding: 22px 19px 18px;
    }
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
  padding: 0 5px;
  @include tablet {
    flex-direction: row;
    gap: 15px;
  }
  &__description {
    padding: 20px 12px 0 11px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet {
      border-right: 1px solid rgba(217, 217, 217, 1);
      padding: 16px 14px 0 10px;
      gap: 20px;
    }
    @include desktop {
      padding: 32px 58px 102px 52px;
      gap: 17px;
    }
  }
  &__about-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding-bottom: 6px;
    @include tablet {
      flex-direction: column;
      padding-bottom: 0;
    }
  }
  &__about-wrapper img {
    width: 94px;
    height: 94px;
    @include tablet {
      width: 230px;
      height: 230px;
    }
    @include desktop {
      width: 220px;
      height: 220px;
    }
  }
  &__about {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
    @include tablet {
      gap: 16px;
      align-items: center;
    }
    @include desktop {
      gap: 14px;
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
      padding: 16px 12px 24px 0;
    }
    @include desktop {
      gap: 34px;
      padding: 30px 40px 20px 44px;
    }
  }
  &__salary-wrapper {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    @include tablet {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    @include desktop {
      gap: 16px;
    }
  }
  &__text {
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    @include desktop {
      letter-spacing: -0.3px;
    }
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
    @include tablet {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    @include desktop {
      gap: 16px;
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
    @include tablet {
      padding-left: 26px;
    }
    @include desktop {
      padding-left: 28px;
      gap: 17.5px;
    }
  }
  &__experience-item {
    @include desktop {
      font-size: 1.25rem;
    }
  }
  &__experience-item:first-child {
    @include desktop {
      width: 330px;
    }
  }
  &__stack-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    @include desktop {
      gap: 26px;
    }
  }
  &__stack-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    @include tablet {
      gap: 12px 13px;
      padding: 2px 0 0 2px;
    }
    @include desktop {
      padding: 0;
      gap: 11px 9px;
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
      right: -25px;
      width: 154px;
      height: 154px;
      transform: rotate(9deg);
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