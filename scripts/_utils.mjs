import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getCurrentDate() {
  let date = new Date();

  console.log(date);

  const year = date.getFullYear();
  const month = appendLeadingZeroes(date.getMonth() + 1);
  const day = appendLeadingZeroes(date.getDate());

  const hour = appendLeadingZeroes(date.getHours());
  const minute = appendLeadingZeroes(date.getMinutes());

  return {
    year: `${year}`,
    month: `${month}`,
    day: `${day}`,
    dayOfWeek: `${date.dayOfWeek}`,
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
  const title = new Date().toLocaleString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  fs.copyFileSync(templatePath, filePath);
  fs.writeFileSync(
    filePath,
    fs
      .readFileSync(filePath, "utf8")
      .replace("title:", `title: ${title}`)
      .replace("created_at:", "created_at: " + getCurrentDate().date),
  );
}

export default {
  __dirname,
  getCurrentDate,
  ensureDirectory,
  createFile,
};
