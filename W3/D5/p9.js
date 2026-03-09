//
const onceBtn=document.getElementById("onceBtn");

onceBtn.addEventListener("click",function(){
    console.log("This Listener works only once.");
},{once:true})
//{once:true}once this event occurs after that it will not occur

//global keyboard shortcut creation
document.addEventListener("keydown",function(event){
    if (event.ctrlKey && event.key.toLowerCase()==='s') {
        event.preventDefault();
        document.writeln("customer ctrl+s shortcut triggered");
        
    }
})