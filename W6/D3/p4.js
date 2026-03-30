//Reading and writting of the files asynch  with fs/promises

const fs=require("fs/promises")
const path=require("path");

async function runPromiseFileFlow(){ 
     const filePAth=path.join(__dirname,"promise-notes.txt")

     try{
        await fs.writeFile(filePAth,"writting using fs/promises.This works with asyn/await")
        console.log("File written using fs/promises");

        const content=await fs.readFile(filePAth,"utf-8")
        console.log(content);
        
     }
     catch(error){
         console.log("Promise-based fs error:",error.message);
         
     }
}
runPromiseFileFlow();