<template>
  <UserCreation v-if="currentPage === 0" @next="currentPage++" />
  <PlayCreateGame v-if="currentPage === 1" @next="currentPage++" />
</template>

<script setup lang="ts">
import { useUserStore } from "../../stores/user.js";
import UserCreation from "./UserCreation.vue";
import { ref } from "vue";
import PlayCreateGame from "./PlayCreateGame.vue";

const store = useUserStore();
const currentPage = ref(0);

if (store.username !== "") {
  currentPage.value = 1;
}
</script>

<style scoped></style>
