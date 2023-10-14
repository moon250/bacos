<template>
  <div class="play-create__wrapper">
    <div class="game-join__form">
      <input
        type="text"
        v-model="code"
        placeholder="Entrez un code de partie"
        @keydown.enter="submit"
      />
      <button @click.prevent="submit">Jouer</button>
    </div>
    <p>Ou</p>
    <button class="button-large">Créer une partie</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const code = ref("");
</script>

<style scoped>
.play-create__wrapper {
  width: min-content;
  display: grid;
  place-items: center;
  gap: 16px;
}

.game-join__form {
  display: flex;
  gap: 16px;
  position: relative;
}

button {
  max-width: 470px;
}
</style>
