const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output")

document.getElementById("saveBtn").addEventListener("click",
    function(){
        localStorage.setItem("theme",themeInput.value);
        localStorage.setItem("UserName","Jeevan");
        localStorage.setItem("loggedin","True");
        console.log("Save theme:",themeInput.value);
        output.textContent="Successfully Completed";
        output.style.color="green";
    }
)

document.getElementById("readBtn").addEventListener("click",
    function(){
        const theme=localStorage.getItem("theme");
        // console.log("Save theme:",themeInput.value);
        output.textContent="theme is:"
        +theme;
        output.style.color="green";
    }
)

document.getElementById("removeBtn").addEventListener("click",
    function(){
        localStorage.removeItem("loggedin");
        output.textContent="Removed 'loggedin'";
        output.style.color="green";
    }
)

document.getElementById("clearBtn").addEventListener("click",
    function(){
        localStorage.clear("theme");
        output.textContent="Deleted All";
        output.style.color="red";
    }
)
