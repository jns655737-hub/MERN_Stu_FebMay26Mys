//Event bubbling and stopPropogation
const outer=document.getElementById("outer");
const inner=document.getElementById("inner");
const innerBtn=document.getElementById("innerBtn");

outer.addEventListener("click",function(){
    console.log("Outer div Clicked");
});

inner.addEventListener("click",function(event){
    console.log("inner div Clicked");
    event.stopPropagation();
});

innerBtn.addEventListener("click",function(event){
    console.log("innerBtn div Clicked");
    event.stopPropagation();
});

