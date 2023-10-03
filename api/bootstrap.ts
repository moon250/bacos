import dotenv from "dotenv";
import { join } from "path";

dotenv.config({
  path: join(process.cwd(), ".env"),
});
