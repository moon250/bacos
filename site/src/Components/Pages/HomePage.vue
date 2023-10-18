<template>
  <Header />
  <div class="home-page">
    <div class="home-page__title">
      <h1>
        Bacos <Icon name="book" :icon-class="false" class="title__book" />
      </h1>
      <h2>Le jeu du petit bac</h2>
    </div>
    <UserGameCreation />
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon.vue";
import UserGameCreation from "../Home/UserGameCreation.vue";
import { useFetch } from "../../Composables/json-fetch.ts";
import { useUserStore } from "../../stores/user.ts";
import Header from "../Header.vue";

const res = await useFetch<{ username: string }>("/user");

if (res.ok) {
  useUserStore().username = res.data.username;
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.home-page__title {
  display: grid;
  place-items: center;

  h1 {
    display: flex;
    font-size: 5.5rem;
    gap: 2rem;
  }
}

.title__book {
  height: 100px;
  width: 100px;
}

@media screen and (max-width: 600px) {
  .title__book {
    height: 75px;
    width: 75px;
  }

  .home-page__title {
    h1 {
      gap: 1rem;
      font-size: 4rem;
    }
  }
}
</style>
