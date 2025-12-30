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
  <div class="container">
    <header class="header">
      <NuxtLink to="/">
        <svg class="header__logo" width="165" height="29" aria-hidden="true">
          <use href="@/app/assets/icons/sprite.svg#logo-icon"></use>
        </svg>
      </NuxtLink>
      <AppNavigation class="header__nav"/>
      <div class="header__cta">
        <AppButton class="header__btn" @click="openModal">Записаться</AppButton>
        <button class="header__menu-btn" type="button" @click="toggleMenu">
          <svg width="36" height="36" aria-hidden="true">
            <use href="@/app/assets/icons/sprite.svg#menu-icon"></use>
          </svg>
        </button>
      </div>
    </header>
    <AppMenu class="header__menu" :isOpen="isOpen" @close-menu="isOpen = false"/>
    <ModalWindow :modal-value="isOpenModal" @close="closeModal">
      <template #form>
        <IndividualForm />
      </template>
    </ModalWindow>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 10000000;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 48px;
  max-width: calc(100% - 30px);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3000px;
  background: $background-color;
  @include tablet {
    top: 20px;
    height: 64px;
    max-width: calc(100% - 36px);
  }
  @include desktop {
    top: 15px;
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
  &__cta {
    display: flex;
    align-items: center;
    @include tablet {
      padding-right: 10px;
    }
  }
  &__btn {
    display: none;
    pointer-events: none;
    @include desktop {
      display: block;
      pointer-events: auto;
    }
  }
  &__menu-btn {
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