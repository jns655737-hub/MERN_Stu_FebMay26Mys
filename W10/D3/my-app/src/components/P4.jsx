//Synthetic Event vs Native DOM events
//Synthetic event:
 //A wrapper created by React around the browser's native event 
 //Gives a consistence API across browsers
 //works similarly to native DOM events
 //still allows access for the original browser events via event.nativeEvent

 //Why does Reactuse it?
 //To make event handling behave consistently
 //To simplify cross-browser differences
 //To integrate smoothly with React's event system

 //How Sythetic events works:
   //Component Render:Anything written in side of  the function is called synthetic events
   //component renders:A button appears on the Screen
   //handleClick is defined but it is not-executed

//User clickes the button:
  //Browser creates the native click event
  //React Wraps that native event in a syntheticEvent
  //React passes the SyntheticEvent to handleClick

//event referes to the syntheticEvent
//event.target gives us the HTML elements
 