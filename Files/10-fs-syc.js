const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
console.log("ok");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `hey here is the result : ${first}, ${second}}`
);

