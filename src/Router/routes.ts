import { JsonResponse } from "./JsonResponse.js";
import { UserController } from "../Controllers/UserController.js";
import { controller } from "../Controllers/Controller.js";
import { Router } from "./Router.js";
import { GameController } from "../Controllers/GameController.js";
import { Authenticated } from "./Middlewares/Authenticated.js";

const router = new Router();

router
  .register(["GET", "POST"], "/", () => {
    return new JsonResponse("Bacos is alive").toResponse();
  })
  .post("/user", controller(UserController, "create"))
  .get("/game/:code/parameters", controller(GameController, "parameters"));

router.middleware(Authenticated, (instance) => {
  return instance
    .get("/user", controller(UserController, "find"))
    .delete("/user", controller(UserController, "delete"))
    .patch("/user", controller(UserController, "update"))

    .post("/game", controller(GameController, "create"))
    .post("/game/join", controller(GameController, "join"))
    .post("/game/leave", controller(GameController, "leave"));
});

export const registerRoutes = router.defineRoutes();
