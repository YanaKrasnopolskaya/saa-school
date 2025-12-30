<script setup>
import spriteUrl from '@/app/assets/icons/sprite.svg'
import {COMPANY_LOGOS} from "@/entities/companies/index.ts";
</script>

<template>
  <section class="companies-section">
    <div class="container">
      <div class="companies">
        <h2 class="companies__title">Наши студенты работают в&nbsp;ведущих компаниях</h2>
        <ul class="companies__list">
          <li v-for="logo in COMPANY_LOGOS" class="companies__list-item">
            <svg class="companies__icon" aria-hidden="true">
              <use :href="`${spriteUrl}#${logo}`"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.companies-section {
  padding: 40px 8px 0;
  @include tablet {
    padding: 54px 0 0;
  }
  @include desktop {
    padding: 104px 70px 0;
  }
}
.companies {
  display: flex;
  flex-direction: column;
  gap: 36px;
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    padding: 0 35px 0 12px;
    @include tablet {
      padding: 0 0 0 20px;
      font-size: 2.5rem;
      line-height: 50px;
    }
    @include desktop {
      width: 640px;
      padding: 0;
      font-size: 3rem;
      line-height: 60px;
    }
  }
  &__list {
    background: rgb(230, 248, 252) url(/images/certificate-mobile-bg.png) top right / cover no-repeat;
    padding: 20px 7px;
    margin-left: -8px;
    margin-right: -8px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 6px 16px;
    justify-content: center;
    @include tablet {
      margin-left: 0;
      margin-right: 0;
      padding: 22px 20px;
      grid-template-columns: repeat(4, auto);
      gap: 20px 14px;
    }
    @include desktop {
      padding: 29px 0;
      margin-left: -64px;
      margin-right: -64px;
      gap: 32px 80px;
    }
  }
  &__icon {
    width: 140px;
    height: 56px;
    display: block;
    @include tablet-desktop {
      width: 154px;
      height: 60px;
    }
  }
}
</style>