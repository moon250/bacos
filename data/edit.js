import { readdirSync, readFileSync } from "node:fs";
import { writeFileSync } from "node:fs";

const files = readdirSync(".").filter((file) => file.endsWith(".json"));

for (const file of files) {
  const fileContent = readFileSync(file).toString();

  const edited = fileContent
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/œ/gu, "oe")
    .toLowerCase();

  writeFileSync(file, edited);
}
