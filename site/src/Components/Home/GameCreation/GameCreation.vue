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
    <div class="game-creation__field game-creation__answers">
      <label for="gameAnswers">Réponses :</label>
      <GameAnswersSelection id="gameAnswers" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LettersRange from "./LettersRange.vue";
import LettersExclusion from "./LettersExclusion.vue";
import GameSpeedSelection from "./GameSpeedSelection.vue";
import GameAnswersSelection from "./GameAnswersSelection.vue";
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

.game-creation__field label,
.game-creation__answers label {
  margin-top: 4px;
  align-self: flex-start;
}

@media screen and (max-width: 600px) {
  .game-creation__field {
    display: block;
  }
}
</style>
