//Introduction to the nodejs file system(fs) built-in modele

const fs=require("fs");
const fsPromises=require("fs/promises")

//callback 
console.log("type of fs.readFile:",typeof fs.readFile);
console.log("type of fs.writeFile:",typeof fs.writeFile);

//fspromises
console.log("type of fsPromises.readFile:",typeof fsPromises.readFile);
console.log("type of fs.writeFile:",typeof fsPromises.writeFile);