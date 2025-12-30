<script setup>
</script>

<template>
  <section class="community-section">
    <div class="container">
      <div class="community">
        <div class="community__info">
          <h2 class="community__info-title">Твой круг общения&nbsp;&mdash; уже здесь
            <span>
              <svg class="community__info-icon" width="40" height="40" aria-hidden="true">
              <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
              </svg>
            </span>
          </h2>
          <p class="community__info-description">Telegram-чат только для наших выпускников и&nbsp;студентов: помощь, советы и&nbsp;общение с&nbsp;единомышленниками</p>
        </div>
        <div class="community__advantages-wrapper">
          <div class="community__advantages">
            <p class="community__advantages-item">
              Доверительная атмосфера&nbsp;&mdash; здесь никто не&nbsp;осуждает и&nbsp;не&nbsp;критикует за&nbsp;&laquo;неправильные&raquo; вопросы
              <svg class="community__advantages-icon" width="80" height="80" aria-hidden="true">
                <use href="@/app/assets/icons/sprite.svg#community-icon1"></use>
              </svg>
            </p>
            <p class="community__advantages-item community__advantages-item--center">
              Живой диалог с&nbsp;опытными специалистами&nbsp;&mdash; получай помощь от&nbsp;тех, кто уже в&nbsp;профессии
              <svg class="community__advantages-icon" width="80" height="80" aria-hidden="true">
                <use href="@/app/assets/icons/sprite.svg#community-icon2"></use>
              </svg>
            </p>
            <p class="community__advantages-item community__advantages-item--bottom">
              Настоящее комьюнити - общайся, делись и&nbsp;расти вместе с&nbsp;другими
              <svg class="community__advantages-icon" width="80" height="80" aria-hidden="true">
                <use href="@/app/assets/icons/sprite.svg#community-icon3"></use>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.community-section {
  background-image: url("/images/community-mobile-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 52px 0 40px;
  @include tablet {
    background-image: url("/images/community-tablet-bg.png");
    margin: 14px 0 40px;
  }
  @include desktop {
    background-image: url("/images/community-desktop-bg.png");
    margin: 80px 0 20px;
  }
}
.community {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 20px 0;
  @include tablet {
    padding: 40px 16px 0;
  }
  @include desktop {
    gap: 43px;
    padding: 70px 48px 0;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @include desktop {
      gap: 26px;
    }
  }
  &__info-title {
    color: rgba(255, 255, 255, 1);
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: left;
    max-width: 197px;
    position: relative;
    @include tablet {
      max-width: 450px;
      font-size: 2.5rem;
      line-height: 50px;
    }
    @include desktop {
      max-width: 821px;
      font-size: 3rem;
      line-height: 60px;
    }
  }
  &__info-icon {
    position: absolute;
    bottom: 0;
    right: -24px;
    @include tablet {
      top: 50%;
      transform: translateY(-50%);
      width: 60px;
      height: 60px;
    }
  }
  &__info-description {
    color: rgba(255, 255, 255, 1);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
    max-width: 285px;
    @include tablet {
      max-width: 503px;
      font-size: 1.5rem;
      line-height: 30px;
    }
    @include desktop {
      max-width: 743px;
    }
  }
  &__advantages-wrapper {
    background-image: url("/images/community-mobile.png");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 310px;
    @include tablet {
      background-image: url("/images/community-tablet.png");
      background-size: 530px;
    }
    @include desktop {
      background-image: url("/images/community-desktop.png");
      background-size: 530px;
    }
  }
  &__advantages {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 190px 35px 20px;
    @include tablet {
      padding: 116px 60px 0;
    }
    @include desktop {
      padding: 103px 100px 50px;
    }
  }
  &__advantages-item {
    border-radius: 0 12px 12px 12px;
    box-shadow: 0 8px 20px 0 rgba(0, 44, 62, 0.12);
    background: $background-color;
    padding: 20px;
    position: relative;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      max-width: 294px;
      font-size: 1.125rem;
      top: 20px;
    }
    @include desktop {
      max-width: 320px;
      font-size: 1.25rem;
      transform: rotate(1.65deg);
      left: -50px;
      top: 10px;
    }
  }
  &__advantages-item--center {
    transform: translateX(10px);
    border-radius: 12px 0 12px 12px;
    @include tablet {
      margin-top: 192px;
      margin-left: auto;
      transform: translateX(0);
    }
    @include desktop {
      transform: rotate(0);
      margin-top: 0;
      left: 30px;
      top: -60px;
    }
  }
  &__advantages-item--bottom {
    width: calc(100% - 20px);
    @include tablet {
      max-width: 268px;
      position: relative;
      top: -40px
    }
    @include desktop {
      transform: rotate(-5.27deg);
      left: -40px;
      top: -100px;
      margin-left: 10px;
    }
  }
  &__advantages-item svg {
    position: absolute;
    top: -12px;
    left: -68px;
    @include tablet {
      width: 90px;
      height: 90px;
      top: -12px;
      left: -80px;
    }
  }
  &__advantages-item--center svg {
    left: auto;
    right: -68px;
    @include tablet {
      right: -80px;
    }
  }
}
</style>