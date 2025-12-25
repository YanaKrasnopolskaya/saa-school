<script setup>
import spriteUrl from '@/app/assets/icons/sprite.svg'
import {MARKET_LEADERS} from "@/entities/companies/index.ts";
</script>

<template>
  <section class="about-section">
    <div class="container">
      <div class="about">
        <div class="about__info-wrapper">
          <div class="about__info">
            <h2 class="about__info-title">Знаем индустрию изнутри</h2>
            <p class="about__text">Наша команда&nbsp;&mdash; это действующие специалисты в&nbsp;аккредитованной it&nbsp;-компании <b>с&nbsp;опытом 7+&nbsp;лет,</b>  которые работают с&nbsp;лидерами рынка:</p>
          </div>
          <ul class="about__leaders">
            <li v-for="leader in MARKET_LEADERS" class="about__leaders-item">
              <svg class="about__leaders-icon" aria-hidden="true">
                <use :href="`${spriteUrl}#${leader}`"></use>
              </svg>
            </li>
          </ul>
          <p class="about__text">Поэтому в&nbsp;нашем курсе мы&nbsp;собрали только&nbsp;то, что действительно пригодится на&nbsp;практике. Теория не&nbsp;ради голочки, разберем реальные кейсы, и&nbsp;будем ипользовать актуальные инструмены.</p>
        </div>
        <div class="about__img-wrapper">
          <img class="about__img" src="/images/teammates.png" alt="Команда">
          <div class="about__img-desc">Наша команда</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 40px 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: center;
  @include tablet {
    gap: 40px;
    padding: 40px 16px 36px;
  }
  @include desktop {
    gap: 50px;
    flex-direction: row-reverse;
    align-items: center;
    padding: 34px 44px 48px;
  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include desktop {
      padding: 0 40px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet {
      margin-bottom: 24px;
    }
    @include desktop {
      gap: 30px;
      margin-bottom: 21px;
    }
  }
  &__info-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 2.5rem;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__text {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.25rem;
      line-height: 25px;
    }
  }
  &__leaders {
    background: rgb(230, 248, 252) url(/images/certificate-mobile-bg.png) top right / cover no-repeat;
    display: grid;
    grid-template-columns: repeat(2, auto);
    padding: 20px;
    gap: 12px 0;
    justify-content: center;
    margin-left: -20px;
    margin-right: -20px;
    @include tablet {
      margin-left: -16px;
      margin-right: -16px;
    }
  }
  &__leaders-icon {
    width: 163px;
    height: 52px;
    @include tablet-desktop {
      width: 194px;
      height: 60px;
    }
  }
  &__img-wrapper {
    position: relative;
    margin: 0 auto;
  }
  &__img {
    width: 313px;
    height: 310px;
    border-radius: 12px;
    background: rgba(196, 196, 196, 1);
    @include tablet {
      width: 613px;
      height: 447px;
    }
    @include desktop {
      width: 468px;
      height: 460px;
    }
  }
  &__img-desc {
    border-radius: 12px;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    background: $background-color;
    width: 161px;
    padding: 16px 20px;
    transform: rotate(-5.57deg);
    font-size: 1rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    position: absolute;
    bottom: -10px;
    left: -8px;
    @include tablet {
      width: 192px;
      left: 40px;
      font-size: 1.25rem;
    }
    @include desktop {
      width: 220px;
      left: -20px;
    }
  }
}
</style>