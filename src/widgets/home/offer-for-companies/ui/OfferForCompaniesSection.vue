<script setup>
import {AppButton} from "@/shared/ui/button/index.ts";
import {ModalWindow, useModal} from "@/features/modal/index.ts";
import {LegalForm} from "@/features/forms/index.ts";

const {isOpenModal, openModal, closeModal} = useModal();
</script>

<template>
  <section class="offer-for-companies-section">
    <div class="container">
      <div class="offer">
        <h2 class="offer__title">Предложение для компаний</h2>
        <div class="offer__info">
          <p class="offer__info-text">Вы можете обучить сотрудников на&nbsp;этом курсе. <b>Адаптируем программу под ваш бизнес</b>
            и предоставим отчёты об успеваемости. При обучении сразу нескольких сотрудников — более выгодная стоимость.</p>
          <span class="offer__info-text">Оставьте заявку, и мы вышлем вам <a href="#"><b>индивидуальное предложение.</b></a></span>
        </div>
        <img class="offer__img" src="/images/b2b.png" alt="Предложение для компаний">
        <AppButton class="offer__btn" type="button" @click="openModal">оставить заявку</AppButton>
      </div>
    </div>
    <ModalWindow :modal-value="isOpenModal" @close="closeModal">
      <template #form>
        <LegalForm/>
      </template>
    </ModalWindow>
  </section>
</template>

<style scoped lang="scss">
.offer-for-companies-section {
  padding: 44px 16px;
  @include tablet {
    padding: 45px 14px;
  }
  @include desktop {
    padding: 98px 65px 68px;
  }
}
.offer {
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 28px;
  align-items: flex-start;
  @include tablet {
    gap: 41px;
  }
  @include desktop {
    grid-template-rows: repeat(2, auto);
    gap: 28px;
  }
  &__title {
    width: 264px;
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      width: fit-content;
      font-size: 2.5rem;
    }
    @include desktop {
      font-size: 3rem;
      letter-spacing: -0.9px;
      line-height: 100%;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 26px;
    @include tablet {
      gap: 20px;
      max-width: 470px;
    }
    @include desktop {
      max-width: 720px;
      gap: 24px;
    }
  }
  &__info-text {
    width: 315px;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      width: 100%;
      font-size: 1.25rem;
    }
    @include desktop {
      letter-spacing: -0.35px;
    }
  }
  &__img {
    position: relative;
    top: -10px;
    left: -10px;
    width: 283px;
    height: 284px;
    margin: 0 auto;
    @include tablet {
      position: absolute;
      left: auto;
      right: 20px;
      top: 284px;
      transform: translateY(-70%);
      width: 300px;
      height: 290px;
    }
    @include desktop {
      right: -20px;
      top: 200px;
      width: 321px;
      height: 322px;
    }
  }
  &__btn {
    margin-top: -15px;
    @include tablet {
      width: 240px;
      margin-top: 0;
    }
    @include desktop {
      width: 234px;
      margin-top: 4px;
    }
  }
}
</style>