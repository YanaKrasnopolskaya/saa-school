<script setup lang="ts">
import CourseCard from "../../../../entities/courses/ui/CourseCard.vue";
import AppDropdown from "@/shared/ui/dropdown/ui/AppDropdown.vue";
import {COURSE_PROGRAM} from "@/entities/course-program/const/COURSE_PROGRAM";
</script>

<template>
  <section class="course-section" id="courses">
    <div class="container">
      <div class="course">
        <div class="course__title-wrapper">
          <h2 class="course__title">Программа курса</h2>
          <svg class="course__title-icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </div>
        <div class="course__card-wrapper">
          <CourseCard
              v-for="(program, index) in COURSE_PROGRAM"
              :key="index"
              :term="program.term"
              :name="program.title"
              :description="program.description"
              class="course__card"
          >
            <template #dropdown>
              <AppDropdown v-for="item in program.items" :label="item.name">
                <template #dropdown-text>
                  <ul class="course__dropdown-items">
                    <li class="course__dropdown-item" v-for="text in item.texts">{{text}}</li>
                  </ul>
                </template>
              </AppDropdown>
            </template>
          </CourseCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.course-section {
  padding: 40px 0 37px;
  @include tablet {
    padding: 40px 16px 40px;
  }
  @include desktop {
    padding: 68px 50px 40px;
  }
}
.course {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  padding: 4px;
  @include tablet {
    gap: 24px;
  }
  @include desktop {
    gap: 60px;
  }
  &__title-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    padding-left: 12px;
    max-width: 192px;
    @include tablet {
      padding-left: 0;
      max-width: 460px;
      font-size: 2.5rem;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__title-icon {
    @include tablet {
      width: 68px;
      height: 68px;
      position: relative;
      top: -20px;
    }
  }
  &__card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet {
      gap: 28px;
    }
    @include desktop {
      gap: 28px;
    }
  }
  &__card:first-child :deep(.course-card__title) {
    width: 250px;
    @include tablet {
      width: 357px;
    }
  }
  &__dropdown-items {
    list-style: disc;
    font-size: 1rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
.course__card-wrapper .course__card:last-of-type {
  gap: 31px;
  padding-bottom: 16px;
  @include tablet {
    gap: 56px;
    padding-bottom: 16px;
  }
}
</style>