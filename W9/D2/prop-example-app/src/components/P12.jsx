//Higher order components(HOC)
const Greeting=({name})=>{
    return <h1>Hello,{name}</h1>
}

const WithBorder=(OriginalComponent)=>{
    return function EnhancedComponents(props){
        return(
            <div className="setBorder">
              <OriginalComponent{...props}/>
            </div>
        );
    }
}
const GreetingsWithBorder = WithBorder(Greeting);

export function HOCExample(){
    return(
        <>
         <GreetingsWithBorder name="Jeevan"/>
        </>
    )
}