<template>
  <div class="game-creation__wrapper">
    <h2>Créez votre partie</h2>
    <div class="game-creation__field">
      <label for="letterCount">Nombre de lettres :</label>
      <LettersRange id="letterCount" />
    </div>
    <div class="game-creation__field game-creation__exclusion">
      <label for="letterExclusion">Lettres à exclure :</label>
      <LettersExclusion id="letterExclusion" />
    </div>
    <div class="game-creation__field">
      <label for="gameSpeed">Vitesse de la partie :</label>
      <GameSpeedSelection id="gameSpeed" />
    </div>
    <div class="game-creation__field">
      <label for="letterCount">Vitesse de la partie :</label>
      <GameSpeed />
    </div>
  </div>
</template>

<script setup lang="ts">
import LettersRange from "./LettersRange.vue";
import LettersExclusion from "./LettersExclusion.vue";
import GameSpeed from "./GameSpeed.vue";
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 24px;
}

.game-creation__wrapper {
  padding: 24px;
  border: var(--secondary) 3px solid;
  transform: translateX(3px) translateY(-3px);
  box-shadow: -3px 3px 0 0 var(--secondary);
  background: var(--primary);
  flex: 1;
  height: 100%;
  max-width: 950px;
}

.game-creation__field {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.game-creation__exclusion label {
  align-self: flex-start;
}

@media screen and (max-width: 600px) {
  .game-creation__field {
    display: block;
  }
}
</style>
