import { JsonResponse } from "../Router/JsonResponse.js";
import { FastifyRequest } from "fastify";

export const UserController =  {
  create(request: FastifyRequest): JsonResponse {
    return new JsonResponse('Heyy from create in UserController (:')
  }
}