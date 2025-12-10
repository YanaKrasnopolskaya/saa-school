<script setup>
import FormIndividual from "@/features/send-application/ui/FormIndividual.vue";
</script>

<template>
  <section class="section-course-registration">
    <div class="container">
      <div class="course-registration">
        <div class="course-registration__info">
          <h2 class="course-registration__info-title">Записаться на&nbsp;курс или получить консультацию</h2>
        </div>
        <FormIndividual />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-course-registration {
  padding: 36px 0;
}
.course-registration {
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__info {
    background: rgba(230, 248, 252, 1) url("/images/certificate-mobile-bg.png") top right / cover no-repeat;
    border-radius: 12px;
    padding: 20px 78px 20px 20px;
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
</style>