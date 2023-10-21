import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameCreationStore = defineStore("game-creation", () => {
  const excludedLetters = ref<string[]>(["W", "X", "Y", "Z"]);
  const lettersCount = ref(5);

  return { excludedLetters, lettersCount };
});
