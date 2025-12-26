<script setup lang="ts">
</script>

<template>
  <nav class="nav">
      <a href="#courses" class="nav__link" aria-disabled="true">Программа курса</a>
    <a href="#cost" class="nav__link">Стоимость</a>
    <a href="#contacts" class="nav__link nav__link--hide-mobile">Контакты</a>
  </nav>
</template>
<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @include desktop {
    flex-direction: row;
  }
  &__link {
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    padding: 15px 28px;
    &:hover {
      border-radius: 3000px;
      box-shadow: inset 0px -4px 12px 0px rgba(0, 44, 62, 0.08);
      background: rgba(229, 246, 248, 1);
    }
    &:focus {
      border-radius: 3000px;
      box-shadow: inset 0px -4px 12px 0px rgba(0, 44, 62, 0.08);
      background: rgba(229, 246, 248, 1);
      color: rgba(51, 196, 233, 1);
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
      color: rgba(0, 44, 62, 0.3);
    }
  }
  &__link--hide-mobile {
    display: none;
    @include desktop {
      display: block;
    }
  }

}
</style>