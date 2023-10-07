import { User } from "../Util/User.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { JsonResponse } from "../Router/JsonResponse.js";

export const Authenticated = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  if (!(await User.exists(request.ip))) {
    reply.code(401).send(new JsonResponse("Unauthenticated.").toResponse());
  }
};
