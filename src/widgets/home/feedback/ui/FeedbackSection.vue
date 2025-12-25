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
.feedback {
  padding: 24px 20px 36px;
  margin: 40px 4px;
  border-radius: 12px;
  background: rgba(230, 248, 252, 1);
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  @include tablet {
    margin: 40px 20px;
    padding: 22px;
    flex-direction: row-reverse;
  }
  @include desktop {
    margin: 70px 64px;
    padding: 0 40px;
  }
  &__img {
    width: 134px;
    height: 162px;
    @include tablet {
      width: 182px;
      height: 205px;
    }
    @include desktop {
      width: 254px;
      height: 304px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 36px;
    @include tablet {
      gap: 28px;
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
  }
}
.feedback__btn--call {
  @include desktop {
    display: none;
  }
}
</style>