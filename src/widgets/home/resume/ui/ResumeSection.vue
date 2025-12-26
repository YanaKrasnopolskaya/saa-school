<script setup>
import {ResumeCard, RESUMES} from "@/entities/resume/index.ts";
</script>

<template>
  <section class="resume-section">
    <div class="container">
      <div class="resume-container">
        <h2 class="resume-container__title">Твоё резюме после курса
          <svg class="resume-container__title-icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </h2>
        <ResumeCard v-for="resume in RESUMES"
                    :avatar="resume.avatar"
                    :position="resume.position"
                    :salary="resume.salary"
                    :education="resume.education"
                    :experience="resume.experience"
                    :stacks="resume.stacks" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.resume-container {
  display: flex;
  flex-direction: column;
  gap: 22px;
  @include tablet {
    gap: 48px;
    margin-bottom: 40px;
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
</style>