// Mouse events
const hoverBox=document.getElementById("hoverBox");

hoverBox.addEventListener("mousemove",function(){
    hoverBox.textContent="Mouse is over me";
    hoverBox.style.background="yellow";
})

hoverBox.addEventListener("mouseout",function(){
    hoverBox.textContent="Hover over me";
    hoverBox.style.background="";
})