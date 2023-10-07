import { connection } from "./Connection.js";

const get = async <T = any>(key: string): Promise<T> => {
  return JSON.parse((await connection.get(key)) as string);
};

const set = async (key: string, value: any, ttl: number | null = null) => {
  const params: { EX?: number } = {};

  if (ttl !== null) {
    params["EX"] = ttl;
  }

  await connection.set(key, JSON.stringify(value), params);
};

const exists = async (key: string) => !!(await connection.exists(key));

export const client = {
  get,
  set,
  exists,
};
