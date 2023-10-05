import { client } from "../Redis/Client.js";

export type UserObject = {
  username: string;
  ip: string;
};

export class User {
  static async create(username: string, ip: string): Promise<UserObject> {
    const user = {
      username,
      ip,
    };

    await client.set(
      `users:${ip}`,
      user,
      6 * 60 * 60, // 6h
    );

    return user;
  }

  static async get(ip: string): Promise<UserObject> {
    return await client.get(`users:${ip}`);
  }

  static async exists(ip: string): Promise<boolean> {
    return await client.exists(`users:${ip}`);
  }
}
