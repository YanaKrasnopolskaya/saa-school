<script setup>
import spriteUrl from '@/app/assets/icons/sprite.svg'
import {COMPANY_LOGOS} from "@/entities/companies/index.ts";
</script>

<template>
  <section class="section-companies">
    <div class="container">
      <div class="companies-wrapper">
        <h2 class="companies-wrapper__title">Наши студенты работают в&nbsp;ведущих компаниях</h2>
        <div class="companies">
          <ul class="companies__list">
            <li v-for="logo in COMPANY_LOGOS" class="companies__list-item">
              <svg class="companies__icon" aria-hidden="true">
                <use :href="`${spriteUrl}#${logo}`"></use>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.companies-wrapper {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 40px;
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    padding: 0 35px 0 20px;
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
.companies {
  background: rgb(230, 248, 252) url(/images/certificate-mobile-bg.png) top right / cover no-repeat;
  padding: 11px 13px 9px;
  @include tablet {
    padding: 22px 20px;
  }
  @include desktop {
    padding: 29px 65px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 160px);
    gap: 12px 0;
    align-items: center;
    justify-content: center;
    @include tablet {
      grid-template-columns: repeat(4, 170px);
      gap: 20px 0;
    }
    @include desktop {
      grid-template-columns: repeat(4, minmax(180px, 1fr));
      gap: 32px;
    }
  }
  &__list-item {
    width: 100%;
    padding: 3px 16px;
    @include tablet {
      padding: 6px 15px;
    }
    @include desktop {
      padding: 12px 30px;
    }
  }
  &__icon {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    max-height: 60px;
  }
}
</style>