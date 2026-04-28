import {React} from "react";
//props basics
function Welcome(props){
    return (
        <div className="card">
           <h2>Hello,{props.name}</h2>
           <p>Role:{props.role}</p>
        </div>
    )
}

//Parent component
export function PropBasics(){
    return(
        <>
          <Welcome name="Jeevan" role="React developer"/>
          <Welcome name="Developer" role="UI developer"/>
        </>
    )
}