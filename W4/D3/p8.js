const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");

asyncFetchBtn.addEventListener("click",
    async function(){
     output.textContent="Loading User....";
     try{
        const response= await 
        fetch("https://jsonplaceholder.typicode.com/posts/15");
        if(!response.ok) throw new Error("HTTP Error:"+response.status);
        const data=await response.json();
        output.textContent=JSON.stringify(data,null,2)
     }
     catch(error){
        output.textContent="Error:"+error.message;
     }
});