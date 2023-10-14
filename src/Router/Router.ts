import Fastify from "fastify";
import { registerRoutes } from "./routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(registerRoutes, { prefix: "/api" });

export const start = async () => {
  await fastify.listen({
    port: 9000,
    host: "0.0.0.0",
  });
};
