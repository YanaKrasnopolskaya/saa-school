<script setup lang="ts">
const props = defineProps({
  label: String,
})
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="dropdown">
    <button class="dropdown__button" @click="toggle" type="button">
      {{label}}
      <svg class="dropdown__icon" :class="{'dropdown__icon-rotated': isOpen}" width="24" height="24" aria-hidden="true">
        <use href="@/app/assets/icons/sprite.svg#dropdown-open-icon"></use>
      </svg>
    </button>
    <Transition name="dropdown-transition">
      <div class="dropdown__content" v-if="isOpen">
        <slot name="dropdown-text"></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(244, 249, 250, 1);
  width: 100%;
  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: inherit;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 112%;
    letter-spacing: 0;
    text-align: left;
    @include tablet {
      gap: 80px;
    }
  }
  &__icon {
    flex-shrink: 0;
    color: rgb(51,196,233);
    transition: all 0.3s ease
  }
  &__icon-rotated {
    transform: rotate(180deg);
    color: rgba(0, 44, 62, 1);
  }
  &__content {
    padding: 20px 0 0 30px;
    @include tablet {
      max-width: 480px;
    }
  }
}

.dropdown-transition-enter-active,
.dropdown-transition-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.dropdown-transition-enter-from,
.dropdown-transition-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
}

.dropdown-transition-enter-to,
.dropdown-transition-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>