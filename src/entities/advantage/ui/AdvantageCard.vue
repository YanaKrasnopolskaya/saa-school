<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  reversed: Boolean,
  horizontal: Boolean,
})
</script>

<template>
  <div class="benefits-card" :class="{'benefits-card--reversed': reversed, 'benefits-card--horizontal': horizontal}">
    <div class="benefits-card__img">
      <slot name="image"></slot>
    </div>
    <div class="benefits-card__content">
      <h4 class="benefits-card__content-title">{{title}}</h4>
      <slot name="more"></slot>
      <p class="benefits-card__content-description">{{description}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.benefits-card {
  border-radius: 10px;
  box-shadow: 0 8.63900375366211px 14.398340225219727px 0 rgba(12, 57, 75, 0.12);
  background: $background-color;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 16px;
  margin: 0 4px;
  @include tablet {
    padding-bottom: 30px;
  }
  @include desktop {
    padding: 30px 50px;
  }
  &__img {
    overflow: hidden;
    width: 120px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0; // не сжимается
    @include tablet {
      width: 166px;
      height: 110px;
    }
    @include desktop {
      width: 200px;
      height: 132px;
    }
  }
  &__content {
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include tablet-desktop {
      gap: 12px;
    }
  }
  &__content-title {
    font-size: 0.85em;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
    white-space: nowrap;
    @include tablet {
      font-size: 1.25em;
      line-height: 25px;
      white-space: wrap;
    }
    @include desktop {
      font-size: 1.5em;
      line-height: 30px;
    }
  }
  &__content-description {
    color: $text-secondary-color;
    font-size: 0.75em;
    font-weight: 400;
    line-height: 112%;
    letter-spacing: 0;
    text-align: center;
    @include tablet-desktop {
      font-size: 1em;
    }
  }
}
.benefits-card--horizontal {
  flex-direction: row;
  @include tablet {
    flex-direction: column;
  }
  @include desktop {
    flex-direction: row;
  }

}
.benefits-card--reversed {
  flex-direction: row-reverse;
  @include tablet {
    flex-direction: column;
  }
  @include desktop {
    flex-direction: row-reverse;
  }
}
</style>