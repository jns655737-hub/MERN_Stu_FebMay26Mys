import { useState } from "react";

//Passing arguements to Event Handlers
export function PassingArguements() {
    const [message,setMessage]=useState('No Message yet');
    //Event handler function
    const handleClick = (msg)=>{
        setMessage(msg);
    };
    return(
        <section>
            <h2>Passing Arguement</h2>
            <button onClick={()=>handleClick("Namaskara Bengluruuu")}>
                Click me
            </button>
            <p>Message:{message}</p>
        </section>
    )
}