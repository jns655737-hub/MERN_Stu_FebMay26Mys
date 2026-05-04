import React, { useState } from "react"
//useState Basics:its a react hook that adds state to function component
//It returns array with 2 values they are 
// 1.Current state value 
// 2.Function to update state
//Syntax:
// const [stateValue,setStateValue]=useState(initialValue);

export function UseStateBasics() {
    const [count,setCount]=useState(0);
    return(
        <>
        <h2>useState Basics</h2>
        <p>Count:{count}</p>

        <button onClick={()=>setCount(count+2)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

        </>
    )
}