import { readFile } from "node:fs/promises";

async function main() {
    try {
let filePath = "F:\WPS MODULE\day11\package.json";
let data = await readFile(filePath, {emcoding: "utf8"});
console.log(fileData);
   } catch (e) {
    console.log("Exception Occured :: ", e.message);
     }

   }


 main();
