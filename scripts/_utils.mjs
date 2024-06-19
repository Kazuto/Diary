import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getCurrentDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = appendLeadingZeroes(date.getMonth() + 1);
  const day = appendLeadingZeroes(date.getDate());

  const hour = appendLeadingZeroes(date.getHours());
  const minute = appendLeadingZeroes(date.getMinutes());

  return {
    year: `${year}`,
    month: `${month}`,
    day: `${day}`,
    hour: `${hour}`,
    minute: `${minute}`,
    date: `${year}-${month}-${day} ${hour}:${minute}`,
  };
}

function appendLeadingZeroes(n) {
  return n <= 9 ? "0" + n : n;
}

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createFile(templatePath, filePath) {
  fs.copyFileSync(templatePath, filePath);
  fs.writeFileSync(
    filePath,
    fs
      .readFileSync(filePath, "utf8")
      .replace("created_at:", "created_at: " + getCurrentDate().date),
  );
}

export default {
  __dirname,
  getCurrentDate,
  ensureDirectory,
  createFile,
};
