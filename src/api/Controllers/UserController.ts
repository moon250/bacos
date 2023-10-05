import { JsonResponse } from "../Router/JsonResponse.js";
import { User } from "../Util/User.js";
import { FastifyRequest } from "fastify";

export const UserController = {
  async create(request: FastifyRequest): Promise<JsonResponse> {
    const ip = request.ip;
    const body = request.body as { [key: string]: unknown };
    const username = body["username"] as string;

    if (await User.exists(ip)) {
      const user = await User.get(ip);

      return new JsonResponse({
        message: `You already have a temporary user. Done nothing.`,
        username: user.username,
      });
    }

    await User.create(username, ip);

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
