import React from 'react';
function Welcome(props){
    //child component:reusable UI
    return(
        <p>Hello,{props.name}</p>
    )
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing Jeevan as prop
            Welcome fun receives is as {name:"Jeevan"} */}
            <Welcome name="Jeevan"/>
             {/* We are passing Developer as prop
            Welcome fun receives is as {name:"Developer"} */}
            <Welcome name="Developer"/>

        </div>
    )
}