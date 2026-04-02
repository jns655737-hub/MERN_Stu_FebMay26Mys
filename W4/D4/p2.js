const translations={
    kn:{title:" ಸ್ವಪಥ",desc:"ಸ್ವಪಥ  ಕನ್ನಡ" },
    en:{title:"Welcome",desc:"This is a local information"},
    hi:{title:"स्वागत",desc:"स्वागत हे स्थिरकृता "},
    pu:{title:"ਨਮਸਕਾਰ",desc:"ਪੰਜਾਬੀ ਨਮਸਕਾਰ"}
}
const title=document.getElementById("title");
const desc=document.getElementById("desc");
const out=document.getElementById("out");

function render(lang){
    const t=translations[lang] || translations.en;
    document.getElementById.lang=lang;
    title.textContent=t.title;
    desc.textContent=t.desc;
    out.textContent="Current UI lang:"+lang;
    console.log("Rendered lang:",lang);
    
}
document.getElementById("langSelect").addEventListener("change",
    function(){
        render(this.value);
    }
);
document.getElementById("detectBtn").addEventListener("click",
    function(){
        const detected=(navigator.language||"en").slice(0,2).toLowerCase();
        render(detected);
    }
);
render("en");