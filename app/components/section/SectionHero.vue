<script setup lang="ts">

</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-content__title">Стань тестировщиком <span class="hero__title-accent">за&nbsp;3&nbsp;месяца</span></h1>
        <p class="hero-content__description">Путь в&nbsp;профессию с&nbsp;аккредитованной IT-компанией</p>
      </div>
      <div class="hero-features">

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background-image: url("~/assets/images/hero-mobile-bg.png");
  padding-top: 89px;
  display: flex;
  flex-direction: column;
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
    background-image: url("~/assets/images/hero-description-mobile-bg.svg");
    padding: 6px 12px;
    max-width: 286px;
  }
}
.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
  &__item {

  }
  &__item--big {
    grid-column: span 2;
  }
}
</style>
