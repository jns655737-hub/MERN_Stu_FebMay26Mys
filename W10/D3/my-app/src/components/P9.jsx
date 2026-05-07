//
export function EventObj() {
    const handleParentClick=(event)=>{
        alert(` Parent clicked target:${event.target.tagName} currentTarget:${event.currentTarget.tagName}`);
    };
    const handleChildClick=(event)=>{
        event.stopPropogation();
        alert(` Child clicked (propagation stopped) target:${event.target.tagName} currentTarget: ${event.currentTarget.tagName}`);
    };
   //form submit handler
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("Form submitted safely by preventing default refresh");
    };

    const handleBoxClick=(event)=>{
        alert(`Box clicked  target:${event.target.tagName} currentTarget: ${event.currentTarget.tagName}`)
            }
    return(
        <section onClick={handleParentClick} style={{padding:'20px', backgroundColor:'yellow'}}>
            <h2>Event object</h2>
            <button onClick={handleChildClick}>ChildButton</button>
             <button onClick={handleSubmit}>SubmitForm</button>
             <div onClick={handleBoxClick}
             style={{padding:'20px',backgroundColor:'red'}}>
               <span style={{padding:'20px',backgroundColor:'blue',display:'inline-block'}}>InnerSpan</span>
             </div>
        </section>
    )
}