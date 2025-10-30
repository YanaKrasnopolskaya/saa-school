<script setup lang="ts">
const props = defineProps({
  name: String,
  period: String,
  price: String
})
</script>

<template>
  <div class="perspectives-card">
    <div class="perspectives-card__desc">
      <div class="perspectives-card__desc-name">{{props.name}}</div>
      <div class="perspectives-card__desc-period">{{props.period}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.perspectives-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>