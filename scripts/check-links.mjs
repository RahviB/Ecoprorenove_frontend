#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\//, "");
const SRC = join(ROOT, "src");
const APP = join(SRC, "app");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry)) out.push(full);
  }
  return out;
}

// Discover routes from app/ — each page.tsx defines a route
function discoverRoutes() {
  const routes = new Set(["/"]);
  function scan(dir, base = "") {
    for (const e of readdirSync(dir)) {
      const full = join(dir, e);
      const st = statSync(full);
      if (st.isDirectory()) {
        if (e.startsWith("[") || e.startsWith("(")) {
          scan(full, base + "/" + e);
        } else {
          scan(full, base + "/" + e);
        }
      } else if (e === "page.tsx" || e === "page.ts") {
        const r = base || "/";
        if (!r.includes("[")) routes.add(r);
      }
    }
  }
  scan(APP);
  return routes;
}

const routes = discoverRoutes();
console.log(`Discovered ${routes.size} routes:`);
for (const r of [...routes].sort()) console.log(`  ${r}`);
console.log("");

const files = walk(SRC);

// Per route, collect ids and hrefs
const idsByPath = new Map(); // path -> Set<id>
const hrefRefs = []; // { from, line, href }

const HREF_RE = /href=\{?\s*["'`]([^"'`]+)["'`]\s*\}?/g;
const ID_RE = /\bid=\{?\s*["'`]([^"'`]+)["'`]\s*\}?/g;
// Catches data-array entries like  { id: "courtage", ... }  used to drive dynamic `id={c.id}` JSX.
const OBJ_ID_RE = /\bid:\s*["'`]([^"'`]+)["'`]/g;

// Map every component file to the page paths that import it (transitively).
// Cheap approximation: for each href in a file, we don't know which page renders it.
// Instead: collect all hrefs project-wide, then for each href "/path#anchor",
// check that the target page exists AND that any file under that page route
// (or any shared component) declares that id.
//
// Practical compromise: collect all ids across the entire src/ tree, and treat
// "any id anywhere" as resolvable — we'll separately flag IDs that don't exist
// at all (true broken anchor) vs. IDs that exist but maybe on a different page.

// First pass: per-file ids
const idsByFile = new Map();
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const ids = new Set();
  for (const m of src.matchAll(ID_RE)) {
    if (m[1].includes("$")) continue;
    ids.add(m[1]);
  }
  for (const m of src.matchAll(OBJ_ID_RE)) {
    if (m[1].includes("$")) continue;
    ids.add(m[1]);
  }
  idsByFile.set(f, ids);
}

// Map page route -> page.tsx file
const pageFileByRoute = new Map();
for (const f of files) {
  if (!f.endsWith("page.tsx") && !f.endsWith("page.ts")) continue;
  const rel = relative(APP, f).replace(/\\/g, "/");
  let route = "/" + rel.replace(/\/?page\.tsx?$/, "");
  if (route === "/") route = "/";
  if (!route.includes("[")) pageFileByRoute.set(route, f);
}

// For each page, determine the union of ids on that page = ids in page.tsx
// + ids in all components imported (1 level deep, regex).
function collectIdsForRoute(route) {
  const pageFile = pageFileByRoute.get(route);
  if (!pageFile) return new Set();
  const seen = new Set();
  const queue = [pageFile];
  const ids = new Set();
  while (queue.length) {
    const f = queue.shift();
    if (seen.has(f)) continue;
    seen.add(f);
    for (const id of idsByFile.get(f) || []) ids.add(id);
    const src = readFileSync(f, "utf8");
    for (const m of src.matchAll(/from\s+["'`](@\/[^"'`]+|\.\.?\/[^"'`]+)["'`]/g)) {
      const spec = m[1];
      let resolved;
      if (spec.startsWith("@/")) resolved = join(SRC, spec.slice(2));
      else resolved = join(f, "..", spec);
      // try .tsx, .ts, /index.tsx, /index.ts
      const tries = [resolved + ".tsx", resolved + ".ts", join(resolved, "index.tsx"), join(resolved, "index.ts")];
      for (const t of tries) {
        try {
          if (statSync(t).isFile()) { queue.push(t); break; }
        } catch {}
      }
    }
  }
  return ids;
}

const idsByRoute = new Map();
for (const r of pageFileByRoute.keys()) idsByRoute.set(r, collectIdsForRoute(r));

// Also gather ids declared in always-rendered shell (Navbar/Footer/MobileCtaBar/BackToTop) — the layout.
const layoutFile = join(APP, "layout.tsx");
const layoutIds = collectIdsForRoute("/__layout__"); // won't resolve
// Manually walk layout file
function walkImports(start) {
  const seen = new Set();
  const queue = [start];
  const ids = new Set();
  while (queue.length) {
    const f = queue.shift();
    if (seen.has(f)) continue;
    seen.add(f);
    try {
      for (const id of idsByFile.get(f) || []) ids.add(id);
      const src = readFileSync(f, "utf8");
      for (const m of src.matchAll(/from\s+["'`](@\/[^"'`]+|\.\.?\/[^"'`]+)["'`]/g)) {
        const spec = m[1];
        let resolved;
        if (spec.startsWith("@/")) resolved = join(SRC, spec.slice(2));
        else resolved = join(f, "..", spec);
        const tries = [resolved + ".tsx", resolved + ".ts", join(resolved, "index.tsx"), join(resolved, "index.ts")];
        for (const t of tries) {
          try { if (statSync(t).isFile()) { queue.push(t); break; } } catch {}
        }
      }
    } catch {}
  }
  return ids;
}
const shellIds = walkImports(layoutFile);

// Now collect every href across the project and classify.
const hrefs = [];
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    for (const m of lines[i].matchAll(HREF_RE)) {
      const h = m[1];
      if (h.includes("${")) continue; // template literal — not a static URL
      hrefs.push({ from: relative(ROOT, f).replace(/\\/g, "/"), line: i + 1, href: h });
    }
  }
}

// Classify
const issues = [];

for (const ref of hrefs) {
  const h = ref.href;
  if (h.startsWith("http://") || h.startsWith("https://")) continue;
  if (h.startsWith("mailto:") || h.startsWith("tel:")) continue;
  if (h.startsWith("data:")) continue;
  if (h === "#") continue; // dummy

  // Strip query
  const noQuery = h.split("?")[0];
  const [path, anchor] = noQuery.split("#");

  if (path === "" && anchor) {
    // Same-page anchor — must exist on whichever page this file is rendered on.
    // Heuristic: if file is under app/<route>/page.tsx, check that route. Else check ANY route or shell.
    const fromAbs = join(ROOT, ref.from);
    let foundOnRoute = null;
    if (/[\/\\]page\.tsx$/.test(fromAbs)) {
      const rel = relative(APP, fromAbs).replace(/\\/g, "/");
      let route = "/" + rel.replace(/\/?page\.tsx?$/, "");
      if (route === "/") route = "/";
      const ids = idsByRoute.get(route) || new Set();
      if (ids.has(anchor) || shellIds.has(anchor)) foundOnRoute = route;
    } else {
      // Component — check if ANY route that uses this component has the id.
      // Cheap proxy: any route or shell.
      let found = false;
      for (const [r, ids] of idsByRoute) {
        if (ids.has(anchor)) { found = true; foundOnRoute = r; break; }
      }
      if (shellIds.has(anchor)) { found = true; foundOnRoute = "shell"; }
      if (!found) issues.push({ ...ref, kind: "missing-anchor (any page)", anchor });
      continue;
    }
    if (!foundOnRoute) issues.push({ ...ref, kind: "missing-anchor (same page)", anchor });
    continue;
  }

  // Internal route link
  if (path.startsWith("/")) {
    const route = path === "/" ? "/" : path.replace(/\/$/, "");
    if (!routes.has(route)) {
      // Allow /api, /setup/[token]
      if (route.startsWith("/api/")) continue;
      if (route.startsWith("/setup/")) continue;
      issues.push({ ...ref, kind: "missing-route", path: route });
      continue;
    }
    if (anchor) {
      const ids = idsByRoute.get(route) || new Set();
      if (!ids.has(anchor) && !shellIds.has(anchor)) {
        issues.push({ ...ref, kind: "missing-anchor (target page)", path: route, anchor });
      }
    }
    continue;
  }

  // Relative or other — flag for review only if it looks suspicious
  if (h.includes("/") && !h.startsWith(".")) {
    // could be intentional — skip
  }
}

console.log(`Scanned ${hrefs.length} hrefs across ${files.length} files.`);
console.log(`Issues found: ${issues.length}\n`);

const byKind = new Map();
for (const i of issues) {
  if (!byKind.has(i.kind)) byKind.set(i.kind, []);
  byKind.get(i.kind).push(i);
}
for (const [kind, list] of byKind) {
  console.log(`== ${kind} (${list.length}) ==`);
  for (const i of list) {
    const tail = i.path ? `${i.path}${i.anchor ? "#" + i.anchor : ""}` : `#${i.anchor}`;
    console.log(`  ${i.from}:${i.line}  ->  ${tail}   (full href: ${i.href})`);
  }
  console.log("");
}
