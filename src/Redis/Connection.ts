import { createClient } from "redis";

console.log(`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);

const client = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

await client.connect();

export const connection = client;
