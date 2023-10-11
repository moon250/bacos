<template>
  <div class="home-page">
    <div class="title">
      <h1>
        Bacos <Icon name="book" :icon-class="false" class="title__book" />
      </h1>
      <h2>Le jeu du petit bac</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon.vue";
</script>

<style scoped>
.home-page {
  height: 100dvh;
  display: grid;
  place-items: center;
}

.title {
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

@media screen and (max-width: 600px) {
  .title__book {
    height: 75px;
    width: 75px;
  }

  .title {
    h1 {
      gap: 1rem;
    }
  }
}
</style>
