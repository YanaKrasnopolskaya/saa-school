<script setup lang="ts">
import AppHeader from "@/widgets/header/ui/AppHeader.vue";
import AppFooter from "@/widgets/footer/ui/AppFooter.vue";
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
