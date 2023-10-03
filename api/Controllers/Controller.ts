import { FastifyReply, FastifyRequest } from "fastify";
import { JsonResponse } from "../Router/JsonResponse.js";

export const call = (controller: { [key: string]: unknown }, name: string, request: FastifyRequest, reply: FastifyReply): object => {
  const method = controller[name]

  if (typeof method !== "function") {
    throw new Error(`Method ${name} was not found on provided controller`)
  }

  return (method(request, reply) as JsonResponse).toResponse()
}