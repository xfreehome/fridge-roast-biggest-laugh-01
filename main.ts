// Fridge Roast: One Line, Biggest Laugh
// make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes a single roast line (<= 200 chars) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge updated its firmware and now the ice maker refuses to make a single cube until I accept the terms and conditions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
