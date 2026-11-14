import { readFileSync } from "node:fs";
import vm from "node:vm";

const file = "CleanerSlty.html";
const html = readFileSync(file, "utf8");
const scriptTags = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
const inlineScripts = scriptTags.filter(([, attributes]) => !/\bsrc\s*=/i.test(attributes));

if (inlineScripts.length === 0) {
  console.error(`No inline script blocks found in ${file}.`);
  process.exit(1);
}

let checked = 0;
for (const [, , source] of inlineScripts) {
  if (!source.trim()) continue;
  new vm.Script(source, { filename: file });
  checked += 1;
}

if (checked === 0) {
  console.error(`No non-empty inline JavaScript found in ${file}.`);
  process.exit(1);
}

console.log(`Syntax check passed: ${checked} inline JavaScript block(s) in ${file}.`);
