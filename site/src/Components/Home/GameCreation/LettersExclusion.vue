<template>
  <div
    class="letters-exclusion__wrapper"
    contenteditable="true"
    @keydown="handle"
  >
    <span v-for="letter of letters">{{ letter }}</span>
  </div>
</template>

<script setup lang="ts">
import { useKeyboard } from "../../../Composables/keyboard.ts";
import { ref } from "vue";

const keyboard = useKeyboard();
const letters = ref<string[]>([]);

const handle = (e: KeyboardEvent) => {
  e.preventDefault();

  if (
    keyboard.isLetter(e.key) &&
    !letters.value.includes(e.key.toUpperCase())
  ) {
    letters.value.push(e.key.toUpperCase());
  }

  if (["Backspace", "Delete"].includes(e.key)) {
    letters.value.pop();
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
