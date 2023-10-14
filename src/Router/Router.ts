import Fastify, {
  FastifyPluginCallback,
  HTTPMethods,
  RouteShorthandOptionsWithHandler,
} from "fastify";
import { Middleware, Route } from "./router.js";
import { controller } from "../Controllers/Controller.js";

const fastify = Fastify({
  logger: true,
});

export const start = async (routes: FastifyPluginCallback) => {
  fastify.register(routes, { prefix: "/api" });

  await fastify.listen({
    port: 9000,
    host: "0.0.0.0",
  });
};

export class Router {
  routes: Route[] = [];
  middlewares = new WeakMap<Route, Middleware>();

  public defineRoutes(): FastifyPluginCallback {
    return (fastify, opts, done) => {
      for (const route of this.routes) {
        let onRequest = undefined;

        if (this.middlewares.has(route)) {
          onRequest = this.middlewares.get(route);
        }

        fastify.route({
          method: route.methods,
          url: route.path,
          ...route.handler,
          onRequest,
        });
      }

      done();
    };
  }

  public middleware(
    middleware: Middleware,
    routeDefiner: (router: Router) => Router,
  ) {
    const instance = routeDefiner(new Router());
    const routes = instance.routes;

    for (const route of routes) {
      this.middlewares.set(route, middleware);
      this.routes.push(route);
    }
  }

  public get(url: string, handler: any): Router;
  public get(url: string, handler: RouteShorthandOptionsWithHandler): Router {
    this.register(["GET", "HEAD"], url, handler);

    return this;
  }

  public post(url: string, handler: any): Router;
  public post(url: string, handler: RouteShorthandOptionsWithHandler): Router {
    this.register(["POST"], url, handler);

    return this;
  }

  public patch(url: string, handler: any): Router;
  public patch(url: string, handler: RouteShorthandOptionsWithHandler): Router {
    this.register(["PATCH"], url, handler);

    return this;
  }

  public delete(url: string, handler: any): Router;
  public delete(
    url: string,
    handler: RouteShorthandOptionsWithHandler,
  ): Router {
    this.register(["DELETE"], url, handler);

    return this;
  }

  public register(methods: HTTPMethods[], url: string, handler: any): Router;
  public register(
    methods: HTTPMethods[],
    url: string,
    handler: RouteShorthandOptionsWithHandler,
  ): Router {
    if (typeof handler === "function") {
      handler = {
        handler,
      };
    }

    const route = {
      methods,
      path: url,
      handler,
    };

    this.routes.push(route);

    return this;
  }
}
