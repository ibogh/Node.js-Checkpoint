const fs = require("fs");
var result = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(result - 1);
