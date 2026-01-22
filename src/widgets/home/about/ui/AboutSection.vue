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
            <p class="about__text">Наша команда&nbsp;&mdash; это действующие специалисты в&nbsp;аккредитованной it&#8209;компании <b>с&nbsp;опытом 7+&nbsp;лет,</b>  которые работают с&nbsp;лидерами рынка:</p>
          </div>
          <ul class="about__leaders">
            <li v-for="(leader, index) in MARKET_LEADERS" class="about__item" :class="`item-${index}`">
              <img :src="leader.src" :alt="leader.alt">
            </li>
          </ul>
          <p class="about__text">Поэтому в нашем курсе мы собрали только то, что действительно пригодится на практике. Теория не ради голочки, разберем реальные кейсы, и будем ипользовать актуальные инструмены.</p>
        </div>
        <div class="about__img-wrapper">
          <div class="about__img-desc">Наша команда</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  padding: 36px 16px 20px;
  @include tablet {
    padding: 36px 13px 20px;
    margin-bottom: 12px;
  }
  @include desktop {
    padding: 8px 68px 46px;
  }
}
.about {
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: center;
  position: relative;
  @include tablet {
    gap: 40px;
    .item-0 { order: 2; }
    .item-1 { order: 1; }
    .item-2 { order: 4; }
    .item-3 { order: 3; }
  }
  @include desktop {
    gap: 50px;
    flex-direction: row-reverse;
    align-items: center;
  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include desktop {
      padding-left: 40px;
      gap: 16px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include tablet {
      margin-bottom: 25px;
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
    max-width: 315px;
    @include tablet {
      font-size: 1.25rem;
      line-height: 25px;
      max-width: fit-content;
    }
  }
  &__leaders {
    background: rgb(230, 248, 252) url(/images/certificate-mobile-bg.png) top right / cover no-repeat;
    display: flex;
    flex-wrap: wrap;
    padding: 23px 14px;
    gap: 12px 0;
    justify-content: center;
    margin-left: -20px;
    margin-right: -20px;
    @include tablet {
      margin-left: -16px;
      margin-right: -16px;
      padding: 12px 100px;
      gap: 12px 42px;
    }
    @include desktop {
      margin-left: -46px;
      margin-right: -60px;
      padding: 10px;
    }
  }
  &__item {
    width: 163px;
    height: 52px;
    @include tablet {
      width: 194px;
      height: 60px;
    }
  }
  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 313px;
    height: 310px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    background: url("/images/teammates.png") 63% center / cover no-repeat;
    @include tablet {
      margin-top: 8px;
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
    bottom: -9px;
    left: -2px;
    @include tablet {
      width: 192px;
      left: 84px;
      font-size: 1.25rem;
      bottom: -22px;
    }
    @include desktop {
      width: 220px;
      left: -60px;
      bottom: -8px;
    }
  }
}
.item-1 img{
  width: 200px;
  position: relative;
  left: -20px;
  top: -10px;
  @include tablet {
    width: 220px;
    height: 90px;
    left: -10px;
    top: -13px;
  }
}
.item-0 img,
.item-2 img,
.item-3 img {
  @include tablet {
    width: 194px;
    height: 60px;
  }
}
</style>