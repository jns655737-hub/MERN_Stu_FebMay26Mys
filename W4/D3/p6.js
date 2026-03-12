const introBtn=document.getElementById("introBtn");
const output=document.getElementById("output");

introBtn.addEventListener("click",
    function(){
        output.textContent="Sending Request...";//while waitig
        fetch("https://jsonplaceholder.typicode.com/posts/15")
        .then(function(response){
            return response.text();
        })
        .then(function(text){
            console.log("Text Response object:",text);
            output.textContent=text;
        })
    .catch(function(){
        output.textContent="Unexpected Fetch Error:"
        +error.message;
    });
});