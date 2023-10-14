import { User } from "../../Util/User.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { JsonResponse } from "../JsonResponse.js";
import { Middleware } from "../router.js";

export const Authenticated: Middleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  if (!(await User.exists(request.ip))) {
    reply.code(401).send(new JsonResponse("Unauthenticated.").toResponse());
  }
};
