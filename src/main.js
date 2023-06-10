import { readFileSync, writeFileSync } from "node:fs";

let filePath = "F:\WPS MODULE\output.txt";
let data = "hello world";
writeFileSync(filePath, data);
console.log("write Success!!");