<script setup>

import {RESUMES} from "@/entities/resume/index.ts";
</script>

<template>
  <section class="resume-section">
    <div class="container">
      <div class="resume-wrapper">
        <h2 class="resume-wrapper__title">Твоё резюме после курса
          <svg class="learning__title-icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </h2>
        <div class="resume" v-for="resume in RESUMES">
          <div class="resume__points">
            <svg class="learning__title-icon" width="47" height="12" aria-hidden="true">
              <use href="@/app/assets/icons/sprite.svg#points-icon"></use>
            </svg>
          </div>
          <div class="resume__about-wrapper">
            <img :src="resume.avatar" alt="Фото соискателя">
            <div class="resume__about">
              <span class="resume__label">Должность:</span>
              <span class="resume__position-name">{{resume.position}}</span>
            </div>
          </div>
          <div class="resume__info-wrapper">
            <div class="resume__salary-wrapper">
              <span class="resume__label">Зарплатные ожидания:</span>
              <span class="resume__text">{{resume.salary}}</span>
            </div>
            <div class="resume__education-wrapper">
              <span class="resume__label">Образование:</span>
              <span class="resume__text">{{resume.education}}</span>
            </div>
            <div class="resume__experience-wrapper">
              <span class="resume__label">Опыт работы:</span>
              <ul class="resume__experience-list">
                <li v-if="resume.experience" v-for="exp in resume.experience" class="resume__experience-item resume__text">{{exp}}</li>
              </ul>
            </div>
            <div class="resume__stack-wrapper">
              <span class="resume__label">Мой стек:</span>
              <ul class="resume__stack-list">
                <li v-if="resume.stacks" v-for="stack in resume.stacks" class="resume__stack-item">{{stack}}</li>
              </ul>
            </div>
          </div>
          <svg class="resume__icon" width="170" height="150" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#spiral-icon"></use>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.resume-section {
  padding: 36px 0;
}
.resume-wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
  &__title {
    width: 70%;
    position: relative;
    padding: 0 16px;
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      width: fit-content;
      display: inline-block;
      font-size: 2.5rem;
      line-height: 50px;
    }
    @include desktop {
      font-size: 3rem;
      line-height: 60px;
    }
  }
  &__title svg {
    position: absolute;
    top: -10px;
    right: -30px;
    @include tablet {
      width: 60px;
      height: 60px;
      right: -70px;
    }
    @include desktop {
      width: 66px;
      height: 66px;
    }
  }
}
.resume {
  border-radius: 12px;
  box-shadow: 0 8px 20px 0 rgba(0, 44, 62, 0.12);
  background: $background-color;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  &__points {
    padding: 16px 12px;
    border-bottom: 1px solid rgba(210, 218, 221, 1);
  }
  &__points svg {
    width: 47px;
    height: 12px;
    @include tablet-desktop {
      width: 64px;
      height: 17px;
    }
  }
  &__about-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 20px 12px 26px;
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
  }
  &__salary-wrapper {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
  }
  &__text {
    font-size: 1rem;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
  &__education-wrapper {
    display: flex;
    gap: 8px;
    justify-content: flex-start;
  }
  &__experience-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
  }
  &__stack-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
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
  }
  &__icon {
    position: absolute;
    bottom: -30px;
    right: -30px;
  }
}
</style>