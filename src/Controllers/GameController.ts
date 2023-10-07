import { FastifyReply, FastifyRequest } from "fastify";
import { JsonResponse } from "../Router/JsonResponse.js";
import { Game } from "../Util/Game.js";
import { client } from "../Redis/Client.js";
import * as repl from "repl";

export const GameController = {
  /**
   * Creates a new game
   */
  async create(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<JsonResponse> {
    const body = request.body as { [key: string]: any };

    if (await client.hExists(`game:users`, request.ip)) {
      const game = await client.hGet(`game:users`, request.ip);
      return reply
        .status(403)
        .send(
          new JsonResponse(
            `You are already in a game (${game}), leave it first.`,
          ).toResponse(),
        );
    }

    const game = await Game.create(
      request.ip,
      body["parameters"],
      body["answers"],
      body["letters"],
    );

    return new JsonResponse({
      game: {
        code: game.id,
        parameters: game.parameters,
        answers: game.answers,
        letters: game.letters,
      },
    });
  },

  create_validation: {
    properties: {
      parameters: { type: "number" },
      answers: { type: "number" },
      letters: { type: "number", minimum: 1, maximum: 26 },
    },
    required: ["parameters", "answers", "letters"],
  },

  /**
   * Return the flags used as parameters for the given game
   */
  async parameters(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<JsonResponse> {
    const params = request.params as { [key: string]: any };
    const code = params["code"] as string;

    if (!(await Game.exists(code))) {
      return reply
        .code(404)
        .send(
          new JsonResponse(
            `Game with code ${code} was not found. Does it exist ?`,
          ).toResponse(),
        );
    }

    const game = await Game.get(code);

    return new JsonResponse({
      code,
      answers: {
        bitfield: game.answers.bitfield,
        flags: game.answers.getFlags(),
      },
      parameters: {
        bitfield: game.parameters.bitfield,
        flags: game.parameters.getFlags(),
      },
      letters: game.letters,
    });
  },
};
