import path from "path";
import utils from "./_utils.mjs";

const dirPath = path.join(utils.__dirname, "../content", "thoughts");
const fileName = (await utils.countFilesInDirectory(dirPath)) + 1;

utils.ensureDirectory(dirPath);

utils.createFile(
  path.join(utils.__dirname, "../templates/thought.md"),
  path.join(dirPath, `${fileName}.md`),
);
