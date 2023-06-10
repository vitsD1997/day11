import { readFileSync } from "node:fs";

let filePath = "F:\WPS MODULE\day11\package.json";
let fileData =  readFileSync(filePath, { encoding : "utf-8"});
console.log(fileData);