//Basic events in React
//What is an event
//An action triggered by the user(mouse event,keyboard event or DOM events)
//React uses camelCase attributes like onClick ,onChange..
//React passes an event object(SyntheticEvent)to the handler

export function EventBasics() {
    //Declaring event handler function
    const handlerclick =()=>alert('Clicked')
    return(
        <section>
            <h2>Basic Events</h2>
            {/* Event binding */}
            <button onClick={handlerclick}>
                Click me
            </button>
        </section>
    )
}