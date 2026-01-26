<script setup lang="ts">
</script>

<template>
  <div class="contacts-wrapper">
    <div class="contact contact--tg">
      <a class="contact__btn" href="https://t.me" target="_blank" rel="noopener noreferrer">
        <svg class="contact__btn-icon" width="30" height="30" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#icon_TG"></use>
        </svg>
      </a>
      <div class="contact__text-wrapper">
        <span class="contact__text">Написать в Telegram</span>
        <svg class="contact__text-icon" width="6.41" height="11.23" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#icon_nose"></use>
        </svg>
      </div>
    </div>
    <div class="contact contact--chat">
      <a class="contact__btn" href="mailto:example@gmail.com">
        <svg class="contact__btn-icon" width="30" height="30" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#icon_chat"></use>
        </svg>
      </a>
      <div class="contact__text-wrapper">
        <span class="contact__text">Связаться</span>
        <svg class="contact__text-icon" width="6.41" height="11.23" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#icon_nose"></use>
        </svg>
      </div>
    </div>
    <div class="contact contact--call">
      <a class="contact__btn" href="tel:+79999999999">
        <svg class="contact__btn-icon" width="30" height="30" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#icon_call"></use>
        </svg>
      </a>
      <div class="contact__text-wrapper">
        <span class="contact__text">Позвонить</span>
        <svg class="contact__text-icon" width="6.41" height="11.23" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#icon_nose"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts-wrapper {
  position: fixed;
  z-index: 9999999999999999;
  display: flex;
  flex-direction: column;
  gap: 6px;
  top: 65%;
  right: 13px;
  @include tablet {
    right: 20px;
  }
  @include desktop {
    right: 36px;
    .contact--call {
      display: none;
    }
  }
}
.contact {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
  &__text-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0s;
  }
  &__text {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    padding: 6px 8px;
    border-radius: 6px;
    background: rgba(244, 249, 250, 1);
    font-size: 0.59rem;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0;
    text-align: right;
  }
  &__btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 4px 18px 0 rgba(22, 165, 201, 0.45);
    background: rgba(51, 196, 233, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus-visible {
      background: rgba(3, 165, 201, 1);
    }
    &:disabled {
      background: rgba(0, 44, 62, 0.12);
      cursor: none;
    }
    &:hover + .contact__text-wrapper {
      animation: text-fade-in 400ms ease-in forwards;
      pointer-events: auto;
    }

    &:not(:hover) + .contact__text-wrapper {
      animation: text-fade-out 400ms ease-in forwards;
      pointer-events: none;
    }
  }
}
.contact--tg .contact__btn{
  animation: fade-btn 15s ease-in infinite;
}
@keyframes fade-btn {
  0% {
    opacity: 1;
  }
  2% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes text-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes text-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}
</style>