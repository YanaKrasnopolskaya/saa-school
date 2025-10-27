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
      <svg class="header__logo" width="210" height="37" aria-hidden="true">
        <use xlink:href="assets/images/sprite.svg#logo-icon"></use>
      </svg>
    </NuxtLink>
    <TheNavigation class="header__nav"/>
    <div class="header__cta">
      <UiBaseButton class="header__cta-button">Записаться</UiBaseButton>
      <button class="header__menu-button" type="button" aria-label="Меню" @click="toggleMenu">
        <svg class="header__menu-icon" width="40" height="40" aria-hidden="true">
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
  height: 72px;
  max-width: calc(100% - 40px);
  padding: 12px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3000px;
  background: $background-color;
  @include vp-1023 {
    height: 64px;
  }
  @include vp-767 {
    height: 48px;
  }
  &__logo {
    @include vp-767 {
      width: 165px;
      height: 29px;
    }
  }
  &__nav {
    @include vp-1023 {
      display: none;
    }
  }
  &__cta-button {
    @include vp-1023 {
      display: none;
    }
  }
  &__menu-button {
    border: none;
    background: inherit;
    display: none;
    @include vp-1023 {
      width: 36px;
      height: 36px;
      display: block;
    }
  }
}
</style>