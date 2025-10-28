<script setup lang="ts">

</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-content__title">Стань тестировщиком <span class="hero-content__title-accent">за&nbsp;3&nbsp;месяца</span></h1>
        <p class="hero-content__description">Путь в&nbsp;профессию с&nbsp;аккредитованной IT-компанией</p>
      </div>
      <div class="hero-features">
        <UiBenefitsCard class="hero-features__item" title="Небольшие группы" description="Поддерживаем каждого студента и&nbsp;всегда рядом, если что-то не&nbsp;понятно" :reversed="false" :horizontal="false">
          <template #image>
            <img src="~/assets/images/hero-img-1.png" alt="Небольшие группы фото" width="120" height="79"/>
          </template>
          <template #more>
            <span class="hero-features__more">до&nbsp;10&nbsp;человек</span>
          </template>
        </UiBenefitsCard>
        <UiBenefitsCard class="hero-features__item" title="AI ассистенты" description="Учим использовать искусственный интеллект для автоматизации процессов" :reversed="false" :horizontal="false">
          <template #image>
            <img src="~/assets/images/hero-img-2.png" alt="AI ассистенты фото" width="104" height="61"/>
          </template>
        </UiBenefitsCard>
        <UiBenefitsCard class="hero-features__item hero-features__horizontal-item" title="Как в&nbsp;настоящем проекте" description="На&nbsp;курсе полностью повторяем рабочие процессы и&nbsp;задачи" :reversed="false" :horizontal="true">
          <template #image>
            <img src="~/assets/images/hero-img-3.png" alt="Настоящий проект фото" width="118" height="91"/>
          </template>
        </UiBenefitsCard>
        <UiBenefitsCard class="hero-features__item hero-features__horizontal-item hero-features__item--different-bg" title="Помогаем с&nbsp;поиском работы" description="Вместе составляем резюме и&nbsp;проводим тестовое собеседование" :reversed="true" :horizontal="true">
          <template #image>
            <img src="~/assets/images/hero-img-4.png" alt="Поиск работы фото" width="78" height="78"/>
          </template>
        </UiBenefitsCard>
        <UiBenefitsCard class="hero-features__item hero-features__horizontal-item hero-features__item--different-bg" title="Сертификат Минцифры" description="Помогаем получить сертификат, который подтвердит твои навыки" :reversed="false" :horizontal="true">
          <template #image>
            <img src="~/assets/images/hero-img-5.png" alt="Сертификат Минцифры фото" width="96" height="78"/>
          </template>
        </UiBenefitsCard>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background-image: url("~/assets/images/hero-mobile-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 89px;
  display: flex;
  flex-direction: column;
  @include tablet {
    background-image: url("~/assets/images/hero-tablet-bg.png");
  }
  @include desktop {
    background-image: url("~/assets/images/hero-desktop-bg.png");
  }
  @include tablet-desktop {
    padding-top: 140px;
  }
}
.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 2.25em;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
    @include tablet {
      font-size: 4.25em;
    }
    @include desktop {
      font-size: 4.875em;
    }
    @include tablet-desktop {
      font-weight: 800;
      margin-bottom: 24px;
    }
  }
  &__title-accent {
    background: $primary-button-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__description {
    color: rgba(255, 255, 255, 1);
    font-size: 0.875em;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
    border-radius: 39px;
    padding: 6px 12px;
    margin-bottom: 36px;
    max-width: 286px;
    background: rgba(230, 248, 252, 0.08);
    background-image: url("~/assets/images/hero-description-mobile-bg.svg");
    background-size: cover;
    @include tablet-desktop {
      background-image: url("~/assets/images/hero-description-tablet-bg.svg");
      padding: 12px 24px;
      font-size: 1.25em;
      line-height: 25px;
      max-width: 558px;
      margin-bottom: 46px;
    }
  }
}
.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  @include tablet-desktop {
    grid-template-columns: repeat(3, 1fr);
    &__horizontal-item:nth-child(3) {
      grid-column: auto;
      flex-direction: column !important;
    }
  }
  &__horizontal-item {
    grid-column: span 2;
    @include tablet-desktop {
      grid-column: span 3;
    }
  }
  &__item--different-bg {
    background: $primary-background-color !important;
  }
  &__more {
    position: relative;
    display: block;
    padding: 3px 4px 3px 17px;
    border-radius: 8.64px;
    background: rgba(51, 196, 233, 0.12);
    color: rgba(31, 130, 155, 1);
    font-size: 0.75em;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
    @include tablet-desktop {
      font-size: 1em;
    }
  }
  &__more:after {
    content: "";
    position: absolute;
    width: 8.63px;
    height: 8.65px;
    background: rgba(17, 127, 155, 1);
    border-radius: 50%;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
  }
}
</style>