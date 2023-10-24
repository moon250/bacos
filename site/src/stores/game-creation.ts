import { defineStore } from "pinia";
import { ref } from "vue";
import { Bitfield } from "../../../common/Util/Bitfield.ts";
import { GameAnswers } from "../../../common/Enums/GameAnswers.ts";

export const useGameCreationStore = defineStore("game-creation", () => {
  const excludedLetters = ref<string[]>(["W", "X", "Y", "Z"]);
  const lettersCount = ref(5);
  const speed = ref(0x01);
  const answers = ref(new Bitfield<GameAnswers>());

  return { excludedLetters, lettersCount, speed, answers };
});
