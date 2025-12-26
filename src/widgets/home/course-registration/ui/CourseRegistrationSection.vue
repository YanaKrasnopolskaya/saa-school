<script setup lang="ts">
import {IndividualForm} from "@/features/forms";

const props = defineProps<{
  darkTheme?: boolean
}>();
</script>

<template>
  <section class="course-registration-section">
    <div class="container">
      <div class="course-registration">
        <div class="course-registration__info" :class="{'course-registration__info--dark' : darkTheme}">
          <h2 class="course-registration__info-title">Записаться на&nbsp;курс или получить консультацию</h2>
        </div>
        <IndividualForm :dark-theme="darkTheme"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.course-registration-section {
  padding: 80px 6px;
  @include tablet {
    margin: 0 52px 20px;
    padding: 60px 6px;
  }
}
.course-registration {
  display: flex;
  flex-direction: column;
  gap: 12px;
  @include desktop {
    flex-direction: row;
    margin-left: -38px;
    margin-right: -38px;
  }
  &__info {
    background: rgba(230, 248, 252, 1) url("/images/certificate-mobile-bg.png") top right / cover no-repeat;
    border-radius: 12px;
    padding: 20px 78px 20px 20px;
    @include tablet {
      padding: 40px 120px 40px 40px;
    }
    @include desktop {
      padding: 40px 90px 40px 40px;
      width: 75%;
    }
  }
  &__info-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 2.5rem;
      line-height: 50px;
    }
    @include desktop {
      font-size: 3rem;
      line-height: 60px;
    }
  }
}
.course-registration__info--dark {
  background: rgba(0, 44, 62, 1) url("/images/certificate-mobile-bg.png") top right / cover no-repeat;
}
.course-registration__info--dark .course-registration__info-title {
  color: rgba(255, 255, 255, 1);
}
</style>