const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");

asyncFetchBtn.addEventListener("click",
    async function(){
        try{
            const response=await
            fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok)throw new Error("HTTP Error:"
                +response.status);
                const users=await response.json();
                const firstThree=users.slice(0,3);
                output.textContent=JSON.stringify(firstThree,null,2);
                
                // const
        }
        catch(error){
           output.textContent="Error:",+error.message;
        }
    })