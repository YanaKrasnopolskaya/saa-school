<script setup lang="ts">
import AppNavigation from "@/widgets/navigation/ui/AppNavigation.vue";

const props = defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(['close-menu'])
const closeMenu = () => {
  emit('close-menu');
}
</script>

<template>
  <div class="app-menu">
    <div class="menu-overlay" :class="{ show: isOpen }" @click="closeMenu"></div>
    <aside class="menu" :class="{ 'menu__open': isOpen }" aria-label="Меню">
      <div class="menu__header">
        <svg class="menu__logo" width="208" height="37" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#menu-logo-icon"></use>
        </svg>
        <button class="menu__close-btn" @click="closeMenu">
          <svg width="40" height="40" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#close-menu-icon"></use>
          </svg>
        </button>
      </div>
      <div class="menu__content">
        <AppNavigation class="menu__navigation"/>
        <div class="menu__contact">
          <a href="tel:88003008352" class="menu__contact-link">8 800 300 83 52</a>
          <a href="mailto:info@saaschool.ru" class="menu__contact-link">info@saaschool.ru</a>
          <div class="menu__socials">
            <a href="#" class="menu__socials-link">
              <svg class="menu__socials-icon" width="52" height="52" aria-hidden="true">
                <use href="@/app/assets/icons/sprite.svg#tg-icon"></use>
              </svg>
            </a>
            <a href="#" class="menu__socials-link">
              <svg class="menu__socials-icon" width="52" height="52" aria-hidden="true">
                <use href="@/app/assets/icons/sprite.svg#vk-icon"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  </div>

</template>

<style scoped lang="scss">
.menu {
  position: fixed;
  top: 0;
  right: calc(-1 * 100%);
  width: 100vw;
  height: 100vh;
  transition: right 0.4s ease;
  z-index: 100000;
  background-color: $background-color;
  background-image: url("~~/public/images/cta-bg-2.png"), url("~~/public/images/cta-bg-1.png");
  background-position: left -400px, center bottom -500px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  @include tablet {
    width: 400px;
  }
  &__open {
    right: 0;
  }
  &__header {
    padding: 12px;
    margin: 20px 15px 0;
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
  &__content {
    flex: 1;
    padding: 55px 0 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  &__contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 21px;
  }
  &__contact-link {
    font-size: 1.25em;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: center;
  }
  &__socials {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__socials-link {
    border: 1px solid rgba(0, 44, 62, 0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      border-color: $secondary-color;
    }
    &:focus {
      border-color: $secondary-color;
      color: $secondary-color;
    }
    &:disabled {
      color: rgba(0, 44, 62, 0.12);
    }
  }
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10000;
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
