<script setup>
import AppButton from "@/shared/ui/button/ui/AppButton.vue";
</script>

<template>
  <section class="certificate-section">
    <div class="container">
      <div class="certificate">
        <div class="certificate__content">
          <h2 class="certificate__title">Получишь сертификат установленного образца, подтверждающий твои новые навыки</h2>
          <p class="certificate__description">Всё это по&nbsp;государственной лицензии &#8470;Л035&minus;1 298&minus;77/179&nbsp;609.</p>
          <a href="/files/certificate.pdf" target="_blank" rel="noopener" class="certificate__link">
            <AppButton class="certificate__link-button">посмотреть сертификат</AppButton>
          </a>
        </div>
        <div class="certificate__image-wrapper">
          <img class="certificate__image" src="/images/certificate.png" alt="Сертификат">
          <img class="certificate__extra-image" src="/images/keyboard-button.png" alt="клавиша клавиатуры">
          <span class="certificate__success-text">И&nbsp;вот ты&nbsp;уже готов к&nbsp;выходу в&nbsp;большой мир тестирования!</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.certificate-section {
  background-image: url("/images/certificate-mobile-bg.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 38px 0;
  padding-bottom: 10px;
  @include tablet {
    background-image: url("/images/certificate-tablet-bg.png");
    padding: 24px 8px 16px;
    margin-bottom: 42px;
  }
  @include desktop {
    background-image: url("/images/certificate-desktop-bg.png");
    padding: 66px 50px 40px;
    margin: 90px 0 40px;
  }
}
.certificate {
  display: flex;
  flex-direction: column;
  gap: 17px;
  justify-content: flex-start;
  padding: 20px 14px 36px 17px;
  @include tablet {
    gap: 30px;
    padding: 16px 14px 36px 14px;
  }
  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    @include tablet {
      gap: 18px;
    }
    @include desktop {
      gap: 26px;
      width: 633px;
    }
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      max-width: 527px;
      font-size: 2.5rem;
      line-height: 50px;
    }
    @include desktop {
      max-width: 633px;
      font-size: 3rem;
      line-height: 58px;
      letter-spacing: -0.8px;
    }
  }
  &__description {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    padding-right: 14px;
    @include tablet {
      max-width: 444px;
      font-size: 1.5rem;
      line-height: 30px;
      margin-bottom: 23px;
      padding-right: 10px;
    }
    @include desktop {
      letter-spacing: -0.27px;
      line-height: 30px;
      margin-bottom: 26px;
    }
  }
  &__link {
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    @include desktop {
      margin-bottom: 0;
      top: -6px;
    }
  }
  &__link-button {
    width: 100%;
    @include tablet {
      width: auto;
    }
    @include desktop {
      letter-spacing: -0.3px;
    }
  }
  &__image-wrapper {
    max-width: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @include tablet {
      max-width: 360px;
      margin: 0  auto;
    }
    @include desktop {
      max-width: 336px;
    }
  }
  &__image {
    width: 100%;
    height: auto;
    @include desktop {
      position: relative;
      left: -18px;
    }
  }
  &__extra-image {
    position: absolute;
    bottom: -40px;
    right: -20px;
    z-index: 2;
    width: 131px;
    height: 138px;
    @include tablet {
      right: -95px;
      bottom: 36px;
      width: 160px;
    }
    @include desktop {
      width: 147px;
      height: 151px;
      bottom: 30px;
      right: -66px;
    }
  }
  &__success-text {
    position: absolute;
    z-index: 1;
    bottom: 4px;
    left: 32px;
    display: block;
    border-radius: 10.66px;
    box-shadow: 0 7.1px 17.761272430419922px 0 rgba(0, 44, 62, 0.12);
    background: rgba(230, 248, 252, 1);
    font-size: 16px;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    padding: 18px 22px;
    width: 210px;
    transform: rotate(-5.59deg);
    @include tablet {
      font-size: 1.25rem;
      width: 252px;
      bottom: -12px;
      left: auto;
      right: 18px;
      transform: rotate(-5.59deg);
    }
    @include desktop {
      left: auto;
      right: 30px;
      bottom: -12px;
      letter-spacing: -0.2px;
    }
  }
}
</style>