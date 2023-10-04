import { connection } from "./Connection.js";

// TODO: find a way to merge this redis client and websocket's. It's useless having twice the same code just to dodge some errors in ts compiler...

const get = async <T = any>(key: string): Promise<T> => {
  return JSON.parse((await connection.get(key)) as string);
};

const set = async (key: string, value: any, ttl: number = -1) => {
  await connection.set(key, JSON.stringify(value), {
    EX: ttl
  });
};

const exists = async (key: string) => await connection.exists(key);

export const client = {
  get,
  set,
  exists,
};
