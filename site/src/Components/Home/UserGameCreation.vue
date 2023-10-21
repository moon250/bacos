<template>
  <UserCreation v-if="currentPage === 0" @next="currentPage++" />
  <PlayCreateGame v-if="currentPage === 1" @next="currentPage++" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/user.js";
import UserCreation from "./UserCreation.vue";
import PlayCreateGame from "./PlayCreateGame.vue";

const store = useUserStore();
const currentPage = ref(0);
const router = useRouter();

if (store.username !== "") {
  currentPage.value = 1;
}

watch(currentPage, () => {
  console.log(currentPage);
  if (currentPage.value === 2) {
    router.push({ name: "new_game" });
  }
});
</script>

<style scoped></style>
