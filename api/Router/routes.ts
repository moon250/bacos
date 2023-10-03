import { FastifyPluginCallback } from "fastify";
import { JsonResponse } from "./JsonResponse.js";
import { call } from "../Controllers/Controller.js";
import { UserController } from "../Controllers/UserController.js";

export const registerRoutes: FastifyPluginCallback = (
  fastify,
  opts,
  done
) => {
  fastify.get('/test', async (request, reply) => {
    return new JsonResponse("Bacos alive !")
  })

  fastify.post('/user', async (request, reply) => {
    return call(UserController, 'create', request, reply)
  })

  done()
}