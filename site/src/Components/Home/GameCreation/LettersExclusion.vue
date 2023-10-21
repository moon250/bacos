<template>
  <div
    class="letters-exclusion__wrapper"
    contenteditable="true"
    @keydown="handle"
    spellcheck="false"
  >
    <span v-for="letter of store.excludedLetters">{{ letter }}</span>
  </div>
</template>

<script setup lang="ts">
import { useKeyboard } from "../../../Composables/keyboard.ts";
import { useGameCreationStore } from "../../../stores/game-creation.ts";

const store = useGameCreationStore();
const keyboard = useKeyboard();

const handle = (e: KeyboardEvent) => {
  e.preventDefault();

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
  height: 32px;
  flex: 1;
  padding-left: 8px;
  padding-block: 2px;
  border: 3px var(--secondary) solid;
  text-transform: uppercase;
  display: flex;
  gap: 8px;

  /** Hide caret **/
  color: transparent;
  text-shadow: 0 0 0 var(--secondary);
}

.letters-exclusion__wrapper span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: var(--secondary) 3px solid;
}
</style>
