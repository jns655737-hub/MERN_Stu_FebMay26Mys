//Keyboard events:keydown
const nameInput=document.getElementById("nameInput")
const display=document.getElementById("display")

nameInput.addEventListener("keydown",function(event){
    display.textContent="key pressed:"+event.key;
    
})


