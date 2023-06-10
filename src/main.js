import { writeFileSync } from "node:fs";

async function main() {
let filePath = "F:\WPS MODULE\output1.txt";
let data = `asynchronously writesdata into a file,
           replacing the file if it exists. data can be a string, a buffer, an <asyncIterable`
writeFileSync(filePath, data);
console.log("write Success!!");
}
 main();
