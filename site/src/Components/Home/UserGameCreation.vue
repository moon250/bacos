<template>
  <UserCreation />
</template>

<script setup lang="ts">
import { useUserStore } from "../../stores/user.js";
import UserCreation from "./UserCreation.vue";

const store = useUserStore();
</script>

<style scoped></style>
