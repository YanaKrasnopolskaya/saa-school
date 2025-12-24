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
.finance-support-section {
  padding: 36px 4px;
  @include tablet {
    padding: 40px 8px;
  }
  @include desktop {
    padding: 64px;
  }
}
.finance-support {
  display: flex;
  flex-direction: column;
  gap: 36px;
  @include tablet {
    gap: 68px;
  }
  @include desktop {
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
      flex-direction: row;
      gap: 12px;
    }
    @include desktop {
      gap: 14px;
    }
  }
}
</style>