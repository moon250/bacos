export enum GameParameters {
  // Time settings
  Short = 1 << 0,
  Medium = 1 << 1,
  Long = 1 << 2,

  // Privacy settings
  Private = 1 << 3,
  Public = 1 << 4,
}
