<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['close-menu'])
const closeMenu = () => {
  emit('close-menu');
}
</script>

<template>
  <div class="menu-overlay" :class="{ show: isOpen }"></div>
  <aside class="menu" :class="{ 'menu__open': isOpen }" aria-label="Меню">
    <div class="menu__header">
      <svg class="menu__logo" width="208" height="37" aria-hidden="true">
        <use xlink:href="assets/images/sprite.svg#menu-logo-icon"></use>
      </svg>
      <button class="menu__close-btn" @click="closeMenu">
        <svg width="40" height="40" aria-hidden="true">
          <use xlink:href="assets/images/sprite.svg#close-menu-icon"></use>
        </svg>
      </button>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  transition: right 0.4s ease;
  z-index: 20;
  background: $background-color;
  &__open {
    right: 0;
  }
  &__header {
    padding: 12px;
    margin: 20px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 3000px;
    background: $background-color;
  }
  &__close-btn {
    border: none;
    background: inherit;
  }
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
  height: 100vh;
  inset: 0;
  backdrop-filter: blur(2px);
  background: rgba(0, 44, 62, 0.7);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.menu-overlay.show {
  opacity: 1;
  pointer-events: all;
}
</style>
