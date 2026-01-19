<script setup lang="ts">
import type {Advantages} from "@/entities/advantage/model/types/Advantages";

defineProps<Advantages>();
</script>

<template>
  <div class="advantage-card" :class="{'advantage-card--reversed' : reversed, 'advantage-card--horizontal' : horizontal}">
    <div class="advantage-card__img-wrapper">
      <img :src="image.src" :alt="image.alt" :class="['advantage-card__img', `advantage-card__img--${uniqueClass}`]" />
    </div>
    <div class="advantage-card__content">
      <h3 class="advantage-card__title">{{title}}</h3>
      <slot name="more"></slot>
      <p class="advantage-card__description">{{description}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advantage-card {
  width: 168px;
  height: 212px;
  border-radius: 10px;
  box-shadow: 0 8.64px 14.398340225219727px 0 rgba(12, 57, 75, 0.12);
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 6.19px 21px 7.19px;
  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 87.25px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    @include tablet {
      height: 125px;
      gap: 12px;
    }
    @include desktop {
      height: 112px;
    }
  }
  &__title {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
    @include tablet {
      font-size: 1.25rem;
      line-height: 25px;
    }
    @include desktop {
      font-size: 1.5rem;
      line-height: 30px;
    }
  }
  &__description {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0;
    text-align: center;
    color: $text-secondary-color;
    @include tablet-desktop {
      font-size: 1rem;
      line-height: 112%;
    }
  }
}
.advantage-card__img--group {
  width: 120px;
  height: 79px;
  @include tablet {
    width: 166px;
    height: 109px;
  }
  @include desktop {
    width: 201px;
    height: 132px;
  }
}
.advantage-card__img--ai {
  width: 104px;
  height: 61px;
  @include tablet {
    width: 144px;
    height: 84px;
  }
  @include desktop {
    width: 175px;
    height: 102px;
  }
}
.advantage-card__img--project {
  width: 97.35px;
  height: 74.27px;
  @include tablet {
    width: 135px;
    height: 103px;
  }
  @include desktop {
    width: 163px;
    height: 124px;
  }
}
.advantage-card__img--help {
  width: 78px;
  height: 78px;
  @include tablet {
    width: 97px;
    height: 97px;
  }
  @include desktop {
    width: 117px;
    height: 117px;
  }
}
.advantage-card__img--certificate {
  width: 96px;
  height: 81px;
  @include tablet {
    width: 140px;
    height: 114px;
  }
  @include desktop {
    width: 183px;
    height: 150px;
  }
}
.advantage-card--horizontal {
  width: 345px;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 14px 24px 12.73px 34px;
}
.advantage-card--horizontal .advantage-card__img-wrapper {
  height: auto;
  flex: 1;
}
.advantage-card--horizontal .advantage-card__content {
  width: 218px;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 10px;
  flex-shrink: 0;
}
.advantage-card--reversed {
  flex-direction: row-reverse;
  padding: 13px 24px 12.73px 24px;
  gap: 10px;
}
.advantage-card--reversed .advantage-card__content {
  padding-top: 8px;
}
</style>