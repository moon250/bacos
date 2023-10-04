import { connection } from "./Connection.js";

const get = async <T = any>(key: string): Promise<T> => {
  return JSON.parse((await connection.get(key)) as string);
};

const set = async (key: string, value: any, ttl: number = -1) => {
  await connection.set(key, JSON.stringify(value), {
    EX: ttl,
  });
};

const exists = async (key: string) => await connection.exists(key);

export const client = {
  get,
  set,
  exists,
};
