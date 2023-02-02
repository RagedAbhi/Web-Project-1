const fs = require("fs");
let text = fs.readFileSync("temp.txt", "utf-8");
console.log("The content of the file is ");
text = text.replace("from", "to");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("newTemp.txt", text);
