<script setup lang="ts">
import FooterView from "~/components/FooterView.vue";
</script>

<template>
  <div>
    <HeaderView />
    <main>
      <slot />
    </main>
    <FooterView />
  </div>
</template>

<style scoped></style>
