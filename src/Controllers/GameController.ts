import { FastifyReply, FastifyRequest } from "fastify";
import { JsonResponse } from "../Router/JsonResponse.js";
import { Game } from "../Util/Game.js";

export const GameController = {
  /**
   * Creates a new game
   */
  async create(request: FastifyRequest): Promise<JsonResponse> {
    const body = request.body as { [key: string]: any };
    const game = await Game.create(
      request.ip,
      body["parameters"],
      body["answers"],
    );

    return new JsonResponse({
      game: {
        code: game.id,
        parameters: game.parameters,
        answers: game.answers,
      },
    });
  },

  create_validation: {
    properties: {
      parameters: { type: "number" },
      answers: { type: "number" },
    },
    required: ["parameters", "answers"],
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

    if ((await Game.exists(code)) === false) {
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
    });
  },
};
