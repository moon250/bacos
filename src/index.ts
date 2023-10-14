import "./bootstrap.js";
import { start } from "./Router/Router.js";
import { registerRoutes } from "./Router/routes.js";

await start(registerRoutes);
