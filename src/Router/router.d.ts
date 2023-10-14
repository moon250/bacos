import {
  FastifyReply,
  FastifyRequest,
  HTTPMethods,
  RouteHandlerMethod,
  RouteShorthandMethod,
  RouteShorthandOptionsWithHandler,
} from "fastify";
import { Controller } from "../Controllers/Controller.js";

export type Middleware = (
  request: FastifyRequest,
  response: FastifyReply,
) => void;

export interface Route {
  path: string;
  methods: HTTPMethods[];
  handler: RouteShorthandOptionsWithHandler;
}
