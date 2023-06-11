import { writeFileSync } from "node:fs/promises";

async function main() {
let filePath = "F:\WPS MODULE\output1.txt";
let data = `asynchronously writesdata into a file,
           replacing the file if it already exists. data can be a string, a buffer, an <asyncIterable>,
           or an <Iterable> object.`;
writeFileSync(filePath, data);
console.log("write Success!!");
}


 main();
