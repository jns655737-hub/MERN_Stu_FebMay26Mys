//useCallback with Event Handlers
//\
import { useCallback,useState,memo } from "react";

const ChildButton =memo(function ChildButton({onClick}) {
    console.log("ChildButton render");
    return(
        <button onClick={onClick}>Increment</button>
    )
})

export function UsCallbackEvents() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
        <h2>useCallback in events example</h2>
      <h2>Count: {count}</h2>

      <ChildButton onClick={handleClick} />
    </div>
  );
}