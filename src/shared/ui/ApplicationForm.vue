<script setup>
import AppButton from "@/shared/ui/AppButton.vue";

const consent = ref(true);
</script>

<template>
  <form class="application-form">
    <slot name="input-field"></slot>
    <slot name="extra-fields"></slot>
    <AppButton :disabled="!consent" class="application-form__button">отправить заявку</AppButton>
    <label class="application-form__consent">
      <input type="checkbox" v-model="consent"/>
      <span class="application-form__checkbox">
        <svg class="application-form__checkbox-icon" width="18" height="18" aria-hidden="true">
          <use href="@/app/assets/sprite.svg#check-mark-icon"></use>
        </svg>
      </span>
      <span>Я&nbsp;согласен (-а) на&nbsp;обработку моих персональных данных в&nbsp;соответствии с&nbsp;
        <a href="#">Политикой конфиденциальности</a>.
      </span>
    </label>
    <div class="p-10 text-3xl text-white bg-blue-500">
      Hello Tailwind 🚀
    </div>
  </form>
</template>

<style scoped lang="scss">
.application-form {
  background-color: $primary-background-color;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 20px;
  &__button {
    width: 100%;
  }
  &__consent {
    position: relative;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    text-align: left;
    padding-left: 36px;

  }
  &__consent input {
    position: absolute;
    opacity: 0;
  }
  &__consent input:checked + .application-form__checkbox svg {
    opacity: 1;
  }
  &__consent input:checked + .application-form__checkbox {
    border-color: $secondary-color;
  }
  &__checkbox {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 44, 62, 0.3);
    &:hover {
      border-color: $secondary-color;
    }
  }
  &__checkbox svg {
    opacity: 0;
  }
}
</style>