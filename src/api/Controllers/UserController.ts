import { JsonResponse } from "../Router/JsonResponse.js";
import { client } from "../Redis/Client.js";
import { FastifyRequest } from "fastify";

export const UserController =  {
  async create(request: FastifyRequest): Promise<JsonResponse> {
    const body = request.body as { [key: string]: unknown }
    const ip = request.ip

    await client.set(`users:${ip}`, {
      body: body["username"],
      ip
    },
  10)

    return new JsonResponse({'message': 'Temporary user successfully created'})
  },

  create_validation: {
    properties: {
      username: { type: 'string' }
    },
    required: ['username']
  }
}