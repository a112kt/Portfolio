import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const rootDir = resolve(".");
const srcDir = join(rootDir, "src");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name)) out.push(p);
  }
  return out;
}

const files = walk(srcDir);

function reactIconImports(src) {
  const re = /import\s*\{([^}]*)\}\s*from\s*"react-icons\/([a-z0-9]+)"\s*;/g;
  const out = { fi: new Set(), si: new Set(), md: new Set(), tb: new Set(), lu: new Set(), fa: new Set(), ri: new Set(), bs: new Set() };
  let m;
  while ((m = re.exec(src))) {
    const mod = m[2];
    m[1].split(",").forEach((name) => {
      const n = name.trim().replace(/\s+as\s+\w+$/, "");
      if (n && out[mod]) out[mod].add(n);
    });
  }
  return out;
}

const used = { fi: new Set(), si: new Set(), md: new Set(), tb: new Set(), lu: new Set(), fa: new Set(), ri: new Set(), bs: new Set() };
for (const file of files) {
  const parsed = reactIconImports(readFileSync(file, "utf8"));
  for (const k of Object.keys(used)) parsed[k].forEach((n) => used[k].add(n));
}

let missing = [];
for (const mod of Object.keys(used)) {
  if (used[mod].size === 0) continue;
  let exports;
  try {
    exports = new Set(Object.keys(await import(`react-icons/${mod}`)));
  } catch (e) {
    missing.push(`[MODULE ${mod} failed: ${e.message.split("\n")[0]}]`);
    continue;
  }
  for (const name of used[mod]) {
    if (!exports.has(name)) missing.push(`${mod} :: ${name}`);
  }
}

console.log(missing.length ? "MISSING:\n" + missing.join("\n") : "ALL ICONS VALID");
