<script setup lang="ts">

import {AppButton} from "@/shared/ui/button";

const showCookie = ref(false);

const acceptCookie = () => {
  document.cookie = "cookies_accepted=true; path=/; expires=Fri, 31 Dec 2026 23:59:59 GMT";
  showCookie.value = false;
}

onMounted(() => {
  const hasConsent = document.cookie.includes('cookie_accepted=true');
  if (!hasConsent) {
    showCookie.value = true;
  }
})
</script>

<template>
  <div class="cookie-banner" v-if="showCookie">
    <p class="cookie-banner__text">Пользуясь сайтом вы соглашаетесь с тем, что мы используем cookies. Подробнее в
      <a class="cookie-banner__link" href="#">Политике обработки персональных данных</a>
    </p>
    <AppButton class="cookie-banner__btn" type="button" @click="acceptCookie">OK</AppButton>
  </div>
</template>

<style scoped lang="scss">
.cookie-banner {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 28px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 16px 0 rgba(0, 44, 62, 0.08);
  background: $background-color;
  position: fixed;
  bottom: 40px;
  margin: 0 20px;
  z-index: 9999999;
  @include tablet {
    gap: 36px;
    padding: 24px;
  }
  @include desktop {
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    gap: 60px;
    margin: 0;
  }
  &__text {
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    max-width: 230px;
    @include tablet {
      max-width: 547px;
      font-size: 1rem;
    }
    @include desktop {
      max-width: 760px;
    }
  }
  &__link {
    text-decoration-line: underline;
    font-weight: 700;
  }
  &__btn {
    width: 100px;
    @include tablet {
      width: 104px;
    }
  }
}
</style>