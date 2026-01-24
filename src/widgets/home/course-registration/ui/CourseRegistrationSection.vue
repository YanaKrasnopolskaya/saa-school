<script setup lang="ts">
import {IndividualForm} from "@/features/forms";

const props = defineProps<{
  darkTheme?: boolean
}>();
</script>

<template>
  <section class="course-registration-section">
    <div class="container">
      <div class="course-registration" :class="{'course-registration--dark' : darkTheme}">
        <div class="course-registration__info">
          <h2 class="course-registration__info-title">Записаться на&nbsp;курс<br> или получить консультацию</h2>
        </div>
        <IndividualForm :dark-theme="darkTheme" :class="['course-registration__form', {'course-registration__form--dark' : darkTheme}]"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.course-registration-section {
  padding: 58px 4px 51px;
  @include tablet {
    padding: 48px 56px 40px;
  }
  @include desktop {
    padding: 48px 40px 40px 20px;
  }
}
.course-registration {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  @include desktop {
    flex-direction: row;
    margin-left: -60px;
    margin-right: -80px;
    gap: 12px;
  }
  &__info {
    background: rgba(230, 248, 252, 1) url("/images/certificate-mobile-bg.png") top right / cover no-repeat;
    border-radius: 12px;
    padding: 20px 78px 20px 20px;
    @include tablet {
      padding: 40px 120px 40px 40px;
    }
    @include desktop {
      padding: 38px 40px 40px 38px;
      flex: 1;
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
      letter-spacing: -0.8px;
    }
  }
}
.course-registration__form {
  @include desktop {
    flex: 1;
  }
}
.course-registration--dark {
  padding-top: 20px;
  padding-bottom: 28px;
}
.course-registration--dark .course-registration__info {
  background: rgba(0, 44, 62, 1) url("/images/certificate-mobile-bg.png") top right / cover no-repeat;
}
.course-registration--dark .course-registration__info-title {
  color: rgba(255, 255, 255, 1);
}
</style>