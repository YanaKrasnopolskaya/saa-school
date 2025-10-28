<script setup lang="ts">
import UiBaseButton from "~/components/ui/UiBaseButton.vue";
import TheMenu from "~/components/TheMenu.vue";
import TheNavigation from "~/components/TheNavigation.vue";

const isOpen = ref<boolean>(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}

</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo-link">
      <svg class="header__logo" width="165" height="29" aria-hidden="true">
        <use xlink:href="assets/images/sprite.svg#logo-icon"></use>
      </svg>
    </NuxtLink>
    <TheNavigation class="header__nav"/>
    <div class="header__cta">
      <UiBaseButton class="header__cta-button">Записаться</UiBaseButton>
      <button class="header__menu-button" type="button" aria-label="Меню" @click="toggleMenu">
        <svg class="header__menu-icon" width="36" height="36" aria-hidden="true">
          <use xlink:href="assets/images/sprite.svg#menu-icon"></use>
        </svg>
      </button>
    </div>
  </header>
  <TheMenu class="header__menu" :isOpen="isOpen" @close-menu="isOpen = false"/>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
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
      display: block;
    }
  }
  &__cta-button {
    display: none;
    @include desktop {
      display: block;
    }
  }
  &__menu-button {
    border: none;
    background: inherit;
    width: 36px;
    height: 36px;
    display: block;
    @include desktop {
      width: 40px;
      height: 40px;
      display: none;
    }
  }
}
</style>