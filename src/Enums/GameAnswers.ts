import { DataAccessor } from "../Util/DataAccessor.js";
import { GameAnswers } from "../../common/Enums/GameAnswers.js";

export const PossibleAnswers = {
  [GameAnswers.Animal]: new DataAccessor(GameAnswers.Animal, "animals"),
  [GameAnswers.Country]: new DataAccessor(GameAnswers.Country, "countries"),
  [GameAnswers.Sport]: new DataAccessor(GameAnswers.Sport, "sports"),
  [GameAnswers.Color]: new DataAccessor(GameAnswers.Color, "colors"),
  [GameAnswers.Profession]: new DataAccessor(
    GameAnswers.Profession,
    "professions",
  ),
  [GameAnswers.MusicalInstrument]: new DataAccessor(
    GameAnswers.MusicalInstrument,
    "instruments",
  ),
  [GameAnswers.CarBrand]: new DataAccessor(GameAnswers.CarBrand, "car_brands"),
};
