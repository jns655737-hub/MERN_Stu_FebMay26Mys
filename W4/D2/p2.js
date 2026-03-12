const list=document.getElementById("list");
let count=1;
const hey=document.getElementById("hey")
 hey.textContent="";

document.getElementById("addBtn").
  addEventListener("click",
    function(){
    const li=document.createElement("li");
    li.textContent="Item"+count++;
    list.append(li);
  })
 
  document.getElementById("rmBtn").
  addEventListener("click",
    function(){
        if(list.lastElementChild){
    list.removeChild(list.lastElementChild);
    
        }
        else{
            // console.log("there is no item to remove");
            hey.innerHTML="there is no item to remove";
        }
  })
 
