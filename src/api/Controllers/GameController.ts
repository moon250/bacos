import { FastifyRequest } from "fastify";
import { JsonResponse } from "../Router/JsonResponse.js";
import { Game } from "../Util/Game.js";

export const GameController = {
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
};
