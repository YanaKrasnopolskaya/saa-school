<script setup>

</script>

<template>
  <section class="cost-section">
    <div class="container">
      <div class="cost">
        <div class="cost__info">
          <h2 class="cost__info-title">Стоимость и&nbsp;варианты оплаты<svg class="cost__info-icon" width="66" height="66" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg></h2>
          <p class="cost__info-description">Честная стоимость&nbsp;&mdash; никаких мифических акций</p>
        </div>
        <div class="cost__card-wrapper">
          <svg class="cost__card-icon" width="117" height="156" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#course-program-star-icon"></use>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cost-section {
  margin: 40px 8px;
}
.cost {
  display: flex;
  flex-direction: column;
  gap: 36px;
  &__info {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    @include desktop {
      gap: 26px;
    }
  }
  &__info-icon {
    display: none;
    @include desktop {
      display: block;
      position: absolute;
      top: -20px;
      right: -80px;
    }
  }
  &__info-title {
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 2.5rem;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__info-description {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 1.25rem;
    }
  }
  &__card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    position: relative;
    @include tablet {
      flex-direction: row;
      gap: 40px;
    }
    @include desktop {
      justify-content: center;
    }
  }
  &__card-icon {
    display: none;
    @include tablet-desktop {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>