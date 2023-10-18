<template>
  <input class="letters-exclusion__wrapper" type="text" pattern="[A-Z]{6}" />
</template>

<script setup lang="ts"></script>

<style scoped>
.letters-exclusion__wrapper {
  height: 32px;
  flex: 1;
  padding-left: 8px;
}
</style>
