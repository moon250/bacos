import { FastifyPluginCallback } from "fastify";
import { JsonResponse } from "./JsonResponse.js";
import { UserController } from "../Controllers/UserController.js";
import { controller } from "../Controllers/Controller.js";
import { GameController } from "../Controllers/GameController.js";
import { Authenticated } from "../Middlewares/Authenticated.js";

export const registerRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get("/test", async (request, reply) => {
    return new JsonResponse("Bacos alive !");
  });

  fastify.post("/user", controller(UserController, "create"));

  fastify.route({
    method: "POST",
    url: "/game",
    onRequest: Authenticated,
    ...controller(GameController, "create"),
  });
  fastify.get(
    "/game/:code/parameters",
    controller(GameController, "parameters"),
  );

  done();
};
