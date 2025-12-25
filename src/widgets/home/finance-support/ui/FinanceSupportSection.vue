<script setup>
import {FINANCE_SUPPORT_CARDS, FinanceSupportCard} from "@/entities/finance-support/index.ts";
</script>

<template>
  <section class="finance-support-section">
    <div class="container">
      <div class="finance-support">
        <h2 class="finance-support__title">Всегда на твоей стороне</h2>
        <div class="finance-support__card-wrapper">
          <FinanceSupportCard v-for="card in FINANCE_SUPPORT_CARDS" :title="card.title" :image="card.image" :description="card.description" :more-info="card.moreInfo"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.finance-support {
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 40px 4px;
  @include tablet {
    gap: 68px;
    padding: 40px 8px;
  }
  @include desktop {
    padding: 70px 64px;
    gap: 66px;
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    padding-left: 12px;
    @include tablet {
      font-size: 2.5rem;
      padding-left: 0;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 36px;
    justify-content: center;
    align-items: center;
    @include tablet {
      justify-content: space-between;
      flex-direction: row;
      gap: 12px;
    }
    @include desktop {

      gap: 14px;
    }
  }
}
</style>