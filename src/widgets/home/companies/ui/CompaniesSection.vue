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
          <li v-for="(logo, index) in COMPANY_LOGOS" class="companies__item" :class="`item-${index}`">
            <img :src="logo.src" :alt="logo.alt">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.companies-section {
  padding: 41px 4px 0;
  @include tablet {
    padding: 47px 0 0;
  }
  @include desktop {
    padding: 97px 65px 0;
  }
}
.companies {
  display: flex;
  flex-direction: column;
  gap: 39px;
  @include tablet {
    gap: 46px;
    .item-0 { order: 1; }
    .item-1 { order: 2; }
    .item-2 { order: 5; }
    .item-3 { order: 6; }
    .item-4 { order: 3; }
    .item-5 { order: 7; }
    .item-6 { order: 4; }
    .item-7 { order: 8; }
  }
  @include desktop {
    .item-0 img,
    .item-1 img,
    .item-2 img,
    .item-3 img,
    .item-4 img,
    .item-5 img,
    .item-6 img,
    .item-7 img { width:  200px; height: 40px}
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    padding: 0 35px 0 14px;
    @include tablet {
      padding: 0 0 0 14px;
      font-size: 2.5rem;
      line-height: 50px;
    }
    @include desktop {
      width: 640px;
      padding: 0;
      font-size: 3rem;
      line-height: 58px;
      letter-spacing: -0.8px;
    }
  }
  &__list {
    background: rgb(230, 248, 252) url(/images/certificate-mobile-bg.png) top right / cover no-repeat;
    padding: 10px 17px 8px;
    margin-left: -8px;
    margin-right: -8px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px 0;
    justify-content: center;
    @include tablet {
      margin-left: 0;
      margin-right: 0;
      padding: 22px 22px;
      grid-template-columns: repeat(4, auto);
      gap: 20px 0;
    }
    @include desktop {
      padding: 26px 0;
      margin-left: -64px;
      margin-right: -64px;
      gap: 26px;
    }
  }
  &__item {
    width: 160px;
    height: 56px;
    @include tablet {
      width: 170px;
      height: 60px;
    }
    @include desktop {
      width: 231px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__item svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>