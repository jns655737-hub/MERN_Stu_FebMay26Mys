//Basics of click events

const button=document.getElementById("clickBtn");

button.addEventListener("click",function(){  //it waits to event occur
    console.log("Button is clicked");
    
});

button.addEventListener("click",function(){  //it waits to event occur
    console.log("Second event listener:Button is clicked");
    
});