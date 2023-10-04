import { JsonResponse } from "../Router/JsonResponse.js";
import {
  FastifyReply,
  FastifyRequest,
  RouteShorthandOptionsWithHandler,
} from "fastify";

type Controller = { [key: string]: unknown };

const call = async (
  controller: Controller,
  name: string,
  ...parameters: any[]
): Promise<object> => {
  const method = controller[name];

  if (typeof method !== "function") {
    throw new Error(`Method ${name} was not found on provided controller`);
  }

  return await method(...parameters);
};

export const controller = (controller: Controller, method: string) => {
  const shorthandMethod: RouteShorthandOptionsWithHandler = {
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return (
        (await call(controller, method, request, reply)) as JsonResponse
      ).toResponse();
    },
  };

  if (`${method}_validation` in controller) {
    shorthandMethod["schema"] = {
      body: {
        type: "object",
        ...(controller[`${method}_validation`] as object),
      },
    };
  }

  return shorthandMethod;
};
