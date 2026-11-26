import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I bought the dip so often my bag's only support level left is my rent money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
