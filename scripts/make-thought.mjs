import path from "path";
import { v4 as uuid } from "uuid";
import utils from "./_utils.mjs";

const dirPath = path.join(utils.__dirname, "../content", "thoughts");

utils.ensureDirectory(dirPath);

utils.createFile(
  path.join(utils.__dirname, "../templates/thought.md"),
  path.join(dirPath, `${uuid()}.md`),
);
