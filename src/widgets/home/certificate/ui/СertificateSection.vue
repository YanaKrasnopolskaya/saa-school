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
  margin: 38px 0;
  background-image: url("/images/certificate-mobile-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @include tablet {
    background-image: url("/images/certificate-tablet-bg.png");
    margin: 70px 8px;
    padding-bottom: 60px;
  }
  @include desktop {
    background-image: url("/images/certificate-desktop-bg.png");
  }
}
.certificate {
  padding: 22px 14px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  @include tablet {
    gap: 40px;
  }
  @include desktop {
    padding: 80px 20px 20px 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
      line-height: 60px;
    }
  }
  &__description {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    padding-right: 14px;
    @include tablet-desktop {
      max-width: 444px;
      font-size: 1.5rem;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
  &__link {
    width: 100%;
    margin-bottom: 10px;
  }
  &__link-button {
    width: 100%;
    @include tablet {
      width: auto;
    }
  }
  &__image-wrapper {
    width: 100%;
    position: relative;
    @include tablet {
      max-width: 330px;
      margin: 0 auto;
    }
  }
  &__image {
    width: 100%;
    height: auto;
  }
  &__extra-image {
    position: absolute;
    bottom: -28px;
    right: -16px;
    z-index: 2;
    width: 131px;
    height: 138px;
    @include tablet-desktop {
      width: 147px;
      height: 151px;
      bottom: 0;
      right: -80px;
    }
  }
  &__success-text {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 36%;
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
    transform: translateX(-40%) rotate(-5.59deg);
    @include tablet-desktop {
      font-size: 1.25rem;
      width: 252px;
      bottom: -48px;
      left: auto;
      right: 10px;
      transform: rotate(-5.59deg);
    }
  }
}
</style>