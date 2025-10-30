<script setup lang="ts">
</script>

<template>
  <section class="section-perspectives">
    <div class="container">
      <div class="perspectives">
        <h2 class="perspectives__title">Какие перспективы?</h2>
        <div class="perspectives__hh-wrapper">
          <div class="perspectives__hh">
            <span class="perspectives__hh-num">+ 7000</span>
            <div class="perspectives__hh-desc">
              <svg class="perspectives__hh-desc-icon" width="34" height="34" aria-hidden="true">
                <use href="assets/images/sprite.svg#hh-icon"></use>
              </svg>
              <span class="perspectives__hh-text">активных вакансий на&nbsp;hh.ru</span>
            </div>
            <svg class="perspectives__hh-icon" width="69" height="71" aria-hidden="true">
              <use href="assets/images/sprite.svg#excl-mark-icon"></use>
            </svg>
          </div>
          <svg class="perspectives__hh-desc-icon" width="34" height="34" aria-hidden="true">
            <use href="assets/images/sprite.svg#swiper-icon"></use>
          </svg>
        </div>
        <div class="perspectives__wrapper">

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.perspectives {
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
  }
  &__hh-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__hh {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding: 8px 12px;
    border-radius: 12px;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    background: $background-color;
  }
  &__hh-num {
    font-size: 2rem;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
  }
  &__hh-desc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    max-width: 207px;
  }
  &__hh-text {
    color: $text-secondary-color;
    font-size: 1rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
  }
  &__hh-icon {
    position: absolute;
    top: -15px;
    right: 0;
  }
  &__wrapper {
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>