<template>
  <div class="game-creation__wrapper">
    <h2>Créez votre partie</h2>
    <div class="game-creation__field">
      <label for="letterCount">Nombre de lettres :</label>
      <LettersRange />
    </div>
    <div class="game-creation__field">
      <label for="letterCount">Lettres à exclure :</label>
      <LettersExclusion />
    </div>
  </div>
</template>

<script setup lang="ts">
import LettersRange from "./LettersRange.vue";
import LettersExclusion from "./LettersExclusion.vue";
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
  position: absolute;
  background: var(--primary);
  inset: 100px;
  z-index: 100;
}

.game-creation__field {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
</style>
