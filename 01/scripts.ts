import fs from "fs";

function readFile(): unknown {
  return JSON.parse(fs.readFileSync("../bd.json", "utf-8"));
}

function writeFile(data: any): void {
  fs.writeFileSync("../bd.json", JSON.stringify(data));
}

console.log(readFile());
