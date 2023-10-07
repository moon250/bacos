import { connection } from "./Connection.js";

export const client = {
  get: async <T = any>(key: string): Promise<T> => {
    return JSON.parse((await connection.get(key)) as string);
  },

  set: async (key: string, value: any, ttl: number | null = null) => {
    const params: { EX?: number } = {};

    if (ttl !== null) {
      params["EX"] = ttl;
    }

    await connection.set(key, JSON.stringify(value), params);
  },

  del: async (key: string) => {
    await connection.del(key);
  },

  exists: async (key: string) => !!(await connection.exists(key)),

  sAdd: async (key: string, ...values: any[]) => {
    for (const value of values) {
      await connection.sAdd(key, value);
    }
  },

  sRem: async (key: string, ...values: any[]) => {
    for (const value of values) {
      await connection.sRem(key, value);
    }
  },

  sIsMember: async (key: string, value: any): Promise<boolean> => {
    return await connection.sIsMember(key, value);
  },

  sCard: async (key: string) => {
    return await connection.sCard(key);
  },

  hSet: async (key: string, field: string, value: any) => {
    await connection.hSet(key, field, value);
  },

  hGet: async (key: string, field: string): Promise<string> => {
    return (await connection.hGet(key, field)) as string;
  },

  hExists: async (key: string, field: string) => {
    return await connection.hExists(key, field);
  },

  hDel: async (key: string, ...fields: string[]) => {
    await connection.hDel(key, fields);
  },
};
