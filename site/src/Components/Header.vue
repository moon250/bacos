<template>
  <div class="header__wrapper">
    <p v-if="user.username !== ''">
      <Icon name="account" />
      {{ user.username }}
    </p>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
import { useUserStore } from "../stores/user.ts";

const user = useUserStore();
</script>

<style scoped>
.header__wrapper {
  display: grid;
  justify-items: flex-end;
  align-self: flex-end;
  margin: 16px 32px;
}

.header__wrapper p {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: bold;
}
</style>
