<template>
  <div class="game-speed__wrapper">
    <p
      :data-selected="store.speed === GameParameters.Short"
      @click="store.speed = GameParameters.Short"
    >
      30s par lettre
    </p>
    <p
      :data-selected="store.speed === GameParameters.Medium"
      @click="store.speed = GameParameters.Medium"
    >
      1min30s par lettre
    </p>
    <p
      :data-selected="store.speed === GameParameters.Long"
      @click="store.speed = GameParameters.Long"
    >
      3min par lettre
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGameCreationStore } from "../../../stores/game-creation.ts";
import { GameParameters } from "../../../../../common/Enums/GameParameters.ts";

const store = useGameCreationStore();
</script>

<style scoped>
.game-speed__wrapper {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  font-size: 0.9rem;
}

.game-speed__wrapper p {
  cursor: pointer;
  border: var(--secondary) 3px solid;
  padding: 2px 32px;
  transition: all 0.2s;
  text-align: center;
}

.game-speed__wrapper p:hover,
.game-speed__wrapper p[data-selected="true"] {
  transform: translateX(3px) translateY(-3px);
  box-shadow: -3px 3px 0 0 var(--secondary);
  font-weight: bold;
}
</style>
