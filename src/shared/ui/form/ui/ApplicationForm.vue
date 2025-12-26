<script setup>
import AppButton from "../../button/ui/AppButton.vue"

const consent = ref(true);
const props = defineProps({
  success: { type: Boolean, default: false },
  error:   { type: Boolean, default: false },
  darkTheme:   { type: Boolean, default: false },
});
const emit = defineEmits(['submit']);
</script>

<template>
  <form class="application-form" :class="{'application-form--dark' : props.darkTheme}" @submit.prevent="emit('submit')" novalidate>
    <slot name="input-field"></slot>
    <slot name="extra-fields"></slot>
    <div class="application-form__notification" v-if="success || error">
      <span v-if="success" class="application-form__notification-successfully">
        <svg class="application-form__notification-icon" width="18" height="18" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#check-icon"></use>
        </svg>
        Данные успешно отправлены
      </span>
      <span v-if="error" class="application-form__notification-error">
        <svg class="application-form__notification-icon" width="18" height="18" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#error-icon"></use>
        </svg>
        Не удалось отправить данные. Попробуйте еще раз
      </span>
    </div>
    <AppButton :disabled="!consent" class="application-form__button" type="submit">отправить заявку</AppButton>
    <label class="application-form__consent">
      <input type="checkbox" v-model="consent"/>
      <span class="application-form__checkbox">
        <svg class="application-form__checkbox-icon" width="18" height="18" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#check-mark-icon"></use>
        </svg>
      </span>
      <span>Я&nbsp;согласен (-а) на&nbsp;обработку моих персональных данных в&nbsp;соответствии с&nbsp;
        <a href="#">Политикой конфиденциальности</a>.
      </span>
    </label>
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
  @include tablet {
    padding: 40px;
  }
  &__notification {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 10px 12px 10px 12px;
    border-radius: 12px;
    box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
    background: $background-color;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
  &__notification-successfully {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
  &__button {
    width: 100%;
    margin-top: -18px;
    margin-bottom: -18px;
    @include tablet {
      margin-top: 24px;
    }
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
.application-form--dark {
  background: rgba(0, 44, 62, 1);
}
.application-form--dark .application-form__consent {
  color: rgba(255, 255, 255, 1);
}
</style>