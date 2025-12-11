<script setup>
const props = defineProps({
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  label: String,
  placeholder: String,
  required: { type: Boolean, default: true }
})

const emit = defineEmits(["update:modelValue"]);

const handleInput = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="app-input">
    <label v-if="label" class="app-input__label">{{ label }}<span v-if="!required" class="app-input__label-prefix">-&nbsp;не&nbsp;обязательно</span></label>
    <div class="app-input__wrapper">
      <slot name="prefix" />
      <slot name="input">
        <input :type="type" :placeholder="placeholder" :required="required" v-model="handleInput" class="app-input__field"/>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  &__label {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0;
    text-align: left;
  }
  &__label-prefix {
    color: rgba(0, 44, 62, 0.4);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    text-align: left;
    padding-left: 6px;
  }
  &__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 44, 62, 0.3);
    &:hover {
      border-color: $secondary-color;
    }
  }
  &__field {
    width: 100%;
    border: none;
    background: transparent;
    padding: 6px 0;
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0;
      text-align: left;
    }
    &:focus-visible {
      outline: none;
    }
  }
}
</style>