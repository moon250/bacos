<template>
  <div class="user-creation__form">
    <input type="text" v-model="username" placeholder="Entrez votre pseudo" />
    <button @click.prevent="submit">Jouer</button>

    <div v-if="isLoading" class="user-creation__loading">
      <Loader />
    </div>
  </div>
</template>

<script setup lang="ts">
import Loader from "../Loader.vue";
import { ref } from "vue";
import { JSONFetch } from "../../json-fetch.ts";

const isLoading = ref(false);
const username = ref("");

const submit = async () => {
  isLoading.value = true;
  const user = await JSONFetch("/user", "POST", {
    username: username.value,
  });
  isLoading.value = false;

  console.log(user);
};
</script>

<style scoped>
.user-creation__form {
  display: flex;
  gap: 16px;
  position: relative;
}

.user-creation__loading {
  position: absolute;
  inset: -4px;

  display: grid;
  place-items: center;
  backdrop-filter: blur(1px);
}
</style>
