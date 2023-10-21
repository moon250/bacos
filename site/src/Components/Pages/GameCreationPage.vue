<template>
  <Header />
  <div class="game-creation__page">
    <GameCreation />
  </div>
</template>

<script setup lang="ts">
import GameCreation from "../Home/GameCreation/GameCreation.vue";
import Header from "../Header.vue";
</script>

<style scoped>
.game-creation__page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 32px;
}

@media screen and (max-width: 600px) {
  .game-creation__page {
    padding: 8px;
  }
}
</style>
