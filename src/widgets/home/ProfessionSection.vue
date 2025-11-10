<script setup lang="ts">
</script>

<template>
  <section class="section-profession">
    <div class="container">
      <div class="profession">
        <div class="profession__content">
          <h2 class="profession__title">Тестировщик &mdash;<br>это главный зануда в&nbsp;компании <span class="profession__title-accent">И&nbsp;его за&nbsp;это обожают</span></h2>
          <p class="profession__description">Он&nbsp;находит ошибки до&nbsp;того, как это сделают пользователи. И&nbsp;заодно помогает компании экономить деньги.</p>
        </div>
        <div class="profession__image-content">
          <img src="/images/profession.png" alt="Профессия тестировщик">
          <div class="profession__image-content-text">
            <span class="profession__text profession__text--diff">Сможешь указывать людям на&nbsp;их&nbsp;ошибки
              <svg class="profession__star-icon" width="60" height="60" aria-hidden="true">
                <use href="@/app/assets/sprite.svg#star-icon"></use>
              </svg>
            </span>
            <span class="profession__text">И&nbsp;за&nbsp;это заплатят
              <svg class="profession__spiral-icon" width="100" height="80" aria-hidden="true">
              <use href="@/app/assets/sprite.svg#spiral-icon"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profession {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 64px;
  padding: 40px 0;
  @include tablet {
    gap: 40px;
    margin-top: 104px;
    padding: 44px 0;
  }
  @include desktop {
    flex-direction: row;
    gap: 40px;
    margin-top: 164px;
    padding: 37px 50px;
    align-items: flex-start;
  }
  &__content {
    padding: 0 20px;
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
    max-width: 193px;
    max-height: 37px;
    background: $secondary-color;
    color: rgba(255, 255, 255, 1);
    font-size: 0.75rem;
    transform: rotate(-4.32deg);
    border-radius: 40px;
    position: absolute;
    bottom: -37px;
    right: 0;
    width: 193px;
    @include tablet {
      bottom: -45px;
      right: -37px;
      font-size: 1rem;
      max-width: 215px;
      max-height: 42px;
    }
    @include desktop {
      bottom: 0;
      right: 130px;
      max-width: 215px;
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
    max-width: 322px;
    @include tablet-desktop {
      max-width: 481px;
    }
  }
  &__image-content img {
    width: 100%;
    height: auto;
    @include tablet {
      max-width: 482px;
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
    max-width: 200px;
    @include tablet {
      font-size: 1.25rem;
      max-width: 220px;
      top: -20px;
      left: -60px;
    }
  }
  &__text--diff {
    max-width: 230px;
    border-radius: 9.46px;
    background: $primary-background-color;
    transform: rotate(-7.35deg);
    @include tablet {
      max-width: 250px;
      top: -70px;
      left: -25px;
    }
  }
  &__star-icon {
    position: absolute;
    top: -25px;
    left: -25px;
    z-index: 10;
    @include tablet-desktop {
      left: -50px;
      width: 80px;
      height: 80px;
    }
  }
  &__spiral-icon {
    position: absolute;
    bottom: -25px;
    right: -60px;
    z-index: 10;
    @include tablet {
      right: -85px;
    }
    @include tablet-desktop {
      width: 130px;
      height: 100px;
    }
  }
}
</style>