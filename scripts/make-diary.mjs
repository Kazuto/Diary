import path from "path";
import utils from "./_utils.mjs";

const date = utils.getCurrentDate();

const dirPath = path.join(
  utils.__dirname,
  "../content",
  "diary",
  `${date.year}`,
  `${date.monthName}`,
);

utils.ensureDirectory(dirPath);

utils.createFile(
  path.join(utils.__dirname, "../templates/diary.md"),
  path.join(dirPath, `${date.day}.md`),
);
