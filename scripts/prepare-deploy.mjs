import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, "dist", "mohammad-ali-portfolio", "browser");
const targetDir = path.join(rootDir, "deploy", "htdocs");

if (!fs.existsSync(sourceDir)) {
  console.error("Build output not found. Run `npm run build` first.");
  process.exit(1);
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.mkdirSync(targetDir, { recursive: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });

console.log("Frontend deploy package created:");
console.log(targetDir);
console.log("Upload all files from this folder to InfinityFree /htdocs.");
