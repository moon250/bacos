import { defineStore } from "pinia";
import { ref } from "vue";
import { Bitfield } from "../../../common/Util/Bitfield.ts";
import { GameAnswers } from "../../../common/Enums/GameAnswers.ts";
import { GameParameters } from "../../../common/Enums/GameParameters.ts";

export const useGameCreationStore = defineStore("game-creation", () => {
  const excludedLetters = ref<string[]>(["W", "X", "Y", "Z"]);
  const lettersCount = ref(5);
  const speed = ref(GameParameters.Medium);
  const answers = ref(new Bitfield<GameAnswers>());
  answers.value.add(GameAnswers.Color);
  answers.value.add(GameAnswers.Animal);
  answers.value.add(GameAnswers.Sport);
  answers.value.add(GameAnswers.Country);
  answers.value.add(GameAnswers.Profession);

  return { excludedLetters, lettersCount, speed, answers };
});
