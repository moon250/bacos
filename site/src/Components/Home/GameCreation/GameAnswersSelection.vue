<template>
  <div class="game-answers__wrapper">
    <p
      v-for="answer of answers"
      :data-selected="store.answers.has(answer)"
      @click="store.answers.toggle(answer)"
    >
      {{ GameAnswersNames[answer] }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGameCreationStore } from "../../../stores/game-creation.ts";
import {
  GameAnswers,
  GameAnswersNames,
} from "../../../../../common/Enums/GameAnswers.ts";

const store = useGameCreationStore();
// Remove enum keys
const answers = Object.keys(GameAnswers)
  .filter((answer) => !isNaN(Number(answer)))
  .map((answer) => Number(answer));
</script>

<style scoped>
.game-answers__wrapper {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 32px;
  font-size: 0.9rem;
}

.game-answers__wrapper p {
  cursor: pointer;
  border: var(--secondary) 3px solid;
  padding: 2px 32px;
  transition: all 0.2s;
  text-align: center;
  width: max-content;
}

.game-answers__wrapper p:hover,
.game-answers__wrapper p[data-selected="true"] {
  transform: translateX(3px) translateY(-3px);
  box-shadow: -3px 3px 0 0 var(--secondary);
  font-weight: bold;
}
</style>
