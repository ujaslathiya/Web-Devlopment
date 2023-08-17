const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("Ujas","Hardik");

console.log("The content of file is : ");
console.log(text);

console.log("Creating new file....");
fs.writeFileSync("Hardik.txt",text)



