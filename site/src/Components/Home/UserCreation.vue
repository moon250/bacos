<template>
  <div class="user-creation__form">
    <input
      type="text"
      v-model="username"
      placeholder="Entrez votre pseudo"
      @keydown.enter="submit"
      spellcheck="false"
    />
    <button @click.prevent="submit">Jouer</button>

    <div v-if="isLoading" class="user-creation__loading">
      <Loader />
    </div>
  </div>
</template>

<script setup lang="ts">
import Loader from "../Loader.vue";
import { ref } from "vue";
import { HttpMethod, useFetch } from "../../Composables/json-fetch.ts";
import { useUserStore } from "../../stores/user.js";

const isLoading = ref(false);
const store = useUserStore();
const username = ref("");

interface UserCreationResponse {
  message: string;
  username: string;
}

const emit = defineEmits(["next"]);

const submit = async () => {
  if (username.value === "") return;

  isLoading.value = true;

  const res = await useFetch<UserCreationResponse>("/user", HttpMethod.POST, {
    username: username.value,
  });

  isLoading.value = false;

  if (res.ok) {
    store.username = username.value;
    emit("next");
  }
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
