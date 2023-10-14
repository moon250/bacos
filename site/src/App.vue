<template>
  <Suspense>
    <router-view />
  </Suspense>
  <Footer />
</template>

<script setup lang="ts">
import HomePage from "./Components/Pages/HomePage.vue";
import Footer from "./Components/Footer.vue";
</script>

<style scoped></style>
