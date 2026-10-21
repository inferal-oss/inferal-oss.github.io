import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (!href.startsWith("/") || href.startsWith("/web-network-inspector/"))
    continue;
  const url = new URL(href.slice(1) || "index.html", root);
  assert.ok((await stat(url)).isFile(), `Missing local asset: ${href}`);
}
for (const project of [
  "Web Network Inspector",
  "Open Regard",
  "clipspyx",
  "Kimage",
  "Notabenda",
]) {
  assert.ok(
    html.includes(`<h3>${project}</h3>`),
    `Missing project: ${project}`,
  );
}
assert.equal((html.match(/class="project(?: featured)?"/g) ?? []).length, 5);
console.log("All five projects and local assets are present.");
