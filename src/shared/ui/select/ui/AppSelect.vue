<script setup>
import spriteUrl from '@/app/assets/icons/sprite.svg'
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
  }
});
const emit = defineEmits(['update:modelValue']);
const open = ref(false);

// поиск выбранной опции
const selected = computed(() => {
  if (!props.options?.length) {
    return null;
  }
  return props.options.find((opt) => opt.code === props.modelValue) || null;
});

const handleSelect = (code) => {
  emit('update:modelValue', code);
  open.value = false;
}
</script>

<template>
  <div class="select">
    <button class="select__button" type="button" @click="open = !open" >
      <svg width="24" height="16">
        <use v-if="selected" :href="`${spriteUrl}#${selected.iconId}`"></use>
      </svg>
      <svg class="select__sel-icon" aria-hidden="true" width="7" height="4">
        <use href="@/app/assets/icons/sprite.svg#select-icon"></use>
      </svg>
    </button>
    <ul class="select__dropdown" v-if="open">
      <li class="select__item" v-for="opt in options" :key="opt.code" @click="handleSelect(opt.code)">
        <svg width="24" height="16">
          <use :href="`${spriteUrl}#${opt.iconId}`"></use>
        </svg>
        <span>{{ opt.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  &__button {
    border: none;
    display: flex;
    gap: 8px;
    align-items: center;
    background: inherit;
  }
  &__dropdown {
    position: absolute;
    top: 30px;
    width: auto;
    display: flex;
    flex-direction: column;
    background: rgb(230, 248, 252);
    padding: 10px;
    gap: 16px;
  }
  &__item {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    cursor: pointer;
  }
}
</style>