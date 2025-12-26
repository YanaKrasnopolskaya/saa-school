<script setup>
const props = defineProps({
  title: String,
  description: Array,
  image: {
    src: String,
    alt: String,
    width: Number,
    height: Number,
  },
  reversed: Boolean,
})
</script>

<template>
  <div class="learning-card" :class="{'learning-card--reverse': reversed}">
    <div class="learning-card__content">
      <h3 class="learning-card__title">{{props.title}}</h3>
      <slot name="top"></slot>
      <ul class="learning-card__list">
        <li class="learning-card__list-item" v-for="item in props.description" v-html="item"></li>
      </ul>
      <slot name="bottom"></slot>
    </div>
    <div class="learning-card__img">
      <img :src="props.image.src" :alt="props.image.alt" :width="props.image.width" :height="props.image.height"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learning-card {
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(240, 243, 244, 1);
  border-radius: 12px;
  position: relative;
  padding-bottom: 14px;
  @include tablet {
    padding-bottom: 0;
  }
  @include tablet-desktop {
    flex-direction: row;
  }
  &__content {
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    padding: 20px;
    @include tablet {
      padding: 30px 30px 10px 30px;
      gap: 24px;
    }
    @include desktop {
      gap: 20px;
      padding: 40px;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    @include tablet-desktop {
      font-size: 24px;
      line-height: 30px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  &__list li {
    position: relative;
    padding: 0 40px 0 27px;
  }
  &__list li::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 0;
    border-radius: 50%;
    background: $secondary-color;
    width: 14px;
    height: 14px;
  }
  &__list-item {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.25rem;
      line-height: 23px;
    }
    @include desktop {
      line-height: 25px;
    }
  }
  &__img {
    padding: 20px 0;
    display: flex;
    flex: 1 1 50%;
    justify-content: center;
    align-items: center;
    background: radial-gradient(50.00% 50.00% at 50% 50%, rgba(244, 249, 250, 1), rgba(244, 249, 250, 0.51) 100%);
    @include tablet {
      padding: 0;
      width: 320px;
      height: 274px;
    }
  }
}
.learning-card--reverse {
  @include tablet-desktop {
    flex-direction: row-reverse;
  }
}
</style>