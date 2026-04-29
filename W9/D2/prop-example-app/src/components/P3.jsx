//Container/wrapper component
import {React} from "react";
//Children is a special react prop
//It holds nested JSX passed between component tags
//It helps create reusable wrapper/layout components
function Container({children}){
  return(
    <div className="card">
        {children}
    </div>
  );
}
//Parent component
export function PropsChildren(){
    return(
        <>
         {/* just to hold child function/class */}
         <Container>{/*Container is a name of child component */}
            <h3>First child element in nested approach</h3>
         </Container>
        </>
    )
}