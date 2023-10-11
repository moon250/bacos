<template>
  <div class="home-page">
    <div class="home-page__title">
      <h1>
        Bacos <Icon name="book" :icon-class="false" class="title__book" />
      </h1>
      <h2>Le jeu du petit bac</h2>
    </div>
    <div class="home-page__form">
      <input type="text" name="" id="" placeholder="Entrez votre pseudo" />
      <button>Jouer</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon.vue";
</script>

<style scoped>
.home-page {
  height: 100dvh;
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
    gap: 2rem;
  }
}

.title__book {
  height: 100px;
  width: 100px;
}

.home-page__form {
  display: flex;
  gap: 16px;
}

@media screen and (max-width: 600px) {
  .title__book {
    height: 75px;
    width: 75px;
  }

  .home-page__title {
    h1 {
      gap: 1rem;
    }
  }
}
</style>
