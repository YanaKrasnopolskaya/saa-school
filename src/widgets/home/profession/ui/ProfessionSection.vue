<script setup lang="ts">
</script>

<template>
  <section class="profession-section">
    <div class="container">
      <div class="profession">
        <div class="profession__content">
          <h2 class="profession__title">Тестировщик &mdash;<br>это главный зануда в компании <span class="profession__title-accent">И&nbsp;его за&nbsp;это обожают</span></h2>
          <p class="profession__description">Он&nbsp;находит ошибки до&nbsp;того, как это сделают пользователи. И&nbsp;заодно помогает компании экономить деньги.</p>
        </div>
        <div class="profession__image-content">
          <img src="/images/profession.png" alt="Профессия тестировщик">
          <div class="profession__image-content-text">
            <span class="profession__text profession__text--diff">Сможешь указывать людям на&nbsp;их&nbsp;ошибки
              <svg class="profession__star-icon" width="60" height="60" aria-hidden="true">
                <use href="@/app/assets/icons/sprite.svg#star-icon"></use>
              </svg>
            </span>
            <span class="profession__text">И&nbsp;за&nbsp;это заплатят
              <svg class="profession__spiral-icon" width="100" height="80" aria-hidden="true">
              <use href="@/app/assets/icons/sprite.svg#spiral-icon"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profession-section {
  padding: 107px 0 40px;
  @include tablet {
    padding: 153px 3px 40px;
  }
}
.profession {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  @include tablet {
    gap: 40px;
  }
  @include desktop {
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
  }
  &__content {
    padding: 0 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    @include desktop {
      padding: 33px 0 0;
    }
  }
  &__title {
    color: $text-color;
    font-size: 2em;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    position: relative;
    margin-bottom: 58px;
    @include tablet {
      margin-bottom: 13px;
      font-size: 2.5em;
    }
    @include desktop {
      margin-bottom: 78px;
      font-size: 3em;
    }
  }
  &__title-accent {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 37px;
    background: $secondary-color;
    color: rgba(255, 255, 255, 1);
    font-size: 0.875rem;
    transform: rotate(-4.32deg);
    border-radius: 40px;
    position: absolute;
    bottom: -40px;
    right: -5px;
    width: 193px;
    @include tablet {
      bottom: -38px;
      right: 3px;
      font-size: 1rem;
      width: 215px;
      max-height: 42px;
    }
    @include desktop {
      bottom: 0;
      right: 30px;
      width: 215px;
      max-height: 42px;
    }
  }
  &__description {
    color: $text-secondary-color;
    font-size: 1.125em;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    max-width: 274px;
    @include tablet {
      font-size: 1.25rem;
      max-width: 403px;
    }
    @include desktop {
      font-size: 1.5rem;
      max-width: 450px;
    }
  }
  &__image-content {
    position: relative;
    max-width: 334px;
    @include tablet-desktop {
      max-width: 500px;
    }
  }
  &__image-content img {
    width: 100%;
    height: auto;
    @include tablet {
      position: relative;
      top: 7px;
      left: 25px;
      max-width: 500px;
      transform: rotate(1.5deg);
    }
    @include desktop {
      width: 482px;
    }
  }
  &__image-content-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @include tablet {
      flex-direction: row;
    }
  }
  &__text {
    position: relative;
    top: -8px;
    left: 3px;
    z-index: 1;
    color: $text-color;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    background: $background-color;
    padding: 16px 20px;
    max-width: 220px;
    @include tablet {
      font-size: 1.25rem;
      max-width: 220px;
      top: -20px;
      left: -60px;
    }
    @include desktop {
      top: -18px;
      left: -100px
    }
  }
  &__text--diff {
    max-width: 230px;
    border-radius: 9.46px;
    background: $primary-background-color;
    transform: rotate(-7.35deg);
    left: -14px;
    top: -13px;
    @include tablet {
      max-width: 250px;
      top: -71px;
      left: -5px;
    }
    @include desktop {
      top: -70px;
      left: -55px;
    }
  }
  &__star-icon {
    position: absolute;
    top: -30px;
    left: -28px;
    z-index: 10;
    transform: rotate(10deg);
    @include tablet {
      top: -34px;
      left: -40px;
      width: 76px;
      height: 76px;
    }
  }
  &__spiral-icon {
    position: absolute;
    bottom: -26px;
    right: -62px;
    z-index: 10;
    @include tablet {
      right: -123px;
      bottom: -47px;
      width: 150px;
      height: 120px;
    }
  }
}
</style>