<script setup lang="ts">
import AppHeader from "@/widgets/header/AppHeader.vue";
import AppFooter from "@/widgets/footer/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
