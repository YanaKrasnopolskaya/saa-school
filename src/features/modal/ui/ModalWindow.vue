<script setup lang="ts">
const props = defineProps<{
  modalValue: Boolean,
}>();
const emit = defineEmits(['update:modalValue']);
const isOpen = ref(props.modalValue);

watch(() => props.modalValue, (val) => {
  isOpen.value = val;
});

// закрытие модалки
const closeModal = () => {
  isOpen.value = false;
  emit('update:modalValue', false);
}
</script>

<template>
  <Transition name="fade-up">
    <div class="modal-window" v-if="isOpen">
      <slot name="form"></slot>
      <button class="modal-window__close-btn" @click="closeModal">
        <svg class="menu__logo" width="208" height="37" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#close-menu-icon"></use>
        </svg>
      </button>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.menu-overlay {
  position: relative;
  width: 100vw;
  z-index: 10000;
  height: 100vh;
  inset: 0;
  backdrop-filter: blur(2px);
  background: rgba(0, 44, 62, 0.7);
  pointer-events: none;
  &__close-btn {
    position: absolute;
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