import { FastifyRequest } from "fastify";
import { JsonResponse } from "../Router/JsonResponse.js";

export const GameController = {
  async create(request: FastifyRequest): Promise<JsonResponse> {
    return new JsonResponse("");
  },

  create_validation: {
    properties: {
      parameters: { type: "number" },
      answers: { type: "number" },
    },
    required: ["parameters", "answers"],
  },
};
