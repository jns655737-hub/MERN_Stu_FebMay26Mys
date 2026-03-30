//Reading and writting files asynchronously with callbacks
const fs=require("fs");
const path=require("path");

const filePath=path.join(__dirname,"async-note.txt")

//To write to the file
fs.writeFile("filepath","This is written synchronously using writeFile().",
    function(writeError){
        if(writeError){
            console.log("writeError:",writeError.message);
            return;
        }
        console.log("File Written asynchronously.");
    }
);

//read from the file
const content=fs.readFile(filePath,"utf-8",
    function(readError,content){
        if(readError){
       console.log("Read error:",readError.message);
        return;
  }
console.log(content);
}
   );

console.log("Script continues while file operations are in progress.");
