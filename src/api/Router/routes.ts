import { FastifyPluginCallback } from "fastify";
import { JsonResponse } from "./JsonResponse.js";
import { UserController } from "../Controllers/UserController.js";
import {controller} from "../Controllers/Controller.js";

export const registerRoutes: FastifyPluginCallback = (
  fastify,
  opts,
  done
) => {
  fastify.get('/test', async (request, reply) => {
    return new JsonResponse("Bacos alive !")
  })

  fastify.post('/user', controller(UserController, 'create'))

  done()
}