//innerTxt & TextContent
//innerTxt:visible render text only
//textcontent:all text nodes regardless of css
//innerHtml:allows reading or writting Html markup tags
//inside an element

const message=document.getElementById("message");
const textCtnBtn=document.getElementById("textCtnBtn");
const resetCtnBtn=document.getElementById("resetCtnBtn");


document.getElementById("innerTextBtn").addEventListener
("click",function(){
    message.innerText="Updated using inner text";
});

textCtnBtn.addEventListener
("click",function(){
    message.textContent="Updated using textcontent";
});

resetCtnBtn.addEventListener("click",function(){
    message.innerText="Original message";
})

const box=document.getElementById("box");
document.getElementById("innerHtmlBtn").addEventListener
("click",function(){
    box.innerHTML="<strong>Original</strong>content";
});