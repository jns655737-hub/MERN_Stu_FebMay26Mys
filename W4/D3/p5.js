const introBtn=document.getElementById("introBtn");
const output=document.getElementById("output");

introBtn.addEventListener("click",
    function(){
        output.textContent="Sending Request...";//while waitig
        fetch("https://jsonplaceholder.typicode.com/posts/15")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log("Raw Response object:",data);
            // output.textContent="status:"+response.status+"\nOk:"+
            // response.ok;
            output.textContent=JSON.stringify(data,null,2);
        })
    .catch(function(){
        output.textContent="Unexpected Fetch Error:"
        +error.message;
    });
});