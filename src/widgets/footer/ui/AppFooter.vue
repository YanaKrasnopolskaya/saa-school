<script setup lang="ts">
</script>

<template>
  <div class="container">
    <footer class="footer">
      <div class="footer__contact">
        <a class="footer__contact-link" href="tel:88003008352">8 800 300 83 52</a>
        <a class="footer__contact-link" href="mailto:info@sadaschool.ru">info@sadaschool.ru</a>
        <div class="footer__contact-socials">
          <a href="#" class="footer__contact-social">
            <svg class="footer__vk-icon" width="35" height="22" aria-hidden="true">
              <use href="@/app/assets/icons/sprite.svg#vk-icon"></use>
            </svg>
          </a>
          <a href="#" class="footer__contact-social">
            <svg class="footer__tg-icon" width="29" height="24" aria-hidden="true">
              <use href="@/app/assets/icons/sprite.svg#tg-icon"></use>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer__documents">
        <p class="footer__documents-text">Документы</p>
        <a href="#" class="footer__documents-link footer__documents-link--super">Сведения об образовательной организации</a>
        <a href="#" class="footer__documents-link">Публичная оферта</a>
        <a href="#" class="footer__documents-link">Политика конфиденциальности</a>
        <a href="#" class="footer__documents-link">Лицензия № Л035-01298-77/00185314</a>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding: 40px 16px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  @include tablet {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 40px 96px;
  }
  @include desktop {
    padding: 64px 64px 171px;
  }
  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  &__contact-link {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
  }
  &__contact-socials {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }
  &__contact-social {
    border: 1px solid rgba(0, 44, 62, 0.12);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__contact-social svg {
    width: 52px;
    height: 52px;
  }
  &__documents {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    position: relative;
    @include tablet {
      gap: 16px;
    }
    @include desktop {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 48px;
      justify-content: space-between;
    }
  }
  &__documents-text {
    color: rgba(0, 44, 62, 0.3);
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    grid-column: span 2;
  }
  &__documents-link {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
  &__documents-link--super {
    color: rgba(3, 165, 201, 1);
  }
}
</style>