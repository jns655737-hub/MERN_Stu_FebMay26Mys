// //
// console.log("Document oject:",document);
// console.log("document title",document.title);

// const heading=document.getElementById("mainHeading");
// console.log("Heading Text",heading.textContent);


//getelementbyclassname
const info=document.getElementsByClassName("info");
const run=document.getElementById("run");

// run.addEventListener("click",function(){
//     for(let i=0;i<info.length;i++){
//         console.log(info[i].textContent);
//         info[i].style.color="blue";
//     }
// });

//getElementByTagName
const spanTag=document.getElementsByTagName("span");

run.addEventListener("click",function(){
    for(let i=0;i<info.length;i++){
        console.log(info[i].textContent);
        info[i].style.color="blue";
    }
    for(let i=0;i<spanTag.length;i++){
        // console.log(spanTag[i].textContent);
        spanTag[i].style.backgroundColor="lightgreen";
    }
})

// Query selectors the first element matching a css element
const mainHeading=document.querySelector(".mainHeading");
mainHeading.style.color="red";

//Query selector all ,returns all elements matching the selector
const task=document.querySelectorAll(".task")
task.forEach(function(task){
     task.style.color="orange"
})