<script setup lang="ts">
import type {Card} from "@/entities/internship";

const props = defineProps<Card>()
</script>

<template>
  <div class="internship-card" :class="bg">
    <img class="internship-card__img" :src="img.src" :alt="img.alt" :width="img.width" :height="img.height"/>
    <div class="internship-card__title">{{title}}</div>
    <div class="internship-card__description">{{description}}</div>
  </div>
</template>

<style lang="scss" scoped>
.internship-card {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(90, 118, 130, 0.2);
  background-image: url("/images/intership-bg-1.png");
  background-repeat: no-repeat;
  background-color: $background-color;
  background-size: 200% auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  padding: 6px 10px 24px 24px;
  @include tablet {
    padding-bottom: 0;
    flex: 0 0 45%;
  }
  @include desktop {
    padding-bottom: 40px;
    flex: 1;
  }
  &__img {
    align-self: flex-end;
    margin-bottom: 17px;
    width: 125px;
    height: 123px;
    @include tablet {
      margin-bottom: 55px;
    }
    @include desktop {
      margin-bottom: 50px;
    }
  }
  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0;
    text-align: left;
  }
  &__description {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    color: $text-secondary-color;
  }
}
.internship-card--bg1 {
  background-position: bottom left;
}
.internship-card--bg2 {
  background-position: left center;
}
.internship-card--bg3 {
  background-position: bottom;
}
</style>