import { JsonResponse } from "../Router/JsonResponse.js";
import { User } from "../Util/User.js";
import { FastifyReply, FastifyRequest } from "fastify";

export const UserController = {
  async create(request: FastifyRequest) {
    const ip = request.ip;
    const body = request.body as { [key: string]: unknown };
    const username = body["username"] as string;

    if (await User.exists(ip)) {
      const user = await User.get(ip);

      return new JsonResponse({
        message: `You already have a temporary user. Done nothing.`,
        username: user.username,
      }).toResponse();
    }

    await User.create(username, ip);

    return new JsonResponse({
      message: `Temporary user '${username}' successfully created`,
    }).toResponse();
  },

  create_validation: {
    properties: {
      username: { type: "string" },
    },
    required: ["username"],
  },

  async find(request: FastifyRequest, reply: FastifyReply) {
    if (await User.exists(request.ip)) {
      const user = await User.get(request.ip);
      return new JsonResponse({
        username: user.username,
      }).toResponse();
    }

    reply
      .status(401)
      .send(
        new JsonResponse("Unauthenticated. Create an user first").toResponse(),
      );
  },
};
