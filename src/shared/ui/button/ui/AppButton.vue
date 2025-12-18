<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'secondary',
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
});
</script>

<template>
  <button class="btn" :class="[`btn__${variant}`]" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  color: rgba(0, 44, 62, 1);
  padding: 14px 40px;
  border-radius: 3000px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  border: none;
  &__primary {
    background: $primary-button-color;
    &:hover:not(:disabled) {
      background: $primary-button-color-hover;
    }
    &:focus-visible:not(:disabled) {
      background: $primary-button-color-focus;
    }
    &:disabled {
      background: rgba(0, 44, 62, 0.12);
      color: rgba(0, 44, 62, 0.3);
      cursor: not-allowed;
    }
  }
  &__secondary {
    background: transparent;
    border: 1px solid rgba(0, 44, 62, 1);
    &:hover:not(:disabled) {
      border: 1px solid $secondary-color;
      color: $secondary-color;
    }
    &:focus-visible:not(:disabled) {
      border: 1px solid $secondary-color-focus;
      color: $secondary-color-focus;
    }
    &:disabled {
      border: 1px solid rgba(0, 44, 62, 0.12);
      color: rgba(0, 44, 62, 0.3);
      cursor: not-allowed;
    }
  }
}
</style>
