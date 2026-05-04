//updateing objects and Arrays
import { useState } from "react";

export function UpdatingObjectsArrayStates() {
    //useState
    const [user, setUser] = useState({
        name: 'Jeevan',
        skill: 'React'
    });

    const UpdateSkill = () => {
       setUser({
        ...user,//copies all existing properties(name,skill)
        skill:'Advanced React'
       });
    };
    return(
        <>
         <h2>Updating objects state</h2>
         <p>{user.name}-{user.skill}</p>
         <button onClick={UpdateSkill}>Update</button>
        </>
    )
}