import { client } from "../Redis/Client.js";
import { Ip } from "../types.js";

export type UserObject = {
  username: string;
  ip: string;
};

export class User {
  static async create(username: string, ip: Ip): Promise<UserObject> {
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

  static async get(ip: Ip): Promise<UserObject> {
    return await client.get(`users:${ip}`);
  }

  static async exists(ip: Ip): Promise<boolean> {
    return await client.exists(`users:${ip}`);
  }

  static async delete(ip: Ip) {
    await client.del(`users:${ip}`);
  }

  static async update(ip: Ip, username: string) {
    const user = await client.get<UserObject>(`users:${ip}`);

    user.username = username;

    await client.set(`users:${ip}`, user);
  }
}
