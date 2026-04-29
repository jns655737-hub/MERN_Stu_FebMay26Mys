//Props vs State
import { useState } from "react";
//Props:data passed from parent to child component
//data comes from outside the component are read-only 
// and are used for passing data between components
//State:data managed inside a component
//belongs to the component itself and it can be modified/changed
//setter method is used to modify data
function Child({title}) {
    return <p>Props:{title}</p>
}

export function PropsState() {
    const [stateValue,setStateValue]=useState('Local State');
    return(
        <>
          <h3>Props vs State</h3>
          <Child title="Parent Data"/>

          <p>State:{stateValue}</p>
          <button onClick={()=>setStateValue('This is New State')}>
            Update State
          </button>
        </>
    )
}