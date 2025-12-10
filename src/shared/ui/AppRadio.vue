<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  name: String,
  value: String,
})

const emit = defineEmits(["update:modelValue"]);

const handleRadio = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <label class="app-radio">
    <span v-if="label" class="app-radio__label">{{ label }}</span>
    <input type="radio" v-model="handleRadio" :name="name" :value="value" class="app-radio__field"/>
    <span class="app-radio__custom-radio"></span>
  </label>
</template>

<style scoped lang="scss">
.app-radio {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  &:hover .app-radio__custom-radio {
    border-color: $secondary-color;
  }
  &__label {
    font-size: 1rem;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;
  }
  &__field {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  &__custom-radio {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(0, 44, 62, 0.3);
    border-radius: 50%;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: $secondary-color;
    }
  }
  &__field:checked + .app-radio__custom-radio::after {
    opacity: 1;
  }
  &__field:checked + .app-radio__custom-radio {
    border-color: $secondary-color;
  }
}
</style>