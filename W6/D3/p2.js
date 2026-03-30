//Reading and Writting files synchronously

const fs=require("fs");
const path=require("path");

const filePath=path.join(__dirname,"sync-note.txt")
//joining the dirname into file
//moduleName.functionName()

// fs.writeFileSync(filePath,"This file was written using writeFileSync().\n Synchronous operation lock execution")
console.log("File Written synchronously");
//Append to a file
fs.appendFileSync(filePath," New text added using fs.appendFile",
    function(error){
        if(error){
            console.log("Append error:",error.message);
            return;
        }
        console.log("File content Appended");
        
    }
);


const content=fs.readFileSync(filePath,"utf-8");

console.log("File Read Synchronously");
console.log("File content:",content);
