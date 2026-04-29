//Props destructuring
import { React } from "react";
//Child component
function UserProfile({userName,skill}){
      return(
        <div>
            <p>User:{userName}</p>
            <p>Skill:{skill}</p>
        </div>
      )
}
//Parent Component
export function PropDestructuring(){
    return(
        <>
        <h2>PropDestructuring</h2>
        <UserProfile userName="Jeevan" skill="React"/>
        </>
    );
}