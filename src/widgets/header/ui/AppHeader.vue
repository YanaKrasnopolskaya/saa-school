<script setup lang="ts">
import AppButton from "@/shared/ui/button/ui/AppButton.vue";
import AppMenu from "@/widgets/menu/ui/AppMenu.vue";
import AppNavigation from "@/widgets/navigation/ui/AppNavigation.vue";
import {IndividualForm} from "@/features/forms";
import {ModalWindow, useModal} from "@/features/modal";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
const {isOpenModal, openModal, closeModal} = useModal();
</script>

<template>
  <header class="header">
    <NuxtLink to="/public" class="header__logo-link">
      <svg class="header__logo" width="165" height="29" aria-hidden="true">
        <use href="@/app/assets/icons/sprite.svg#logo-icon"></use>
      </svg>
    </NuxtLink>
    <AppNavigation class="header__nav"/>
    <div class="header__cta">
      <AppButton class="header__cta-button" @click="openModal">Записаться</AppButton>
      <App-button class="header__menu-button" type="button" aria-label="Меню" @click="toggleMenu">
        <svg class="header__menu-icon" width="36" height="36" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#menu-icon"></use>
        </svg>
      </App-button>
    </div>
  </header>
  <AppMenu class="header__menu" :isOpen="isOpen" @close-menu="isOpen = false"/>
  <ModalWindow :modal-value="isOpenModal" @close="closeModal">
    <template #form>
      <IndividualForm />
    </template>
  </ModalWindow>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 10000000;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 48px;
  max-width: calc(100% - 40px);
  padding: 12px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3000px;
  background: $background-color;
  @include tablet {
    height: 64px;
  }
  @include desktop {
    height: 72px;
  }
  &__logo {
    @include tablet-desktop {
      width: 210px;
      height: 37px;
    }
  }
  &__nav {
    display: none;
    @include desktop {
      display: flex;
    }
  }
  &__cta-button {
    display: none;
    pointer-events: none;
    @include desktop {
      display: block;
      pointer-events: auto;
    }
  }
  &__menu-button {
    border: none;
    background: inherit;
    width: 36px;
    height: 36px;
    @include desktop {
      width: 40px;
      height: 40px;
      display: none;
    }
  }
}
</style>