import { JsonResponse } from "../Router/JsonResponse.js";
import { User } from "../Util/User.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { Game } from "../Util/Game.js";

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

  async find(request: FastifyRequest) {
    const user = await User.get(request.ip);
    return new JsonResponse({
      username: user.username,
    }).toResponse();
  },

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const user = request.ip;

    if (await Game.isInGame(user)) {
      return reply
        .status(403)
        .send(
          new JsonResponse("You are in a game, leave it first.").toResponse(),
        );
    }

    await User.delete(user);
    return new JsonResponse("User successfully destroyed.").toResponse();
  },

  async update(request: FastifyRequest) {
    const user = request.ip;
    const body = request.body as { [key: string]: unknown };
    const username = body["username"] as string;

    await User.update(user, username);
    return new JsonResponse({
      message: "User successfully updated.",
      user: username,
    }).toResponse();
  },

  update_validation: {
    properties: {
      username: { type: "string" },
    },
    required: ["username"],
  },
};
