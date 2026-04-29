//Passing functions as props
//Also called as "callback props"
//when to use:Child component invoke parent logic 
function ChildButton({onGreet}){
     return(
        <button onClick={onGreet}>
           Invoke Parent Function
        </button>
     )
}
export function FunctionProps(params) {
    const greet=()=>alert('Hello from Parent function');
    return(
        <>
        <h2>Passing functions as props</h2>
        <ChildButton onGreet={greet}/>
        </>
    )
}
