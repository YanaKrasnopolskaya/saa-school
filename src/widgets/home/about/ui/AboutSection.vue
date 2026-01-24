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
            <p class="about__text">Наша команда&nbsp;&mdash; это действующие специалисты в аккредитованной it&#8209;компании <b>с&nbsp;опытом 7+&nbsp;лет,</b>  которые работают с&nbsp;лидерами рынка:</p>
          </div>
          <ul class="about__leaders">
            <li v-for="(leader, index) in MARKET_LEADERS" class="about__item" :class="`item-${index}`">
              <img :src="leader.src" :alt="leader.alt">
            </li>
          </ul>
          <p class="about__text">Поэтому в нашем курсе мы собрали только то, что действительно пригодится на практике. Теория не ради голочки, разберем реальные кейсы, и будем ипользовать актуальные инструмены.</p>
        </div>
        <div class="about__img-wrapper">
          <img class="about__img" src="/images/teammates.png" alt="Наша команда">
          <div class="about__img-desc">Наша команда</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-section {
  padding: 36px 16px 22px;
  @include tablet {
    padding: 36px 13px 20px;
    margin-bottom: 12px;
  }
  @include desktop {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
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
    padding: 24px 0 42px;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0;

  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @include desktop {
      flex: 0 562px;
      padding: 4px 0 0 38px;
      gap: 18px;
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
      margin-bottom: 15px;
      gap: 26px;
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
      letter-spacing: -0.9px;
    }
  }
  &__text {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    width: 315px;
    @include tablet {
      font-size: 1.25rem;
      line-height: 25px;
      width: fit-content;
    }
    @include desktop {
      width: 500px;
      letter-spacing: -0.3px;
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
      padding: 10px 100px 14px;
      gap: 12px 42px;
    }
    @include desktop {
      margin-left: -38px;
      margin-right: 0;
      padding: 15px;
      gap: 12px;
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include tablet {
      margin-top: 8px;
    }
    @include desktop {
      margin-top: 15px;
      flex: 0 562px;
    }
  }
  &__img {
    width: 313px;
    height: 310px;
    border-radius: 12px;
    object-fit: cover;
    object-position: -110px 3px;
    @include tablet {
      width: 613px;
      height: 447px;
      object-position: -62px center;
    }
    @include desktop {
      width: 456px;
      height: 450px;
      object-position: -160px 4px;
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
      width: 192px;
      left: 19px;
      bottom: 55px;
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
    height: 85px;
    left: -10px;
    top: -13px;
  }
  @include desktop {
    width: 200px;
    height: 85px;
    left: 0;
  }
}
.item-0 img,
.item-2 img,
.item-3 img {
  @include tablet {
    width: 190px;
    height: 60px;
  }
}
</style>