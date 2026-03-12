const checkBtn=document.getElementById("checkBtn");


checkBtn.addEventListener("click",function(){
    console.log("Local Storag Check",
        typeof localStorage!=="undefined");
    console.log("Session Storag Check",
        typeof sessionStorage!=="undefined");
    console.log("localStorage",localStorage);
    console.log("sessionStorage",sessionStorage);
    
    
})