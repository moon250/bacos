<template>
  <Suspense>
    <router-view />
  </Suspense>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "./Components/Footer.vue";
</script>

<style scoped></style>
