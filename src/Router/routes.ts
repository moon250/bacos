import { FastifyPluginCallback } from "fastify";
import { JsonResponse } from "./JsonResponse.js";
import { UserController } from "../Controllers/UserController.js";
import { controller } from "../Controllers/Controller.js";
import { GameController } from "../Controllers/GameController.js";
import { Authenticated } from "../Middlewares/Authenticated.js";

export const registerRoutes: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.route({
    method: ["GET", "POST"],
    url: "/",
    handler() {
      return new JsonResponse("Bacos is alive").toResponse();
    },
  });

  fastify.post("/user", controller(UserController, "create"));

  fastify.route({
    method: "POST",
    url: "/game",
    onRequest: Authenticated,
    ...controller(GameController, "create"),
  });
  fastify.route({
    method: "POST",
    url: "/game/join",
    onRequest: Authenticated,
    ...controller(GameController, "join"),
  });
  fastify.route({
    method: "POST",
    url: "/game/leave",
    onRequest: Authenticated,
    ...controller(GameController, "leave"),
  });
  fastify.get(
    "/game/:code/parameters",
    controller(GameController, "parameters"),
  );

  done();
};
