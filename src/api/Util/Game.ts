import { client } from "../Redis/Client.js";
import { Bitfield } from "./Bitfield.js";
import { GameId, Ip } from "../types.js";
import { GameAnswers as GameAnswersEnum } from "../Enums/GameAnswers.js";
import { GameParameters as GameParametersEnum } from "../Enums/GameParameters.js";

type GameParameters = Bitfield<GameParametersEnum>;
type GameAnswers = Bitfield<GameAnswersEnum>;

export type GameObject = {
  id: GameId;
  owner: Ip;
  parameters: GameParameters;
  answers: GameAnswers;
};

export class Game {
  static async create(
    owner: Ip,
    parameters: GameParameters,
    answers: GameAnswers,
  ): Promise<GameObject> {
    const id = await this.generateId();

    const game = {
      id,
      owner,
      parameters,
      answers,
    };

    await client.set(`game:${id}`, game);

    return game;
  }

  static async generateId(): Promise<GameId> {
    // https://stackoverflow.com/a/8084248
    let id = (Math.random() + 1).toString(36).substring(6).toUpperCase();

    // Handle the case where the id is already in use. Should barely happen (once in 50k times according to the guy on
    // StackOverflow but just in case, it is here)
    while (await this.exists(id)) {
      id = (Math.random() + 1).toString(36).substring(6).toUpperCase();
    }

    return id;
  }

  static async get(id: GameId) {
    return await client.get<GameObject>(`game:${id}`);
  }

  static async exists(id: GameId) {
    return await client.exists(`game:${id}`);
  }
}
