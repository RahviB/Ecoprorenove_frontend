import sharp from "sharp";
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join, parse } from "node:path";

const TASKS = [
  {
    dir: "public/images/bardage",
    pattern: /^maison-.*\.(jpe?g|png)$/i,
    quality: 80,
    maxWidth: 1600,
    deleteOriginal: true,
  },
  {
    dir: "public/images/bardage",
    pattern: /^swatch-.*\.(jpe?g|png)$/i,
    quality: 82,
    maxWidth: 600,
    deleteOriginal: true,
  },
  {
    dir: "public/images/extracteur",
    pattern: /^tornado-.*\.png$/i,
    quality: 82,
    maxWidth: 1400,
    deleteOriginal: true,
    keepAlpha: true,
  },
];

let totalBefore = 0;
let totalAfter = 0;

for (const task of TASKS) {
  let entries;
  try {
    entries = readdirSync(task.dir);
  } catch {
    console.log(`SKIP — ${task.dir} does not exist`);
    continue;
  }
  const matches = entries.filter((f) => task.pattern.test(f));
  if (matches.length === 0) {
    console.log(`SKIP — no matches in ${task.dir} for ${task.pattern}`);
    continue;
  }
  console.log(`\n=== ${task.dir} (${matches.length} files, quality=${task.quality}, maxWidth=${task.maxWidth}) ===`);
  for (const file of matches) {
    const src = join(task.dir, file);
    const { name } = parse(file);
    const dst = join(task.dir, `${name}.webp`);
    const before = statSync(src).size;
    totalBefore += before;
    await sharp(src)
      .resize({ width: task.maxWidth, withoutEnlargement: true })
      .webp({ quality: task.quality, alphaQuality: task.keepAlpha ? 90 : undefined })
      .toFile(dst);
    const after = statSync(dst).size;
    totalAfter += after;
    console.log(
      `${file.padEnd(40)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (-${(((before - after) / before) * 100).toFixed(0)}%)`,
    );
    if (task.deleteOriginal) unlinkSync(src);
  }
}

console.log(
  `\nTOTAL  ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`,
);
