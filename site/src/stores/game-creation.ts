import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameCreationStore = defineStore("game-creation", () => {
  const excludedLetters = ref<string[]>([]);
  const lettersCount = ref(5);

  return { excludedLetters, lettersCount };
});
