<script setup>
import InternshipCard from "@/entities/internship/ui/InternshipCard.vue";
import {INTERNSHIP_CARDS} from "@/entities/internship/index.ts";
</script>

<template>
  <section class="internship-section">
    <div class="container">
      <div class="internship">
        <div class="internship__info">
          <h2 class="internship__info-title">Оплачиваемая стажировка в&nbsp;IT-компании</h2>
          <p class="internship__info-description">Эта возможность&nbsp;&mdash; для лучшего участника потока. Мы&nbsp;верим, что&nbsp;упорство и&nbsp;интерес к&nbsp;делу должны вознаграждаться</p>
        </div>
        <div class="internship__card-wrapper">
          <InternshipCard v-for="card in INTERNSHIP_CARDS" :title="card.title" :img="card.img" :description="card.description" :bg="card.bg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.internship {
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 20px 4px;
  @include tablet {
    padding: 40px 16px;
    gap: 40px;
  }
  @include desktop {
    padding: 70px 64px;
    gap: 60px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    padding-left: 12px;
    @include tablet{
      padding-left: 0;
      max-width: 600px;
    }
    @include desktop {
      gap: 26px;
      max-width: 750px;
    }
  }
  &__info-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    max-width: 280px;
    @include tablet {
      font-size: 2.5rem;
      max-width: 640px;
    }
    @include desktop {
      font-size: 3rem;
      max-width: 880px;
    }
  }
  &__info-description {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.25rem;
    }
    @include desktop {
      font-size: 1.5rem;
    }
  }
  &__card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @include tablet {
      flex-direction: row;
      overflow-x: auto;
      scroll-behavior: smooth;
      margin-left: -20px;
      margin-right: -20px;
      padding-left: 20px;
      padding-right: 20px;
      gap: 24px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    @include desktop {
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
      overflow-x: visible;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>