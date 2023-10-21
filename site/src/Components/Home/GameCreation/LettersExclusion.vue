<template>
  <div
    class="letters-exclusion__wrapper"
    contenteditable="true"
    @keydown.prevent="handle"
    spellcheck="false"
  >
    <span
      v-for="letter of store.excludedLetters"
      @click="remove(letter)"
      @mouseenter.passive="hover = letter"
      @mouseleave.passive="hover = null"
      title="Remettre la lettre"
    >
      {{ hover === letter ? "X" : letter }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useKeyboard } from "../../../Composables/keyboard.ts";
import { useGameCreationStore } from "../../../stores/game-creation.ts";
import { ref } from "vue";

const hover = ref<string | null>(null);
const store = useGameCreationStore();
const keyboard = useKeyboard();

const remove = (letter: string) => {
  const index = store.excludedLetters.indexOf(letter);
  store.excludedLetters.splice(index, 1);
};

const handle = (e: KeyboardEvent) => {
  if (
    keyboard.isLetter(e.key) &&
    !store.excludedLetters.includes(e.key.toUpperCase())
  ) {
    store.excludedLetters.push(e.key.toUpperCase());
  }

  if (["Backspace", "Delete"].includes(e.key)) {
    store.excludedLetters.pop();
  }
};
</script>

<style scoped>
.letters-exclusion__wrapper {
  flex: 1;
  min-height: 32px;
  padding-left: 8px;
  padding-block: 2px;
  border: 3px var(--secondary) solid;
  text-transform: uppercase;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(22, 1fr);

  /** Hide caret **/
  color: transparent;
  text-shadow: 0 0 0 var(--secondary);
}

.letters-exclusion__wrapper span {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: var(--secondary) 3px solid;

  font-size: 0.8rem;
  font-weight: bold;
  transition: all 0.2s;
}

.letters-exclusion__wrapper span:hover {
  border: var(--danger) 3px solid;
  text-shadow: 0 0 0 var(--danger);
}
</style>
