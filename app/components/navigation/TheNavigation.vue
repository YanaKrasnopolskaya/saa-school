<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list__item"><a href="#program" class="nav-list__link">Программа курса</a></li>
      <li class="nav-list__item"><a href="#cost" class="nav-list__link">Стоимость</a></li>
      <li class="nav-list__item"><a href="#contacts" class="nav-list__link" >Контакты</a></li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
.nav-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
    }
    &:disabled {
      cursor: not-allowed;
      color: rgba(0, 44, 62, 0.3);
    }
  }
}
</style>