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
          <p class="offer__info-text">Вы можете обучить сотрудников на этом курсе. <b>Адаптируем программу под ваш бизнес</b>
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
.offer {
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 36px;
  align-items: flex-start;
  padding: 36px 16px;
  @include tablet {
    padding: 48px 16px;
    gap: 40px;
  }
  @include desktop {
    padding: 66px 52px 66px 62px;
    grid-template-rows: repeat(2, auto);
    gap: 36px;
  }
  &__title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 2.5rem;
    }
    @include desktop {
      font-size: 3rem;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 26px;
    @include tablet {
      gap: 20px;
      max-width: 450px;
    }
    @include desktop {
      max-width: 720px;
      gap: 26px;
    }
  }
  &__info-text {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 1.25rem;
    }
  }
  &__img {
    width: 253px;
    height: 254px;
    margin: 0 auto;
    @include tablet {
      position: absolute;
      right: 40px;
      top: 70%;
      transform: translateY(-70%);
      width: 281px;
      height: 282px;
    }
    @include desktop {
      width: 281px;
      height: 282px;
    }
  }
  &__btn {
    @include tablet {
      width: 240px;
    }
  }
}
</style>