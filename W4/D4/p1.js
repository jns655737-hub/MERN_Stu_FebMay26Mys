const out=document.getElementById("out");
const inspectBtn=document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",
    function(){
        const info ={
            htmlLang : document.documentElement.lang,
            charset:document.characterSet,
            //browsers primary prefered lang
            browserLanguage:navigator.language,
            //Array of all browser lang
            browserLanguages:navigator.languages,
            sampleText:document.getElementById("sampleText").textContent
        };
        console.log(info);
        out.textContent=JSON.stringify(info,null,2);
    }
)