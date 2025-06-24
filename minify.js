const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// مسیرهای مورد نظر برای بررسی فایل‌ها
const folders = [
  { dir: "dist", exts: [".html", ".css", ".js"] },
  { dir: "src", exts: [".html", ".css", ".js"] },
  { dir: ".", exts: [".html"] }, // ریشه پروژه
];

folders.forEach(({ dir, exts }) => {
  if (!fs.existsSync(dir)) return;

  fs.readdirSync(dir).forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!exts.includes(ext)) return;

    const fullPath = path.join(dir, file);
    const baseName = path.basename(file, ext);
    const minPath = path.join(dir, `${baseName}.min${ext}`);

    let cmd = "";

    if (ext === ".html") {
      cmd = `npx html-minifier --collapse-whitespace --remove-comments --minify-css true --minify-js true -o "${minPath}" "${fullPath}"`;
    } else if (ext === ".css") {
      cmd = `npx cleancss -o "${minPath}" "${fullPath}"`;
    } else if (ext === ".js") {
      cmd = `npx terser "${fullPath}" -o "${minPath}" --compress --mangle`;
    }

    try {
      console.log(`🔧 Minifying: ${fullPath}`);
      execSync(cmd, { stdio: "inherit" });
    } catch (err) {
      console.error(`❌ Failed to minify ${file}:`, err.message);
    }
  });
});