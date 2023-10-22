<template>
  <div class="letters-range__wrapper">
    <button @click="advance(-1)">
      <Icon name="sub" :icon-class="false" />
    </button>
    <div class="letters-range__range">
      <span class="letters-range__background" />
      <span class="letters-range__count">{{ store.lettersCount }}</span>
    </div>
    <button @click="advance(1)">
      <Icon name="add" :icon-class="false" />
    </button>
  </div>
</template>

<script setup lang="ts">
import Icon from "../../Icon.vue";
import { useGameCreationStore } from "../../../stores/game-creation.ts";

const store = useGameCreationStore();

const advance = (step: number) => {
  if (store.lettersCount + step > 26 || store.lettersCount + step < 1) {
    return;
  }

  store.lettersCount += step;
  document.documentElement.style.setProperty(
    "--letters-range-progress",
    Math.floor((1 - store.lettersCount / 26) * 100) + "%",
  );
};
</script>

<style scoped>
.letters-range__wrapper {
  flex: 1;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 16px;
}

.letters-range__wrapper button {
  height: 24px;
  width: 24px;
  padding: 0;
  display: grid;
  place-items: center;
}

.letters-range__wrapper button svg {
  height: 16px;
  width: 16px;
}

.letters-range__range {
  position: relative;
  border: var(--secondary) 3px solid;
  height: 24px;
}

.letters-range__background {
  transition: all 0.2s;
  position: absolute;
  top: 0;
  left: 0;
  right: var(--letters-range-progress, 80%);
  z-index: -1;
  /* 24px - border width */
  height: 21px;
  background: var(--accent);
}

.letters-range__count {
  transition: all 0.2s;
  position: absolute;
  text-align: center;
  font-weight: bold;
  top: -4px;
  width: 28px;
  height: 28px;
  background: var(--primary);
  border: var(--secondary) 3px solid;
  right: calc(var(--letters-range-progress, 80%) - 8px);
}
</style>
