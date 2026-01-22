<script setup lang="ts">

</script>

<template>
  <section class="feedback-section">
    <div class="container">
      <div class="feedback">
        <img class="feedback__img" src="/images/any-question.png" alt="Ответим на вопросы">
        <div class="feedback__info">
          <div class="feedback__info-title">Ответим на любые вопросы - спрашивай</div>
          <div class="feedback__btn-wrapper">
            <button class="feedback__btn feedback__btn--write" type="button">Написать</button>
            <button class="feedback__btn feedback__btn--call" type="button">Позвонить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.feedback-section {
  padding: 38px 4px;
  @include tablet {
    padding: 40px 16px;
  }
}
.feedback {
  padding: 20px 19px 36px;
  border-radius: 12px;
  background: rgba(230, 248, 252, 1);
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;
  position: relative;
  @include tablet {
    gap: 30px;
    align-items: flex-start;
    padding: 21px 22px 22px;
  }
  &__img {
    width: 200px;
    height: 140px;
    position: relative;
    top: 6px;
    left: 6px;
    @include tablet {
      width: 270px;
      height: 245px;
      position: absolute;
      top: -6px;
      right: -18px;
      left: auto;
    }
    @include desktop {
      width: 360px;
      height: 304px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 36px;
    @include tablet {
      gap: 29px;
    }
    @include desktop {
      gap: 40px;
    }
  }
  &__info-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0;
    text-align: center;
    @include tablet {
      font-size: 2.5rem;
      line-height: 50px;
      text-align: left;
      width: 445px;
    }
    @include desktop {
      font-size: 3rem;
      line-height: 60px;
    }
  }
  &__btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @include tablet {
      flex-direction: row;
      gap: 9px;
    }
  }
  &__btn {
    box-sizing: border-box;
    border: 1px solid rgba(0, 44, 62, 1);
    border-radius: 3000px;
    padding: 14px 40px 14px 40px;
    background: inherit;
    font-size: 1rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: inherit;
  }
}
.feedback__btn--call {
  @include desktop {
    display: none;
  }
}
</style>