
const container=document.getElementById("container");
//Position
// before begin
//After begin
//before end
//after end
document.getElementById("Btn").addEventListener("click",
    function(){
        container.insertAdjacentHTML("beforeend",
            "<p>Dynamically inerted</p>");
    });