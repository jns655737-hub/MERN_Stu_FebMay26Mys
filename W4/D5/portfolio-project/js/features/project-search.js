function renderProjects(){
    const projectContainer=document.getElementById("project-container");

    if(!projectContainer){
        console.log("Skills Container not found");
        return;
    }
    projectContainer.innerHTML="";
    projectsData.forEach(function(project){
        //to create outercard
        const card=document.createElement("div");
        card.className="p-8 text-center bg-white rounded-3xl shadow-lg";

        //create icon 
        const iconBox=document.createElement("div");
        iconBox.className="w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        //create icon text
        const iconText=document.createElement("span");
        iconText.className="text-2xl text-white font-bold ";
        iconText.textContent=project.id;
        

        //put icontext inside iconbox
        iconBox.appendChild(iconText);

        //create project name
        const projectName=document.createElement("h3");
        projectName.className="text-xl font-bold mb-2 ";
        projectName.textContent=project.name;

        //create projectcategeory
        const projectcat=document.createElement("h3");
        projectcat.className="text-xl font-bold mb-2 ";
        projectcat.textContent=project.category;

        //create projectstatus
        const projectstatus=document.createElement("h3");
        projectstatus.className="text-xl font-bold mb-2 ";
        projectstatus.textContent=project.status;

        //create projectlive
        const projectlive=document.createElement("h3");
        projectlive.className="text-xl font-bold mb-2 ";
        projectlive.textContent=project.liveDemo;

        //create projectlive
        const projecttech=document.createElement("h3");
        projecttech.className="text-xl font-bold mb-2 ";
        projecttech.textContent=project.technologies;

        //create skill desc
        const projectDescription=document.createElement("p");
        projectDescription.className="text-sm";
        projectDescription.textContent=project.description;

        //append all child elements to card
        card.appendChild(iconBox);
        card.appendChild(projectName);
        card.appendChild(projectcat);
        card.appendChild(projectstatus)
        card.appendChild(projectlive)
        card.appendChild(projecttech)
        card.appendChild(projectDescription);

        //append card to projectContainer
        projectContainer.appendChild(card);

    });
    console.log("Skills rendered successfully");
    
}