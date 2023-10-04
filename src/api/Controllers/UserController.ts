import { JsonResponse } from "../Router/JsonResponse.js";
import { client } from "../Redis/Client.js";
import { FastifyRequest } from "fastify";

type User = {
  username: string;
  ip: string;
};

export const UserController = {
  async create(request: FastifyRequest): Promise<JsonResponse> {
    const ip = request.ip;
    const body = request.body as { [key: string]: unknown };
    const username = body["username"];

    if (await client.exists(`users:${ip}`)) {
      const user = (await client.get(`users:${ip}`)) as User;

      return new JsonResponse({
        message: `You already have a temporary user. Done nothing.`,
        username: user.username,
      });
    }

    await client.set(
      `users:${ip}`,
      {
        username,
        ip,
      } as User,
      6 * 60 * 60, // 6h
    );

    return new JsonResponse({
      message: `Temporary user '${username}' successfully created`,
    });
  },

  create_validation: {
    properties: {
      username: { type: "string" },
    },
    required: ["username"],
  },
};
