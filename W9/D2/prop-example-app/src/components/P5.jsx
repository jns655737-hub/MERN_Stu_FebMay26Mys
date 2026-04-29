import {React,useState} from "react";
//State Lifting:moving shared state up to the closest common parent
//We use this: when mutiple child component mean to share the same data
//Prop drilling becomes too complex 
//child component need to updte the same data

//First child component
function NameInput({value,onChange}){
    return(
        <div>
            <label>Input 1:</label>
            <input value={value}

            onChange={(e)=>onChange(e.target.value)}
            placeholder="Type a name..."/>
        </div>
    )
}
//Second child component
function NameInput2({value,onChange}){
    return(
        <div>
            <label>Input 2:</label>
            <input value={value}
            onChange={(e)=>onChange(e.target.value)}
            placeholder="This gets updated..."/>
        </div>
    )
}

//Parent component
export function SharedStateParent(){
    const [name,setName]=useState('');
    return(
        <div>
            <h3>Shared state demo</h3>
            
            <NameInput value={name} onChange={setName}/>
            <NameInput2 value={name} onChange={setName}/>
            <div>
                <strong>Current Name:</strong>
                {name || 'Nothing typed yet'}
            </div>
        </div>
    );
}