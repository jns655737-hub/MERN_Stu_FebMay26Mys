const main=document.getElementById("main");
const firstBtn=document.getElementById("firstBtn");
const secondBtn=document.getElementById("secondBtn");
const Btn=document.getElementById("Btn");
const Btn1=document.getElementById("Btn1")
const hey=document.getElementById("hey");

//
Btn.addEventListener("click",function(){

    if(firstBtn.value.length < 5 || secondBtn.value.length < 15){
        hey.textContent = "Invalid";
        return;
    }

    hey.textContent="";

    const li=document.createElement("li");
    li.textContent=(firstBtn.value+":"+secondBtn.value);
    main.append(li);
});
Btn1.addEventListener("click",function(){
    if(main.lastElementChild){
  main.removeChild(main.lastElementChild);}
  else{
    hey.innerHTML="NO FAQ"
  }
})