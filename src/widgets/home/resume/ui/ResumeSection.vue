<script setup>
import {ResumeCard, RESUMES} from "@/entities/resume/index.ts";
</script>

<template>
  <section class="resume-section">
    <div class="container">
      <div class="resume">
        <h2 class="resume__title">Твоё резюме после курса
          <svg class="resume__title-icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </h2>
        <ResumeCard v-for="resume in RESUMES"
                    :avatar="resume.avatar"
                    :position="resume.position"
                    :salary="resume.salary"
                    :education="resume.education"
                    :experience="resume.experience"
                    :stacks="resume.stacks"
                    class="resume__card"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.resume-section {
  padding: 28px 0 40px;
  @include tablet {
    padding: 46px 12px 40px;
  }
  @include desktop {
    padding: 93px 65px 40px;
  }
}
.resume {
  display: flex;
  flex-direction: column;
  gap: 21px;
  @include tablet {
    gap: 48px;
  }
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
      padding: 0;
    }
    @include desktop {
      font-size: 3rem;
      line-height: 60px;
      letter-spacing: -0.8px;
    }
  }
  &__title svg {
    position: absolute;
    top: -5px;
    right: -30px;
    @include tablet {
      width: 70px;
      height: 70px;
      right: -86px;
      top: -14px;
    }
    @include desktop {
      width: 70px;
      height: 70px;
    }
  }
}
</style>