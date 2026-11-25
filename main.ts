// Two Lines to Your Past Self — make.fun bounty u-suga-two-lines-to-your-past-self-f36c83ca
//
// Writes exactly two lines to /output/entry.txt:
//   line 1 — a warning to the writer's past self about one specific moment
//   line 2 — one sentence on why that moment mattered and what changed because of it.
// The gate requires UTF-8 text of 1 to 280 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "Don't say yes to the night shift on 14 October just because the pay is double — tell them you need to be home that night.",
  "It was the last night your grandmother was awake enough to know your name, and you spent it stacking boxes in a warehouse that forgot you by Christmas.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote /output/entry.txt (${Buffer.byteLength(ENTRY + "\n", "utf8")} bytes, ${ENTRY.length + 1} chars)`);
