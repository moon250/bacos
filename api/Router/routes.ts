import { FastifyPluginCallback } from "fastify";
import { JsonResponse } from "./JsonResponse.js";

export const registerRoutes: FastifyPluginCallback = (
  fastify,
  opts,
  done
) => {
  fastify.get('/test', async (request, reply) => {
    return new JsonResponse("Bacos alive !")
  })

  done()
}