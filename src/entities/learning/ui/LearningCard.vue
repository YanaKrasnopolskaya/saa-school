<script setup lang="ts">
import type {Learning} from "@/entities/learning/model/types/Learning";

const props = defineProps<Learning>()
</script>

<template>
  <div class="learning-card" :class="[{'learning-card--reverse': reversed}, `learning-card--${classModifiers}`]">
    <div class="learning-card__content">
      <h3 class="learning-card__title" :class="{'learning-card__title--big': bigTitle}" v-html="title"></h3>
      <slot name="top"></slot>
      <ul class="learning-card__list">
        <li class="learning-card__list-item" v-for="item in description" v-html="item"></li>
      </ul>
      <slot name="bottom"></slot>
    </div>
    <div class="learning-card__img-wrapper">
      <img class="learning-card__img" :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learning-card {
  width: 315px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(240, 243, 244, 1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  @include tablet {
    width: 100%;
    flex-direction: row;
    overflow: inherit;
  }
  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 20px 20px 12px 20px;
    @include tablet {
      padding: 30px 30px 20px 28px;
      gap: 20px;
    }
    @include desktop {
      gap: 20px;
      padding: 36px;
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 24px;
      line-height: 30px;
    }
    @include desktop {
      letter-spacing: -0.4px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @include tablet {
      gap: 10px;
    }
    @include desktop {
      margin-top: 5px;
      gap: 12px;
    }
  }
  &__list li::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 2px;
    border-radius: 50%;
    background: $secondary-color;
    width: 14px;
    height: 14px;
    @include tablet {
      top: 5px;
      left: 4px;
    }
  }
  &__list-item {
    width: 228px;
    position: relative;
    padding-left: 27px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      font-size: 1.125rem;
      line-height: 23px;
      padding: 0 16px 0 27px;
      width: 266px;
    }
    @include desktop {
      font-size: 1.2rem;
      line-height: 25px;
      width: 395px;
    }
  }
  &__img-wrapper {
    overflow: hidden;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(50.00% 50.00% at 50% 50%,rgba(244, 249, 250, 1),rgba(244, 249, 250, 0.51));
    @include tablet {
      width: 351px;
      padding: 20px 30px;
    }
    @include desktop {
      height: 293px;
      width: 513px;
      padding: 0;
    }
  }
  &__img {
    object-position: top;
    object-fit: contain;
    position: relative;
  }
}
.learning-card--reverse {
  @include tablet-desktop {
    flex-direction: row-reverse;
  }
}
.learning-card__title--big {
  font-size: 24px;
  line-height: 30px;
}
.learning-card--time .learning-card__img{
  width: 320px;
  height: 276px;
  top: 18px;
  left: 10px;
  @include tablet {
    top: 14px;
    width: 356px;
    height: 304px;
  }
  @include desktop {
    width: 400px;
    height: 300px;
    top: 2px;
    left: 16px;
  }
}
.learning-card--time .learning-card__list {
  @include tablet {
    gap: 12px;
  }
}
.learning-card--format {
  height: 503px;
}
.learning-card--format .learning-card__content {
  gap: 19px;
  @include tablet {
    padding-right: 0;
    gap: 23px;
  }
  @include desktop {
    padding-left: 19px;
    gap: 14px;
  }
}
.learning-card--format .learning-card__img{
  width: 280px;
  height: 254px;
  top: 5px;
  @include tablet {
    width: 286px;
    height: 254px;
    top: 0;
    left: -2px;
  }
  @include desktop {
    top: 8px;
    left: 5px;
  }
}
.learning-card--format .learning-card__list-item {
  width: 273px;
  @include tablet {
    width: 320px;
  }
  @include desktop {
    width: 420px;
  }
}
.learning-card--course {
  height: 643px;
}
.learning-card--course .learning-card__content{
  gap: 19px;
  @include tablet {
    gap: 24px;
  }
  @include desktop {
    gap: 16px;
    padding-right: 0;
  }
}
.learning-card--course .learning-card__list {
  gap: 12px;
}
.learning-card--course .learning-card__list-item {
  font-size: 18px;
  line-height: 23px;
  width: 100%;
  @include desktop {
    font-size: 20px;
    letter-spacing: -0.4px;
  }
}
.learning-card--course .learning-card__img {
  width: 257px;
  height: 236px;
  top: -2px;
  @include tablet {
    width: 277px;
    height: 256px;
  }
  @include desktop {
    width: 320px;
    height: 300px;
    top: 2px;
    left: 22px;
  }
}
.learning-card--tools {
  height: 560px;
}
.learning-card--tools .learning-card__content {
  padding-top: 16px;
  @include tablet {
    padding: 30px 0 20px 28px;
    gap: 25px;
  }
  @include desktop {
    padding: 39px 0 20px 19px;
    gap: 12px;
  }
}
.learning-card--tools .learning-card__list {
  @include desktop {
    gap: 16px;
  }
}
.learning-card--tools .learning-card__list-item{
  width: 263px;
  @include tablet {
    width: 300px;
  }
  @include desktop {
    width: 100%;
  }
}
.learning-card--tools .learning-card__img {
  width: 284px;
  height: 216px;
  left: 5px;
  @include tablet {
    width: 304px;
    height: 236px;
    top: 2px;
    left: -2px;
  }
  @include desktop {
    width: 333px;
    height: 300px;
    top: 22px;
    left: -14px;
  }
}
.learning-card--feedback {
  height: 482px;
}
.learning-card--feedback .learning-card__content {
  gap: 18px;
  padding-top: 18px;
  @include tablet {
    padding-top: 30px;
    gap: 23px;
  }
  @include desktop {
    padding-top: 38px;
    padding-right: 10px;
    gap: 16px;
  }
}
.learning-card--feedback .learning-card__list-item {
  width: 270px;
  font-size: 18px;
  line-height: 23px;
  @include tablet {
    width: 290px;
  }
  @include desktop {
    width: 100%;
    font-size: 20px;
    letter-spacing: -0.4px;
  }
}
.learning-card--feedback .learning-card__img {
  width: 278px;
  height: 260px;
  top: 6px;
  @include tablet {
    width: 298px;
    height: 280px;
  }
  @include desktop {
    height: 300px;
    top: 7px;
    left: 10px;
  }
}
.learning-card--time,
.learning-card--format,
.learning-card--course,
.learning-card--tools,
.learning-card--feedback {
  @include tablet {
    height: 304px;
  }
  @include desktop {
    height: 293px;
  }
}
</style>