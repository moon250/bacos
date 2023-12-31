import { client } from "../Redis/Client.js";
import { Bitfield } from "../../common/Util/Bitfield.js";
import { GameId, Ip } from "../types.js";
import { GameAnswers as GameAnswersEnum } from "../../common/Enums/GameAnswers.js";
import { GameParameters as GameParametersEnum } from "../../common/Enums/GameParameters.js";

type GameParameters = Bitfield<GameParametersEnum>;
type GameAnswers = Bitfield<GameAnswersEnum>;

export type GameObject = {
  id: GameId;
  owner: Ip;
  parameters: GameParameters;
  answers: GameAnswers;
  letters: number;
};

export class Game {
  static async create(
    owner: Ip,
    parameters: GameParameters,
    answers: GameAnswers,
    letters: number,
  ): Promise<GameObject> {
    const id = await this.generateId();

    const game = {
      id,
      owner,
      parameters,
      answers,
      letters,
    };

    await client.set(`game:${id}`, game);
    await client.sAdd(`game:${id}:members`, owner);
    await client.hSet(`game:users`, owner, id);

    return game;
  }

  static async delete(id: GameId) {
    await client.del(`game:${id}`);
    await client.del(`game:${id}:members`);
  }

  static async generateId(): Promise<GameId> {
    // https://stackoverflow.com/a/8084248
    // https://stackoverflow.com/a/6259543
    const generate = (): string =>
      (
        Math.random()
          .toString(36)
          .substring(2)
          .match(/.{1,6}/g) as RegExpMatchArray
      ).at(0) as string;

    let id = generate().toUpperCase();

    // Handle the case where the id is already in use. Should barely happen (once in 50k times according to the guy on
    // StackOverflow but just in case, it is here)
    while (await this.exists(id)) {
      id = generate().toUpperCase();
    }

    return id;
  }

  static async get(id: GameId): Promise<GameObject> {
    const game = await client.get(`game:${id}`);

    return {
      id: game.id,
      owner: game.owner,
      parameters: new Bitfield<GameParametersEnum>(game.parameters),
      answers: new Bitfield<GameAnswersEnum>(game.answers),
      letters: game.letters,
    };
  }

  static async exists(id: GameId) {
    return await client.exists(`game:${id}`);
  }

  static async join(id: GameId, user: Ip) {
    if (!(await this.exists(id))) {
      return false;
    }

    await client.sAdd(`game:${id}:members`, user);
    await client.hSet(`game:users`, user, id);

    return true;
  }

  static async leave(id: GameId, user: Ip) {
    if (!(await this.exists(id))) {
      return false;
    }

    if (!(await client.sIsMember(`game:${id}:members`, user))) {
      return false;
    }

    await client.sRem(`game:${id}:members`, user);
    await client.hDel(`game:users`, user);

    if ((await client.sCard(`game:${id}:members`)) === 0) {
      await this.delete(id);
    }

    return true;
  }

  static async isInGame(user: Ip, id: GameId | null = null) {
    if (id) {
      return await client.sIsMember(`game:${id}:members`, user);
    }
    return await client.hExists("game:users", user);
  }
}
