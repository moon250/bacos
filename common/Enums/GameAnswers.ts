export enum GameAnswers {
  Animal = 1 << 0,
  Country = 1 << 1,

  // Cities
  WorldCities = 1 << 2,
  //FrenchCities = 1 << 3,
  //UnitedStatesCities = 1 << 4,

  Sport = 1 << 5,
  Color = 1 << 6,
  FruitVegetable = 1 << 7,
  Profession = 1 << 8,
  MusicalInstrument = 1 << 9,
  CarBrand = 1 << 10,
}

export const GameAnswersNames: { [key: number]: string } = {
  [GameAnswers.Animal]: 'Animal',
  [GameAnswers.Country]: 'Pays',
  [GameAnswers.WorldCities]: 'Ville',
  //[GameAnswers.FrenchCities]: '',
  //[GameAnswers.UnitedStatesCities]: '',
  [GameAnswers.Sport]: 'Sport',
  [GameAnswers.Color]: 'Couleur',
  [GameAnswers.FruitVegetable]: 'Fruit ou légume',
  [GameAnswers.Profession]: 'Métier',
  [GameAnswers.MusicalInstrument]: 'Instrument de musique',
  [GameAnswers.CarBrand]: 'Marque de voiture',
}
