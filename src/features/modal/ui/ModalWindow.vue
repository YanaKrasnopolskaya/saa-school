<script setup lang="ts">
const props = defineProps<{
  modalValue: Boolean,
}>();
const emit = defineEmits(['close']);

// закрытие модалки
const closeModal = () => {
  emit('close');
}
</script>

<template>
  <Transition name="fade-up">
    <div class="modal-window" v-if="modalValue">
      <div class="modal-window__form">
        <slot name="form"></slot>
        <button class="modal-window__close-btn" @click="closeModal">
          <svg class="modal-window__icon" width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#close-menu-icon"></use>
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.modal-window {
  position: fixed;
  width: 100vw;
  z-index: 10000;
  min-height: 100svh;
  inset: 0;
  backdrop-filter: blur(2px);
  background: rgba(0, 44, 62, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  &__form {
    position: relative;
    width: 615px;
    margin: 0 32px;
  }
  &__close-btn {
    position: absolute;
    top: 0;
    right: -35px;
    border: none;
    background: inherit;
    @include tablet-desktop {
      right: -50px;
    }
  }
  &__icon {
    color: rgba(255, 255, 255, 1);
  }
}
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.7s ease-in-out, transform 0.6s ease-in-out;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(-12px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>