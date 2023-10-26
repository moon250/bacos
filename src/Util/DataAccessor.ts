import { readFileSync } from "node:fs";
import { join } from "node:path";
import { GameAnswers } from "../../common/Enums/GameAnswers.js";
import { existsSync } from "fs";

export class DataAccessor {
  private readonly answer: GameAnswers;
  private readonly file: string;

  constructor(answer: GameAnswers, file: string) {
    this.answer = answer;
    this.file = file;
  }

  public access(): string[] {
    return Object.values(this.fileContent(this.file))[0] as string[];
  }

  private fileContent(file: string): { [key: string]: string[] } {
    const path = join(process.cwd(), "data", file + ".json");

    if (!existsSync(path)) {
      throw new Error(`File "${path}" does not exist`);
    }

    const content = readFileSync(path).toString();

    return JSON.parse(content);
  }
}
